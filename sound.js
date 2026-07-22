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

  // 동화 구연용 대사/해설 분라 파서
  parseStorySegments(text) {
    const cleanText = text.replace(/Node\d+/g, '');
    const regex = /("[^"]*")|([^"]+)/g;
    const segments = [];
    let match;
    while ((match = regex.exec(cleanText)) !== null) {
      if (match[1]) {
        // 큰따옴표 대사 (아리/퐁이 캐릭터 대사)
        segments.push({ text: match[1], isDialogue: true });
      } else if (match[2]) {
        // 해설 부분은 마침표/줄바꿈 문장 단위로 분할하여 자연스러운 숨쉬기 부여
        const sentences = match[2].split(/([.!?\n]+)/);
        for (let i = 0; i < sentences.length; i += 2) {
          const s = (sentences[i] + (sentences[i + 1] || '')).trim();
          if (s) segments.push({ text: s, isDialogue: false });
        }
      }
    }
    return segments;
  }

  // 6. 동화 본문 TTS 음성 낭독 엔진 (모바일 iOS Safari / Android Chrome 완벽 호환)
  speakText(text, onStartCallback, onEndCallback) {
    if (!('speechSynthesis' in window)) return;

    // 모바일 브라우저 일시정지 상태 해제
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    // 모바일에서는 cancel() 후 20ms 딜레이를 주어야 오디오 스레드가 무너지지 않음
    window.speechSynthesis.cancel();

    setTimeout(() => {
      const segments = this.parseStorySegments(text);
      let index = 0;

      const playNextSegment = () => {
        if (index >= segments.length) {
          if (onEndCallback) onEndCallback();
          return;
        }

        const seg = segments[index++];
        const currentText = seg.text.replace(/[\"\"\[\]\(\)]/g, '').trim();

        if (!currentText) {
          playNextSegment();
          return;
        }

        const utterance = new SpeechSynthesisUtterance(currentText);
        utterance.lang = 'ko-KR'; // 모바일 표준 필수 한국어 코드

        // 모바일 호환 음성 할당 시도
        try {
          const bestVoice = this.getBestKoreanVoice();
          if (bestVoice) utterance.voice = bestVoice;
        } catch (e) {
          // 모바일 예외 발생 시 기본 lang ko-KR로 자동 발음
        }

        // 구연동화 캐릭터 연기 톤
        if (seg.isDialogue) {
          utterance.pitch = 1.25;
          utterance.rate = 0.90;
        } else {
          utterance.pitch = 1.10;
          utterance.rate = 0.86;
        }

        utterance.onend = () => {
          setTimeout(playNextSegment, 200);
        };
        utterance.onerror = () => {
          setTimeout(playNextSegment, 100);
        };

        if (index === 1 && onStartCallback) onStartCallback();

        window.speechSynthesis.speak(utterance);
      };

      playNextSegment();
    }, 20);
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

// 모바일 브라우저 오디오 보안 해금 (iOS Safari / Android Chrome Touch Unlocker)
function unlockMobileTTS() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.resume();
    const silentUtterance = new SpeechSynthesisUtterance('');
    silentUtterance.volume = 0;
    window.speechSynthesis.speak(silentUtterance);
  }
}
document.addEventListener('touchstart', unlockMobileTTS, { once: true });
document.addEventListener('click', unlockMobileTTS, { once: true });

// 싱글톤 인스턴스 전역 제공
window.soundManager = new SoundManager();

// 음성 인공지능 보이스 엔진 사전 로딩
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.soundManager.getBestKoreanVoice();
  };
}
