// ==========================================
// 꼬마 탐정 아리와 비밀 도서관의 꼬마 유령
// 게임 엔진 및 스토리 데이터 소스 코드
// ==========================================

// 1. 스토리 노드 정의
const storyData = {
  start: {
    text: "어두운 밤, 꼬마 탐정 아리는 돋보기와 전등을 챙겨 들고 비밀 도서관 앞에 도착했어요.\n\"여기 어딘가에 마법의 황금 열쇠가 숨겨져 있을 거야!\"\n도서관 안으로 들어갈 방법은 두 가지가 있어요.",
    image: "assets/images/scene_start.png",
    progress: 15,
    choices: [
      { text: "🚪 삐걱거리는 오래된 도서관 나무 문을 살그머니 열어본다.", nextNode: "library_door" },
      { text: "🪟 옆에 있는 작고 먼지 쌓인 지하 창고 창문으로 들어간다.", nextNode: "basement_window" }
    ]
  },
  library_door: {
    text: "도서관 안으로 들어오자, 오래된 책 냄새가 아리를 반겼어요. 도서관은 온통 깜깜하지만, 저 멀리 책장 사이에서 신비로운 금빛 노란색 불빛이 흘러나오고 있어요!\n동시에 카운터 아래에서 \"스스슥-\" 소리도 들리네요.",
    image: "assets/images/scene_bookshelf.png",
    progress: 35,
    choices: [
      { text: "✨ 노란빛이 새어 나오는 비밀 책장 틈새를 들여다본다.", nextNode: "glowing_bookshelf" },
      { text: "👣 소리가 났던 도서관 카운터 아래를 돋보기로 비추어 본다.", nextNode: "counter_footsteps" }
    ]
  },
  basement_window: {
    text: "지하 창고로 살그머니 내려온 아리! 사방에 신비로운 나무 상자들이 가득 쌓여 있어요. 그중 한 상자에서 반짝반짝 파란색 빛이 나오고 있네요.\n벽에는 낡아 보이는 도서관 지도가 걸려 있어요.",
    image: "assets/images/scene_basement.png",
    progress: 35,
    choices: [
      { text: "💎 반짝이는 보석 모양 파란 상자를 열어본다.", nextNode: "blue_box" },
      { text: "🗺️ 벽에 붙어 있는 오래된 도서관 지도를 자세히 살펴본다.", nextNode: "library_map" }
    ]
  },
  glowing_bookshelf: {
    text: "책장 틈새를 살짝 들여다보니, 귀엽고 동글동글한 흰색 꼬마 유령 '퐁이'가 책 위에 떠서 책을 읽고 있었어요!\n퐁이는 아리를 보고 깜짝 놀라 숨으려다 머뭇거렸어요.\n\"안녕? 난 유령 퐁이야. 사실 책 창고를 열 황금 열쇠를 잃어버려서 슬퍼하고 있었어...\"",
    image: "assets/images/scene_pong.png",
    progress: 60,
    choices: [
      { text: "🤝 \"안녕 퐁이! 난 꼬마 탐정 아리야. 내가 같이 열쇠를 찾아줄게!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"걱정 마, 퐁이! 우선 책장 주변에 떨어진 발자국 단서부터 조사해볼게!\"", nextNode: "search_clues" }
    ]
  },
  counter_footsteps: {
    text: "카운터 밑을 돋보기로 비추자, 야광 물감처럼 반짝이는 작은 발자국들이 콕콕 찍혀 있었어요!\n발자국은 도서관의 책장 깊숙한 곳으로 향하고 있었어요.",
    image: "assets/images/scene_bookshelf.png",
    progress: 60,
    choices: [
      { text: "👣 반짝이는 야광 발자국을 따라 조심조심 걸어가본다.", nextNode: "follow_footsteps" },
      { text: "🗣️ 용기를 내어 큰 소리로 \"거기 누구 있니? 아리가 도와줄게!\" 하고 외쳐본다.", nextNode: "call_out" }
    ]
  },
  blue_box: {
    text: "파란 상자를 슥 열자, 귀여운 태엽 쥐 인형들이 튀어나와 뱅글뱅글 춤을 추기 시작했어요! 인형의 등에 적힌 은밀한 암호를 발견했어요.\n태엽 쥐들은 함께 놀고 싶어 하는 눈치예요.",
    image: "assets/images/scene_ending_toy.png",
    progress: 65,
    choices: [
      { text: "📖 암호 쪽지를 들고 불빛이 보였던 2층 도서관 서가로 올라간다.", nextNode: "glowing_bookshelf" },
      { text: "🐭 \"너희들 정말 귀엽구나!\" 태엽 쥐들과 신나게 춤을 추며 노는데 집중한다.", nextNode: "ending_toy" }
    ]
  },
  library_map: {
    text: "낡은 도서관 지도를 펼쳐보자, 책상들 아래에 비밀의 비밀 통로가 숨겨져 있다고 표시되어 있어요! 그곳은 '유령들의 비밀 놀이방'으로 연결된대요.",
    image: "assets/images/scene_basement.png",
    progress: 65,
    choices: [
      { text: "🗺️ 지도에 그려진 비밀 놀이방을 찾아 바로 뛰어간다.", nextNode: "secret_room" },
      { text: "👣 지도를 주머니에 잘 챙겨 넣고, 야광 발자국이 있던 카운터로 향한다.", nextNode: "counter_footsteps" }
    ]
  },
  friend_ghost: {
    text: "아리의 다정한 인사에 감동한 퐁이는 아리의 손을 꼭 잡고 거대한 책장 밑 비밀 문으로 안내했어요. 그곳엔 환하게 빛나는 무지개 보물 상자가 놓여 있었지요!\n\"이 상자 안에 황금 열쇠가 있어! 하지만 상자에 수수께끼가 적혀 있네.\"",
    image: "assets/images/scene_ending_happy.png",
    progress: 85,
    choices: [
      { text: "💫 퐁이와 함께 \"영차!\" 힘껏 무지개 보물 상자를 열어젖힌다.", nextNode: "ending_happy" },
      { text: "🧠 상자에 적힌 알록달록한 마법 퀴즈를 직접 풀어본다.", nextNode: "quiz_room" }
    ]
  },
  search_clues: {
    text: "아리는 돋보기를 들고 책을 꼼꼼히 살폈어요. 책장 가장 위 칸 책에 퐁이가 흘린 반짝이는 야광 별가루가 묻어 있는 것을 찾아냈어요!\n그 별가루를 건드리자, 책장이 스르륵 열리며 황금 열쇠가 은은하게 빛나며 나타났어요!\n\n아리는 훌륭한 추리로 황금 열쇠를 완벽하게 찾아냈습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  follow_footsteps: {
    text: "야광 발자국을 따라가자, 놀랍게도 밤마다 도서관에 모이는 수많은 아기 유령들이 환영 잔치를 벌이고 있었어요! \n유령들은 아리를 보자 박수를 치며 마법의 황금 열쇠를 선물로 건네주었어요.\n\n아리는 유령들의 최고의 친구이자 도서관의 귀빈이 되었습니다!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  },
  call_out: {
    text: "아리가 외치자, 카운터 아래에서 퐁이가 뽀르르 튀어나와 수줍게 고개를 숙였어요. \n\"나를 해치지 않으러 왔구나! 사실 황금 열쇠는 마법 상자 안에 들어 있어. 하지만 같이 열어야 열려!\"",
    image: "assets/images/scene_pong.png",
    progress: 80,
    choices: [
      { text: "🤝 \"당연하지! 우리 같이 비밀 상자를 열어보자, 퐁이야!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"잠시만! 상자가 있는 안전한 통로인지 먼저 돋보기로 조사해볼게.\"", nextNode: "search_clues" }
    ]
  },
  secret_room: {
    text: "비밀 놀이방에 도착한 아리! 그곳에는 퐁이와 여러 아기 유령 친구들이 신나게 트램펄린을 뛰며 책을 읽고 있었어요! 방 한가운데엔 마법 보물 상자가 아름답게 빛나고 있었습니다.",
    image: "assets/images/scene_ending_ghost.png",
    progress: 80,
    choices: [
      { text: "🎁 보물 상자 옆에 둥둥 떠 있는 퐁이와 기쁘게 악수하며 열쇠 상자를 연다.", nextNode: "ending_happy" },
      { text: "👻 \"와! 나도 같이 놀래!\" 유령 친구들과 함께 동화책을 읽으며 뒹굴거린다.", nextNode: "ending_ghost" }
    ]
  },
  quiz_room: {
    text: "상자에 적힌 문제는 아주 귀여웠어요.\n\"도서관에서 가장 똑똑하고 귀여운 탐정의 이름은 무엇일까요?\"\n아리는 웃으며 큰 소리로 답을 외쳤어요. \"그건 바로 나, 꼬마 탐정 아리야!\"\n그 순간 상자가 딸깍하고 열리며 눈부신 금빛이 퍼져 나왔어요!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 상자 속에서 나온 황금 열쇠를 높이 들고 승리를 기념한다!", nextNode: "ending_happy" },
      { text: "🎨 열쇠를 찾는 것보다 퐁이와 더 기발한 퀴즈 놀이를 하며 밤을 지샌다.", nextNode: "ending_ghost" }
    ]
  },
  ending_happy: {
    text: "아리와 퐁이는 힘을 합쳐 보물 상자를 열었고, 눈부신 황금 열쇠를 찾아내어 비밀 도서관의 마법 이야기책들을 모두 봉인 해제했어요! \n밤마다 도서관의 동화책 속 주인공들이 튀어나와 아리와 퐁이에게 재미있는 이야기를 직접 읽어주게 되었답니다.\n\n[도서관 수호자 엔딩] 아리는 퐁이와 함께 언제나 재밌는 책을 볼 수 있게 되었습니다. 해피엔딩!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  ending_toy: {
    text: "아리는 황금 열쇠를 찾는 대신, 지하 창고에서 춤추는 태엽 쥐 인형들과 신나게 춤을 추고 소꿉놀이를 하며 시간 가는 줄 몰랐어요.\n비록 열쇠는 못 찾았지만, 지루할 틈 없이 세상에서 가장 신나는 밤을 보냈답니다!\n\n[장난감 친구 엔딩] 귀여운 태엽 쥐들과 언제든 도서관 지하에서 비밀 소꿉장난을 즐길 수 있게 되었습니다!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  }
};

// 2. DOM 요소 취득
const illustrationEl = document.getElementById("illustration");
const storyTextEl = document.getElementById("story-text");
const choiceContainerEl = document.getElementById("choice-container");
const progressEl = document.getElementById("progress");

const btnAlbumEl = document.getElementById("btn-album");
const albumModalEl = document.getElementById("album-modal");
const btnCloseAlbumEl = document.getElementById("btn-close-album");
const btnResetStoryEl = document.getElementById("btn-reset-story");

// 3. 상태 관리 변수
let currentNodeId = "start";
let unlockedEndings = [];
let isAutoTTSMode = false; // 연속 자동 낭독 모드 플래그

// 4. 로컬 스토리지 초기화 및 로드
function loadGameData() {
  const savedNode = localStorage.getItem("currentStoryNode");
  if (savedNode && storyData[savedNode]) {
    currentNodeId = savedNode;
  } else {
    currentNodeId = "start";
  }

  const savedEndings = localStorage.getItem("unlockedEndings");
  if (savedEndings) {
    try {
      unlockedEndings = JSON.parse(savedEndings);
    } catch (e) {
      unlockedEndings = [];
    }
  }
  updateAlbumUI();
}

// 5. 화면 렌더링 함수
function renderNode(nodeId) {
  const node = storyData[nodeId];
  if (!node) return;

  // 이전 진행 중이던 TTS 낭독 중지 및 UI 초기화
  if (window.soundManager) {
    window.soundManager.stopSpeech();
    updateTTSUI(false);
  }

  // 특수 노드 사운드 효과 트리거
  if (window.soundManager) {
    if (nodeId === "glowing_bookshelf" || nodeId === "friend_ghost" || nodeId === "search_clues") {
      window.soundManager.playMagicChime();
    } else if (node.choices && node.choices.length === 0) {
      window.soundManager.playEndingFanfare();
    }
  }

  // 로컬스토리지에 현재 노드 저장
  localStorage.setItem("currentStoryNode", nodeId);

  // 진행률 업데이트
  progressEl.style.width = `${node.progress}%`;

  // 페이드 아웃 후 텍스트와 이미지 교체
  illustrationEl.parentElement.classList.add("fade-out");
  storyTextEl.parentElement.classList.add("fade-out");
  choiceContainerEl.classList.add("fade-out");

  setTimeout(() => {
    // 내용 갱신
    illustrationEl.src = node.image;
    storyTextEl.textContent = node.text;

    // 선택지 버튼 생성
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
      // 엔딩 노드인 경우 처음으로 가기 버튼 생성
      const btnReset = document.createElement("button");
      btnReset.className = "btn-choice";
      btnReset.style.background = "linear-gradient(135deg, #7209b7 0%, #b5179e 100%)";
      btnReset.textContent = "📖 모험을 성공적으로 마쳤어요! 처음부터 다시 읽기";
      btnReset.addEventListener("click", () => {
        if (window.soundManager) window.soundManager.playClick();
        resetStory();
      });
      choiceContainerEl.appendChild(btnReset);

      // 엔딩 해금 저장 및 알림
      if (node.endingId) {
        unlockEnding(node.endingId);
      }
    }

    // 페이드 인 및 fade-out 클래스 완벽 제거 (선택지 가시성 복구)
    illustrationEl.parentElement.classList.remove("fade-out");
    storyTextEl.parentElement.classList.remove("fade-out");
    choiceContainerEl.classList.remove("fade-out");

    illustrationEl.parentElement.classList.add("fade-in");
    storyTextEl.parentElement.classList.add("fade-in");
    choiceContainerEl.classList.add("fade-in");

    // 0.5초 뒤 트랜지션 클래스 정리
    setTimeout(() => {
      illustrationEl.parentElement.classList.remove("fade-in");
      storyTextEl.parentElement.classList.remove("fade-in");
      choiceContainerEl.classList.remove("fade-in");

      // 만약 자동 낭독 모드가 켜져 있다면 새로운 스토리 페이지도 자동 연속 낭독!
      if (isAutoTTSMode) {
        startTTSForCurrentNode();
      }
    }, 520);

  }, 400);
}

// 엔딩 이름 매핑 헬퍼
function getEndingName(endingId) {
  switch (endingId) {
    case "ending-happy": return "도서관 수호자 엔딩";
    case "ending-detective": return "전설의 꼬마 탐정 엔딩";
    case "ending-toy": return "장난감 친구 엔딩";
    case "ending-ghost": return "왁자지껄 유령 파티 엔딩";
    default: return "도서관 수호자 엔딩";
  }
}

// 6. 엔딩 해금 및 축하 이벤트 로직
function unlockEnding(endingId) {
  const isNew = !unlockedEndings.includes(endingId);
  if (isNew) {
    unlockedEndings.push(endingId);
    localStorage.setItem("unlockedEndings", JSON.stringify(unlockedEndings));
    updateAlbumUI();
  }
  
  // 이미 획득한 엔딩이라도 엔딩에 도달하면 무조건 화려한 축하 애니메이션과 폭죽 연출 실행!
  setTimeout(() => {
    showCelebrationModal(endingId);
  }, 300);
}

// 6-1. 마법 축하 모달 및 컨페티 폭죽 엔진
function showCelebrationModal(endingId) {
  const celModalEl = document.getElementById("celebration-modal");
  const celTitleEl = document.getElementById("cel-title");
  const celImageEl = document.getElementById("cel-image");
  const celEndingNameEl = document.getElementById("cel-ending-name");
  const celDescEl = document.getElementById("cel-desc");

  // 팬파레 사운드 재생
  if (window.soundManager) {
    window.soundManager.playEndingFanfare();
  }

  // 카드 팝업 애니메이션 재시작 (Reflow 적용)
  const cardEl = celModalEl.querySelector(".celebration-card");
  if (cardEl) {
    cardEl.style.animation = "none";
    void cardEl.offsetWidth; // Trigger reflow
    cardEl.style.animation = "popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
  }

  // 4개 엔딩 올 클리어 여부 확인
  const allEndings = ["ending-happy", "ending-detective", "ending-toy", "ending-ghost"];
  const isAllCompleted = allEndings.every(id => unlockedEndings.includes(id));

  // 해당 노드의 이미지 및 설명 매핑
  let endingImg = "assets/images/scene_ending_happy.png";
  let endingTitle = getEndingName(endingId);
  let endingDesc = "아리와 함께 동화 속 새로운 모험의 결말을 밝혀내셨습니다!";

  if (endingId === "ending-happy") endingImg = "assets/images/scene_ending_happy.png";
  else if (endingId === "ending-detective") endingImg = "assets/images/scene_ending_detective.png";
  else if (endingId === "ending-toy") endingImg = "assets/images/scene_ending_toy.png";
  else if (endingId === "ending-ghost") endingImg = "assets/images/scene_ending_ghost.png";

  celImageEl.src = endingImg;
  celEndingNameEl.textContent = `🔑 ${endingTitle}`;

  if (isAllCompleted) {
    celTitleEl.textContent = "🏆 축! 전설의 마스터 칭호 획득!";
    celDescEl.textContent = "대단해요! 도서관의 4가지 비밀 엔딩을 모두 수집하여 [전설의 꼬마 탐정 마스터]가 되셨습니다! 🎉";
  } else {
    celTitleEl.textContent = "🎉 새로운 엔딩 도감 해금!";
    celDescEl.textContent = endingDesc;
  }

  // 폭죽 팡팡 연출 실행
  launchConfetti();

  // 모달 표시 (도감 모달이 열려있다면 닫고 축하 모달 표시)
  albumModalEl.classList.add("hidden");
  celModalEl.classList.remove("hidden");
}

// 6-2. Canvas 마법 폭죽 컨페티 연출 엔진 (보강)
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ff758f", "#70d6ff", "#ffd166", "#e0aaff", "#ffffff", "#ff9eb5", "#06d6a0"];

  // 180개의 폭죽 조각 생성
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
      p.vy += 0.35; // 중력 적용
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

// 7. 도감 UI 업데이트 및 클릭 재시청 이벤트
function updateAlbumUI() {
  const endingIds = ["ending-happy", "ending-detective", "ending-toy", "ending-ghost"];
  endingIds.forEach(id => {
    const itemEl = document.getElementById(id);
    if (itemEl) {
      if (unlockedEndings.includes(id)) {
        itemEl.classList.add("unlocked");
        const statusEl = itemEl.querySelector(".album-status");
        if (statusEl) statusEl.textContent = "🎉 획득 (클릭하여 감상)";
        
        // 클릭 시 축하 애니메이션 재시청 이벤트
        itemEl.onclick = () => {
          showCelebrationModal(id);
        };
        itemEl.style.cursor = "pointer";
      } else {
        itemEl.classList.remove("unlocked");
        const statusEl = itemEl.querySelector(".album-status");
        if (statusEl) statusEl.textContent = "🔒 미획득";
        itemEl.onclick = null;
        itemEl.style.cursor = "default";
      }
    }
  });
}

// 8. 처음부터 시작 로직
function resetStory() {
  currentNodeId = "start";
  isAutoTTSMode = false; // 자동 낭독 모드 OFF
  localStorage.setItem("currentStoryNode", "start");

  // 진행 중인 낭독 중지
  if (window.soundManager) {
    window.soundManager.stopSpeech();
    updateTTSUI(false);
  }

  // 모달 닫기
  albumModalEl.classList.add("hidden");
  const celModalEl = document.getElementById("celebration-modal");
  if (celModalEl) celModalEl.classList.add("hidden");

  // 효과음 재생
  if (window.soundManager) {
    window.soundManager.playClick();
    window.soundManager.playPageTurn();
  }

  // 화면 렌더링
  renderNode("start");
}

// 9. 이벤트 리스너 설정
const btnTtsEl = document.getElementById("btn-tts");
if (btnTtsEl) {
  btnTtsEl.addEventListener("click", () => {
    if (!window.soundManager) return;

    if (isAutoTTSMode || window.soundManager.isSpeaking()) {
      // 자동 낭독 모드 끄기 & 음성 중지
      isAutoTTSMode = false;
      window.soundManager.stopSpeech();
      updateTTSUI(false);
    } else {
      // 자동 낭독 모드 켜기 & 첫 낭독 시작
      isAutoTTSMode = true;
      window.soundManager.playClick();
      startTTSForCurrentNode();
    }
  });
}

// 현재 스토리 노드 TTS 낭독 시작 함수
function startTTSForCurrentNode() {
  if (!window.soundManager) return;

  let fullTextToRead = storyTextEl.textContent;
  const currentChoices = storyData[currentNodeId]?.choices;
  if (currentChoices && currentChoices.length > 0) {
    fullTextToRead += "\n\n지우야, 어떤 길을 선택할래?";
  }

  window.soundManager.speakText(
    fullTextToRead,
    () => updateTTSUI(true),  // 낭독 시작 시 UI 변경
    () => {
      // 낭독 완료되더라도 자동 모드가 켜져 있다면 다음 클릭 전까지 온/오프 상태 관리
      if (!isAutoTTSMode) {
        updateTTSUI(false);
      }
    }
  );
}

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

const btnResetHeaderEl = document.getElementById("btn-reset-header");
if (btnResetHeaderEl) {
  btnResetHeaderEl.addEventListener("click", () => {
    resetStory();
  });
}

const btnCloseCelEl = document.getElementById("btn-close-cel");
if (btnCloseCelEl) {
  btnCloseCelEl.addEventListener("click", () => {
    if (window.soundManager) window.soundManager.playClick();
    document.getElementById("celebration-modal").classList.add("hidden");
    // 축하 모달 닫힌 후 바로 도감 앨범 열어주기!
    albumModalEl.classList.remove("hidden");
  });
}

const btnBgmEl = document.getElementById("btn-bgm");
if (btnBgmEl) {
  btnBgmEl.addEventListener("click", () => {
    if (window.soundManager) {
      window.soundManager.playClick();
      const isPlaying = window.soundManager.toggleBgm();
      if (isPlaying) {
        btnBgmEl.textContent = "🎵 음악 ON";
        btnBgmEl.classList.remove("off");
      } else {
        btnBgmEl.textContent = "🔇 음악 OFF";
        btnBgmEl.classList.add("off");
      }
    }
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

// 바깥 영역 클릭 시 모달 닫기
albumModalEl.addEventListener("click", (e) => {
  if (e.target === albumModalEl) {
    if (window.soundManager) window.soundManager.playClick();
    albumModalEl.classList.add("hidden");
  }
});

btnResetStoryEl.addEventListener("click", () => {
  resetStory();
});

// 10. 게임 최초 시작
window.addEventListener("DOMContentLoaded", () => {
  loadGameData();
  renderNode(currentNodeId);
});
