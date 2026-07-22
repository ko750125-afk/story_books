// ==========================================
// 꼬마 탐정 아리와 비밀 도서관의 꼬마 유령
// Web Audio API 사운드 및 BGM 합성 모듈
// ==========================================

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.bgmNode = null;
    this.isBgmPlaying = false;
    this.bgmTimer = null;
  }

  // AudioContext 초기화 (사용자 첫 클릭 시 활성화)
  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // 1. 버블 클릭 효과음 (버튼 누를 때)
  playClick() {
    this.init();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.08);
  }

  // 2. 책장 넘기는 소리 (샤르륵- 종이 마찰음)
  playPageTurn() {
    this.init();
    if (!this.audioCtx) return;

    const bufferSize = this.audioCtx.sampleRate * 0.25; // 0.25초
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    // 화이트 노이즈 생성
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    // 로우패스 필터로 샤르륵 거리는 종이 마찰음 연출
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, this.audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1500, this.audioCtx.currentTime + 0.12);
    filter.frequency.exponentialRampToValueAtTime(200, this.audioCtx.currentTime + 0.25);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.25, this.audioCtx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);

    noise.start();
    noise.stop(this.audioCtx.currentTime + 0.25);
  }

  // 3. 마법 차임 벨소리 (단서 발견 / 퐁이 만남)
  playMagicChime() {
    this.init();
    if (!this.audioCtx) return;

    const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    freqs.forEach((freq, idx) => {
      const startTime = this.audioCtx.currentTime + idx * 0.07;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  }

  // 4. 엔딩 해금 팬파레 오르골 사운드 (짜잔!)
  playEndingFanfare() {
    this.init();
    if (!this.audioCtx) return;

    const notes = [
      { freq: 523.25, duration: 0.15 }, // C5
      { freq: 659.25, duration: 0.15 }, // E5
      { freq: 783.99, duration: 0.15 }, // G5
      { freq: 1046.50, duration: 0.5 }   // C6 (길게)
    ];

    let now = this.audioCtx.currentTime;
    notes.forEach(note => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.freq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + note.duration);

      now += note.duration * 0.8;
    });
  }

  // 5. 밤 도서관 은은한 오르골 BGM 루프
  toggleBgm() {
    this.init();
    if (this.isBgmPlaying) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }

  startBgm() {
    if (!this.audioCtx) return;
    this.isBgmPlaying = true;
    
    // 은은한 오르골 아르페지오 음계 (C 메이저 파스텔 톤)
    const melody = [
      523.25, 659.25, 783.99, 659.25,
      587.33, 698.46, 880.00, 698.46,
      440.00, 523.25, 659.25, 523.25,
      493.88, 587.33, 783.99, 587.33
    ];
    let noteIndex = 0;

    const playNextBgmNote = () => {
      if (!this.isBgmPlaying) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(melody[noteIndex], this.audioCtx.currentTime);

      // 매우 은은하고 편안한 볼륨 (0.05)
      gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(this.audioCtx.currentTime);
      osc.stop(this.audioCtx.currentTime + 0.8);

      noteIndex = (noteIndex + 1) % melody.length;
      this.bgmTimer = setTimeout(playNextBgmNote, 500); // 0.5초 간격
    };

    playNextBgmNote();
  }

  stopBgm() {
    this.isBgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  // 한국어 프리미엄 이야기꾼(Natural/Neural) 음성 탐색기
  getBestKoreanVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    const koVoices = voices.filter(v => v.lang.includes('ko') || v.lang.includes('KO') || v.lang === 'ko_KR');

    if (koVoices.length === 0) return null;

    // 1순위: Edge/Chrome의 프리미엄 신경망 성우 음성 (Natural, Neural, Online, Sun-Hi, InJoon)
    const naturalVoice = koVoices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Neural') || 
      v.name.includes('Online') ||
      v.name.includes('Sun-Hi') ||
      v.name.includes('InJoon')
    );
    if (naturalVoice) return naturalVoice;

    // 2순위: Google 고품질 한국어 음성
    const googleVoice = koVoices.find(v => v.name.includes('Google'));
    if (googleVoice) return googleVoice;

    // 3순위: 기본 한국어 음성
    return koVoices[0];
  }

  // 6. 동화 본문 TTS 음성 낭독 엔진 (이야기꾼 성우 억양 최적화)
  speakText(text, onStartCallback, onEndCallback) {
    if (!('speechSynthesis' in window)) {
      console.warn("이 브라우저는 음성 낭독(Speech Synthesis)을 지원하지 않습니다.");
      return;
    }

    // 진행 중인 이전 낭독 즉시 취소
    this.stopSpeech();

    // 동화책 특수문자 및 불필요한 기호 정리
    const cleanText = text
      .replace(/[\"\"\[\]\(\)]/g, '')
      .replace(/Node\d+/g, '')
      .replace(/\n+/g, ' ');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ko-KR';

    // 프리미엄 신경망 이야기꾼 음성 적용
    const bestVoice = this.getBestKoreanVoice();
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    // 이야기꾼 성우 톤 설정 (목소리가 튀지 않고 따뜻하고 부드러운 호흡)
    utterance.pitch = 1.15; // 다정하고 맑은 동화 선생님 톤
    utterance.rate = 0.88;  // 로봇처럼 빠르지 않게 감정을 실어 낭독하는 또박또박한 속도
    utterance.volume = 1.0;

    if (onStartCallback) utterance.onstart = onStartCallback;
    if (onEndCallback) {
      utterance.onend = onEndCallback;
      utterance.onerror = onEndCallback;
    }

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  isSpeaking() {
    return 'speechSynthesis' in window && window.speechSynthesis.speaking;
  }
}

// 싱글톤 인스턴스 전역 제공
window.soundManager = new SoundManager();

// 음성 인공지능 보이스 엔진 사전 로딩
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.soundManager.getBestKoreanVoice();
  };
}
