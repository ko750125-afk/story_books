// ==========================================
// 꼬마 탐정 지우의 4대 마법 모험 시리즈 전집
// 코스별 최고 점수(100/80/60/40점) 갱신 & 400점 만점 명예의 전당 도감 엔진
// ==========================================
// 스토리 데이터: stories.js (별도 파일로 분리됨)
// 사운드 엔진: sound.js (별도 파일로 분리됨)
// ==========================================

// ------------------------------------------
// [섹션 1] 엔딩별 점수 & 코스별 도감 메타데이터
// ------------------------------------------

// 엔딩별 점수 및 뱃지 메타데이터 정의
const endingScoreMeta = {
  "ending-happy": { score: 100, grade: "🏆 100점 만점", badgeName: "동화 왕국 수호자 뱃지" },
  "ending-detective": { score: 80, grade: "🌟 80점 우수", badgeName: "전설의 꼬마 명탐정 뱃지" },
  "ending-toy": { score: 60, grade: "🎈 60점 참 잘했어요", badgeName: "장난감 친구 뱃지" },
  "ending-ghost": { score: 40, grade: "🍪 40점 탐험 성공", badgeName: "유령 파티 동화 뱃지" }
};

// 동화 코스별 엔딩 메타데이터 정의
const storyAlbumMeta = {
  story1: {
    name: "📚 1탄: 비밀 도서관",
    endings: {
      "ending-happy": { title: "🔑 도서관 수호자 뱃지", img: "assets/images/scene_ending_happy.png" },
      "ending-detective": { title: "🌟 전설의 꼬마 탐정 뱃지", img: "assets/images/scene_ending_detective.png" },
      "ending-toy": { title: "🐭 장난감 친구 뱃지", img: "assets/images/scene_ending_toy.png" },
      "ending-ghost": { title: "👻 왁자지껄 유령 파티 뱃지", img: "assets/images/scene_ending_ghost.png" }
    }
  },
  story2: {
    name: "🍫 2탄: 달콤한 과자 성",
    endings: {
      "ending-happy": { title: "👑 과자 왕국 수호자 뱃지", img: "assets/images/scene_story2_ending.png" },
      "ending-detective": { title: "🔍 달콤한 과자 명탐정 뱃지", img: "assets/images/scene_ending_detective.png" },
      "ending-toy": { title: "🧸 젤리 곰 장난감 파티 뱃지", img: "assets/images/scene_story2_cookie.png" },
      "ending-ghost": { title: "🍪 과자 성 달콤 대축제 뱃지", img: "assets/images/scene_story2_start.png" }
    }
  },
  story3: {
    name: "🌊 3탄: 바닷속 용궁",
    endings: {
      "ending-happy": { title: "🌈 해저 용궁 수호자 뱃지", img: "assets/images/scene_ending_happy.png" },
      "ending-detective": { title: "🏆 용궁 해저 명탐정 뱃지", img: "assets/images/scene_ending_detective.png" },
      "ending-toy": { title: "🐟 태엽 물고기 댄스 뱃지", img: "assets/images/scene_ending_toy.png" },
      "ending-ghost": { title: "🐢 부기와 용궁 파티 뱃지", img: "assets/images/scene_story3_palace.png" }
    }
  },
  story4: {
    name: "🚀 4탄: 장난감 우주선",
    endings: {
      "ending-happy": { title: "🌌 은하수 우주 수호자 뱃지", img: "assets/images/scene_ending_happy.png" },
      "ending-detective": { title: "🏆 전설의 우주 명탐정 뱃지", img: "assets/images/scene_ending_detective.png" },
      "ending-toy": { title: "🤖 우주 로봇 파티 뱃지", img: "assets/images/scene_ending_toy.png" },
      "ending-ghost": { title: "🪐 토성 띠 우주 파티 뱃지", img: "assets/images/scene_story4_start.png" }
    }
  }
};

// (스토리 데이터 모듈: stories.js 참조)

// DOM 요소 취득
const illustrationEl = document.getElementById("illustration");
const storyTextEl = document.getElementById("story-text");
const choiceContainerEl = document.getElementById("choice-container");
const progressEl = document.getElementById("progress");

const btnAlbumEl = document.getElementById("btn-album");
const albumModalEl = document.getElementById("album-modal");
const btnCloseAlbumEl = document.getElementById("btn-close-album");
const btnResetStoryEl = document.getElementById("btn-reset-story");
const storySelectEl = document.getElementById("story-select");

// 전역 게임 데이터 상태
let currentStoryKey = "story1";
let currentNodeId = "start";
let courseScoresMap = {
  story1: { endingId: null, score: 0 },
  story2: { endingId: null, score: 0 },
  story3: { endingId: null, score: 0 },
  story4: { endingId: null, score: 0 }
};
let isAutoTTSMode = false;

// 현재 스토리 데이터 취득
function getActiveStoryData() {
  return allStories[currentStoryKey] || story1Data;
}

// 총점 계산 및 UI 반영
function updateTotalScoreUI() {
  let totalScore = 0;
  Object.keys(courseScoresMap).forEach(key => {
    totalScore += (courseScoresMap[key].score || 0);
  });

  const scoreBadgeEl = document.getElementById("total-score-badge");
  const modalScoreEl = document.getElementById("modal-total-score");

  if (scoreBadgeEl) {
    scoreBadgeEl.textContent = `🏆 탐험 점수: ${totalScore}점 / 400점 만점`;
  }
  if (modalScoreEl) {
    modalScoreEl.textContent = `🌟 총 탐험 점수: ${totalScore}점 / 400점 만점`;
  }
}

// 로컬 스토리지 로드
function loadGameData() {
  const savedStoryKey = localStorage.getItem("currentStoryKey");
  if (savedStoryKey && allStories[savedStoryKey]) {
    currentStoryKey = savedStoryKey;
  }
  if (storySelectEl) {
    storySelectEl.value = currentStoryKey;
  }

  const activeData = getActiveStoryData();
  const savedNode = localStorage.getItem(`currentNode_${currentStoryKey}`);
  if (savedNode && activeData[savedNode]) {
    currentNodeId = savedNode;
  } else {
    currentNodeId = "start";
  }

  const savedScores = localStorage.getItem("courseScoresMap");
  if (savedScores) {
    try {
      courseScoresMap = JSON.parse(savedScores);
    } catch (e) {
      // fallback
    }
  }

  updateTotalScoreUI();
  updateAlbumUI();
}

// 메인 화면 렌더링 함수
function renderNode(nodeId) {
  const activeData = getActiveStoryData();
  const node = activeData[nodeId];
  if (!node) return;

  if (window.soundManager) {
    window.soundManager.stopSpeech();
    if (!isAutoTTSMode) {
      updateTTSUI(false);
    }
  }

  if (window.soundManager) {
    if (nodeId === "glowing_bookshelf" || nodeId === "cookie_gate" || nodeId === "dragon_palace" || nodeId === "space_cockpit") {
      window.soundManager.playMagicChime();
    } else if (node.choices && node.choices.length === 0) {
      window.soundManager.playEndingFanfare();
    }
  }

  localStorage.setItem("currentStoryKey", currentStoryKey);
  localStorage.setItem(`currentNode_${currentStoryKey}`, nodeId);

  progressEl.style.width = `${node.progress}%`;

  illustrationEl.parentElement.classList.add("fade-out");
  storyTextEl.parentElement.classList.add("fade-out");
  choiceContainerEl.classList.add("fade-out");

  setTimeout(() => {
    illustrationEl.src = node.image;
    storyTextEl.textContent = node.text;

    choiceContainerEl.innerHTML = "";
    if (node.choices && node.choices.length > 0) {
      node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "btn-choice";
        btn.textContent = choice.text;
        btn.addEventListener("click", () => {
          if (window.soundManager) {
            window.soundManager.playClick();
            window.soundManager.playPageTurn();
          }
          currentNodeId = choice.nextNode;
          renderNode(currentNodeId);
        });
        choiceContainerEl.appendChild(btn);
      });
    } else {
      const btnReset = document.createElement("button");
      btnReset.className = "btn-choice";
      btnReset.style.background = "linear-gradient(135deg, #7209b7 0%, #b5179e 100%)";
      btnReset.textContent = "📖 모험을 성공적으로 마쳤어요! 다시 도전하여 더 높은 점수 얻기";
      btnReset.addEventListener("click", () => {
        if (window.soundManager) window.soundManager.playClick();
        resetStory();
      });
      choiceContainerEl.appendChild(btnReset);

      if (node.endingId) {
        evaluateCourseScore(node.endingId);
      }
    }

    illustrationEl.parentElement.classList.remove("fade-out");
    storyTextEl.parentElement.classList.remove("fade-out");
    choiceContainerEl.classList.remove("fade-out");

    illustrationEl.parentElement.classList.add("fade-in");
    storyTextEl.parentElement.classList.add("fade-in");
    choiceContainerEl.classList.add("fade-in");

    setTimeout(() => {
      illustrationEl.parentElement.classList.remove("fade-in");
      storyTextEl.parentElement.classList.remove("fade-in");
      choiceContainerEl.classList.remove("fade-in");

      if (isAutoTTSMode) {
        startTTSForCurrentNode();
      }
    }, 520);

  }, 400);
}

// 최고 탐험 점수 갱신 및 대표 도감 수록 평가
function evaluateCourseScore(endingId) {
  const meta = endingScoreMeta[endingId] || { score: 40, grade: "🍪 40점 탐험 성공", badgeName: "동화 뱃지" };
  const earnedScore = meta.score;

  const currentCourseRecord = courseScoresMap[currentStoryKey] || { endingId: null, score: 0 };
  const oldScore = currentCourseRecord.score || 0;

  let isNewRecord = false;
  if (earnedScore > oldScore) {
    isNewRecord = true;
    courseScoresMap[currentStoryKey] = {
      endingId: endingId,
      score: earnedScore
    };
    localStorage.setItem("courseScoresMap", JSON.stringify(courseScoresMap));
    updateTotalScoreUI();
    updateAlbumUI();
  }

  setTimeout(() => {
    showCelebrationModal(endingId, earnedScore, isNewRecord, oldScore);
  }, 300);
}

// 마법 축하 및 최고점 갱신 모달
function showCelebrationModal(endingId, earnedScore, isNewRecord, oldScore) {
  const celModalEl = document.getElementById("celebration-modal");
  const celTitleEl = document.getElementById("cel-title");
  const celImageEl = document.getElementById("cel-image");
  const celEndingNameEl = document.getElementById("cel-ending-name");
  const celDescEl = document.getElementById("cel-desc");

  if (window.soundManager) {
    window.soundManager.playEndingFanfare();
  }

  const cardEl = celModalEl.querySelector(".celebration-card");
  if (cardEl) {
    cardEl.style.animation = "none";
    void cardEl.offsetWidth;
    cardEl.style.animation = "popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
  }

  const currentStoryMeta = storyAlbumMeta[currentStoryKey] || storyAlbumMeta.story1;
  const foundEnding = currentStoryMeta.endings[endingId];
  const scoreMeta = endingScoreMeta[endingId] || { score: 40, grade: "40점" };

  let endingImg = foundEnding ? foundEnding.img : "assets/images/scene_ending_happy.png";
  let endingTitle = foundEnding ? foundEnding.title : "마법 수호자 뱃지";

  celImageEl.src = endingImg;

  if (isNewRecord) {
    celTitleEl.textContent = "🎉 최고 탐험 점수 신기록 달성!";
    celEndingNameEl.textContent = `${scoreMeta.grade} | ${endingTitle}`;
    celDescEl.textContent = `축하합니다! 지우가 이전 기록(${oldScore}점)을 넘어서 새로운 최고 점수 ${earnedScore}점 대표 도감 뱃지를 획득했습니다!`;
  } else {
    celTitleEl.textContent = "📖 탐험 완료! (최고 점수 유지)";
    celEndingNameEl.textContent = `${scoreMeta.grade} | ${endingTitle}`;
    celDescEl.textContent = `이번 탐험 점수는 ${earnedScore}점입니다! (이전 최고 점수 ${oldScore}점 도감이 유지됩니다. 100점 만점을 향해 다시 도전해 보세요!)`;
  }

  launchConfetti();

  albumModalEl.classList.add("hidden");
  celModalEl.classList.remove("hidden");
}

// 컨페티 폭죽 연출
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ff758f", "#70d6ff", "#ffd166", "#e0aaff", "#ffffff", "#ff9eb5", "#06d6a0"];

  for (let i = 0; i < 180; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 300 - 150),
      y: canvas.height / 2.5 + (Math.random() * 100 - 50),
      vx: (Math.random() - 0.5) * 18,
      vy: Math.random() * -16 - 5,
      size: Math.random() * 10 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: Math.random() * 14 - 7,
      opacity: 1
    });
  }

  const startTime = Date.now();
  function render() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.rSpeed;
      if (elapsed > 1800) p.opacity -= 0.025;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (elapsed < 3200) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(render);
}

// 4대 코스별 최고 대표 뱃지 1개씩 명예의 전당 도감 렌더링
function updateAlbumUI() {
  const gridEl = document.getElementById("album-grid");
  if (!gridEl) return;

  gridEl.innerHTML = "";

  const storyKeys = ["story1", "story2", "story3", "story4"];

  storyKeys.forEach(sKey => {
    const sMeta = storyAlbumMeta[sKey];
    const record = courseScoresMap[sKey] || { endingId: null, score: 0 };
    const endingId = record.endingId;
    const score = record.score || 0;

    const itemEl = document.createElement("div");
    itemEl.className = "album-item";

    if (score > 0 && endingId && sMeta.endings[endingId]) {
      const eInfo = sMeta.endings[endingId];
      const sScoreMeta = endingScoreMeta[endingId] || { grade: `${score}점` };

      itemEl.classList.add("unlocked");
      itemEl.innerHTML = `
        <div class="album-status">${sMeta.name} 대표 뱃지</div>
        <img src="${eInfo.img}" alt="${eInfo.title}">
        <h3>${eInfo.title}</h3>
        <div class="score-tag">${sScoreMeta.grade} (${score}점)</div>
      `;
      itemEl.onclick = () => {
        showCelebrationModal(endingId, score, false, score);
      };
      itemEl.style.cursor = "pointer";
    } else {
      itemEl.classList.remove("unlocked");
      itemEl.innerHTML = `
        <div class="album-status">${sMeta.name} (🔒 미탐험)</div>
        <img src="assets/images/scene_start.png" alt="미탐험 코스" style="filter: grayscale(1) opacity(0.35);">
        <h3>최고 점수에 도전해 보세요!</h3>
        <div class="score-tag" style="background:#6c757d; color:#fff;">0점 (미획득)</div>
      `;
      itemEl.onclick = null;
      itemEl.style.cursor = "default";
    }

    gridEl.appendChild(itemEl);
  });
}

// 리셋 스토리
function resetStory() {
  currentNodeId = "start";
  isAutoTTSMode = false;
  localStorage.setItem(`currentNode_${currentStoryKey}`, "start");

  if (window.soundManager) {
    window.soundManager.stopSpeech();
    updateTTSUI(false);
  }

  albumModalEl.classList.add("hidden");
  const celModalEl = document.getElementById("celebration-modal");
  if (celModalEl) celModalEl.classList.add("hidden");

  if (window.soundManager) {
    window.soundManager.playClick();
    window.soundManager.playPageTurn();
  }

  renderNode("start");
}

// TTS 시작
function startTTSForCurrentNode() {
  if (!window.soundManager) return;

  const textToRead = storyTextEl.textContent;

  window.soundManager.speakText(
    textToRead,
    () => updateTTSUI(true),
    () => {
      if (isAutoTTSMode) {
        updateTTSUI(true);
      } else {
        updateTTSUI(false);
      }
    }
  );
}

// TTS UI
function updateTTSUI(isSpeaking) {
  const btnTts = document.getElementById("btn-tts");
  const storyCard = document.getElementById("story-card");
  if (!btnTts) return;

  if (isSpeaking || isAutoTTSMode) {
    btnTts.textContent = "🛑 읽기 중지";
    btnTts.classList.add("speaking");
    if (storyCard) storyCard.classList.add("speaking");
  } else {
    btnTts.textContent = "🔊 동화 읽어주기";
    btnTts.classList.remove("speaking");
    if (storyCard) storyCard.classList.remove("speaking");
  }
}

// 이벤트 리스너
if (storySelectEl) {
  storySelectEl.addEventListener("change", (e) => {
    currentStoryKey = e.target.value;
    currentNodeId = "start";
    isAutoTTSMode = false;
    localStorage.setItem("currentStoryKey", currentStoryKey);
    updateAlbumUI();
    if (window.soundManager) {
      window.soundManager.playClick();
      window.soundManager.playPageTurn();
    }
    renderNode("start");
  });
}

const btnResetHeaderEl = document.getElementById("btn-reset-header");
if (btnResetHeaderEl) {
  btnResetHeaderEl.addEventListener("click", () => {
    resetStory();
  });
}

// TTS (동화 읽어주기) 버튼 이벤트 연결
const btnTtsEl = document.getElementById("btn-tts");
if (btnTtsEl) {
  btnTtsEl.addEventListener("click", () => {
    if (!window.soundManager) return;
    if (window.soundManager.isSpeaking()) {
      isAutoTTSMode = false;
      window.soundManager.stopSpeech();
      updateTTSUI(false);
    } else {
      isAutoTTSMode = true;
      startTTSForCurrentNode();
    }
  });
}

// BGM (배경음악) 버튼 이벤트 연결
const btnBgmEl = document.getElementById("btn-bgm");
if (btnBgmEl) {
  btnBgmEl.addEventListener("click", () => {
    if (!window.soundManager) return;
    const isPlaying = window.soundManager.toggleBgm();
    btnBgmEl.textContent = isPlaying ? "🎵 음악 OFF" : "🎵 음악 ON";
    if (isPlaying) {
      btnBgmEl.classList.add("active");
    } else {
      btnBgmEl.classList.remove("active");
    }
  });
}

// 축하 모달 닫기 및 도감 이동 이벤트 처리
function closeCelebrationAndOpenAlbum() {
  if (window.soundManager) window.soundManager.playClick();
  const celModalEl = document.getElementById("celebration-modal");
  if (celModalEl) celModalEl.classList.add("hidden");
  if (albumModalEl) albumModalEl.classList.remove("hidden");
}

const btnCloseCelEl = document.getElementById("btn-close-cel");
if (btnCloseCelEl) {
  btnCloseCelEl.addEventListener("click", (e) => {
    e.stopPropagation();
    closeCelebrationAndOpenAlbum();
  });
}

const btnCloseCelXEl = document.getElementById("btn-close-cel-x");
if (btnCloseCelXEl) {
  btnCloseCelXEl.addEventListener("click", (e) => {
    e.stopPropagation();
    closeCelebrationAndOpenAlbum();
  });
}

const celModalEl = document.getElementById("celebration-modal");
if (celModalEl) {
  celModalEl.addEventListener("click", () => {
    closeCelebrationAndOpenAlbum();
  });
}

btnAlbumEl.addEventListener("click", () => {
  if (window.soundManager) window.soundManager.playClick();
  albumModalEl.classList.remove("hidden");
});

btnCloseAlbumEl.addEventListener("click", () => {
  if (window.soundManager) window.soundManager.playClick();
  albumModalEl.classList.add("hidden");
});

albumModalEl.addEventListener("click", (e) => {
  if (e.target === albumModalEl) {
    if (window.soundManager) window.soundManager.playClick();
    albumModalEl.classList.add("hidden");
  }
});

btnResetStoryEl.addEventListener("click", () => {
  resetStory();
});

// 전체 기록 초기화 - 커스텀 경고 모달 흐름
function showResetConfirmModal() {
  if (window.soundManager) window.soundManager.playClick();
  const confirmModal = document.getElementById("confirm-modal");
  if (confirmModal) confirmModal.classList.remove("hidden");
}

function closeConfirmModal() {
  if (window.soundManager) window.soundManager.playClick();
  const confirmModal = document.getElementById("confirm-modal");
  if (confirmModal) confirmModal.classList.add("hidden");
}

function executeResetAll() {
  // 로컬스토리지 전체 삭제
  localStorage.clear();

  // 메모리 상태 초기화
  courseScoresMap = {
    story1: { endingId: null, score: 0 },
    story2: { endingId: null, score: 0 },
    story3: { endingId: null, score: 0 },
    story4: { endingId: null, score: 0 }
  };
  currentStoryKey = "story1";
  currentNodeId = "start";
  isAutoTTSMode = false;

  if (storySelectEl) storySelectEl.value = "story1";

  // UI 전체 갱신
  updateTotalScoreUI();
  updateAlbumUI();

  // 모달 전부 닫기
  const confirmModal = document.getElementById("confirm-modal");
  if (confirmModal) confirmModal.classList.add("hidden");
  albumModalEl.classList.add("hidden");
  const celModalEl = document.getElementById("celebration-modal");
  if (celModalEl) celModalEl.classList.add("hidden");

  if (window.soundManager) {
    window.soundManager.stopSpeech();
    window.soundManager.playClick();
  }

  renderNode("start");
}

// 최초 시작
window.addEventListener("DOMContentLoaded", () => {
  loadGameData();
  renderNode(currentNodeId);
});
