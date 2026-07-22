// ==========================================
// 꼬마 탐정 아리와 비밀 도서관의 꼬마 유령
// 게임 엔진 및 한국어/영어 스토리 데이터 소스 코드
// ==========================================

// 1. 한국어 스토리 노드 데이터
const storyDataKo = {
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

// 2. 영어 스토리 노드 데이터 (English Version)
const storyDataEn = {
  start: {
    text: "On a dark night, little detective Ari reached the secret library with her magnifying glass and flashlight.\n\"The golden magical key must be hidden around here!\"\nThere are two ways to enter the library.",
    image: "assets/images/scene_start.png",
    progress: 15,
    choices: [
      { text: "🚪 Gently open the creaky old wooden library door.", nextNode: "library_door" },
      { text: "🪟 Crawl into the small dusty basement window.", nextNode: "basement_window" }
    ]
  },
  library_door: {
    text: "Stepping inside, the cozy smell of old books welcomed Ari. The library was dark, but a magical golden light was glowing between the distant bookshelves!\nAt the same time, a rustling sound came from under the counter.",
    image: "assets/images/scene_bookshelf.png",
    progress: 35,
    choices: [
      { text: "✨ Peek through the glowing secret bookshelf crack.", nextNode: "glowing_bookshelf" },
      { text: "👣 Search under the library counter with a magnifying glass.", nextNode: "counter_footsteps" }
    ]
  },
  basement_window: {
    text: "Ari sneaked down into the basement storage room! Mysterious wooden chests were stacked everywhere. One blue gem chest was shining brightly in the center.\nAn old library map was hanging on the wall.",
    image: "assets/images/scene_basement.png",
    progress: 35,
    choices: [
      { text: "💎 Open the sparkling blue gem box.", nextNode: "blue_box" },
      { text: "🗺️ Examine the old library map on the wall.", nextNode: "library_map" }
    ]
  },
  glowing_bookshelf: {
    text: "Peeking through the books, Ari saw a cute chubby white baby ghost named Pong floating over a storybook!\nPong gasped softly and said, \"Hi! I'm Pong, the book-loving ghost. I lost the golden key to the secret treasure room...\"",
    image: "assets/images/scene_pong.png",
    progress: 60,
    choices: [
      { text: "🤝 \"Hi Pong! I'm detective Ari. I'll help you find the key!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"Don't worry, Pong! Let me search for footprint clues first!\"", nextNode: "search_clues" }
    ]
  },
  counter_footsteps: {
    text: "Shining her magnifying glass under the counter, Ari found glowing footprint dots like magical starry powder!\nThe footprints led deep into the library stacks.",
    image: "assets/images/scene_bookshelf.png",
    progress: 60,
    choices: [
      { text: "👣 Follow the glowing footprints carefully.", nextNode: "follow_footsteps" },
      { text: "🗣️ Courageously shout, \"Is anyone there? Ari is here to help!\"", nextNode: "call_out" }
    ]
  },
  blue_box: {
    text: "Opening the blue box, cute mechanical clockwork toy mice popped out and started dancing in circles! Ari found a secret passcode written on their backs.",
    image: "assets/images/scene_ending_toy.png",
    progress: 65,
    choices: [
      { text: "📖 Carry the secret note up to the 2nd floor library stacks.", nextNode: "glowing_bookshelf" },
      { text: "🐭 \"You guys are so cute!\" Dance and play with the toy mice.", nextNode: "ending_toy" }
    ]
  },
  library_map: {
    text: "Unfolding the old map, Ari found a secret hidden passage under the desks leading directly to the 'Secret Ghost Playroom'!",
    image: "assets/images/scene_basement.png",
    progress: 65,
    choices: [
      { text: "🗺️ Run straight toward the Secret Playroom.", nextNode: "secret_room" },
      { text: "👣 Put the map in her pocket and head toward the counter footprints.", nextNode: "counter_footsteps" }
    ]
  },
  friend_ghost: {
    text: "Touched by Ari's warm greeting, Pong took Ari's hand and led her to a secret rainbow treasure chest behind a huge bookshelf!\n\"The golden key is inside! But there's a magical riddle on the lock.\"",
    image: "assets/images/scene_ending_happy.png",
    progress: 85,
    choices: [
      { text: "💫 Push open the rainbow treasure chest together!", nextNode: "ending_happy" },
      { text: "🧠 Solve the colorful magic quiz written on the chest.", nextNode: "quiz_room" }
    ]
  },
  search_clues: {
    text: "Using her magnifying glass, Ari found shiny star dust left by Pong on the top shelf book!\nTouching the star dust, the bookshelf slid open, revealing the golden key glowing softly!\n\nAri successfully found the golden key with her brilliant deduction!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  follow_footsteps: {
    text: "Following the glowing footprints, Ari discovered a grand party hosted by many cute baby ghosts!\nThe ghosts cheered and presented the golden key to Ari as a special gift.\n\nAri became the best friend of the ghosts and the VIP of the library!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  },
  call_out: {
    text: "Hearing Ari's voice, Pong popped out from under the counter and bowed shyly.\n\"You came to help me! The golden key is in the magic chest, but we have to open it together!\"",
    image: "assets/images/scene_pong.png",
    progress: 80,
    choices: [
      { text: "🤝 \"Of course! Let's open the secret chest together, Pong!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"Wait! Let me inspect the path with my magnifying glass first.\"", nextNode: "search_clues" }
    ]
  },
  secret_room: {
    text: "Arriving at the Secret Playroom, Ari saw Pong and baby ghost friends jumping on trampolines while reading books! The magic treasure chest was shining beautifully in the middle.",
    image: "assets/images/scene_ending_ghost.png",
    progress: 80,
    choices: [
      { text: "🎁 Shake hands with Pong and open the golden key chest.", nextNode: "ending_happy" },
      { text: "👻 \"Yay! Can I play too?\" Read storybooks and play with ghost friends.", nextNode: "ending_ghost" }
    ]
  },
  quiz_room: {
    text: "The riddle on the chest was very cute.\n\"Who is the smartest and cutest little detective in the library?\"\nAri smiled and shouted, \"That's me, Little Detective Ari!\"\nWith a click, the chest opened with a brilliant golden shine!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 Raise the golden key high to celebrate victory!", nextNode: "ending_happy" },
      { text: "🎨 Stay up all night playing more fun quizzes with Pong.", nextNode: "ending_ghost" }
    ]
  },
  ending_happy: {
    text: "Ari and Pong opened the chest together, found the golden key, and unlocked all magical books in the secret library!\nEvery night, storybook characters came alive and read wonderful stories to Ari and Pong.\n\n[Library Guardian Ending] Ari and Pong can now read magical books anytime. Happy Ending!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  ending_toy: {
    text: "Instead of searching for the key, Ari spent the night playing and dancing happily with the mechanical toy mice in the basement.\nIt was the most thrilling and playful night ever!\n\n[Toy Friends Ending] Ari made secret toy mouse friends forever in the basement!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  }
};

// 3. DOM 요소 취득
const illustrationEl = document.getElementById("illustration");
const storyTextEl = document.getElementById("story-text");
const choiceContainerEl = document.getElementById("choice-container");
const progressEl = document.getElementById("progress");

const btnAlbumEl = document.getElementById("btn-album");
const albumModalEl = document.getElementById("album-modal");
const btnCloseAlbumEl = document.getElementById("btn-close-album");
const btnResetStoryEl = document.getElementById("btn-reset-story");

// 4. 전역 상태 변수
let currentNodeId = "start";
let unlockedEndings = [];
let isAutoTTSMode = false;
let currentLang = "ko"; // 기본 언어: 'ko' | 'en'

// 활성화된 언어 스토리 데이터 취득 헬퍼
function getActiveStoryData() {
  return currentLang === "en" ? storyDataEn : storyDataKo;
}

// 헬퍼 함수: 엔딩 이름 반환 (다국어)
function getEndingName(endingId) {
  if (currentLang === "en") {
    switch (endingId) {
      case "ending-happy": return "Library Guardian Ending";
      case "ending-detective": return "Legendary Detective Ending";
      case "ending-toy": return "Toy Friends Ending";
      case "ending-ghost": return "Jolly Ghost Party Ending";
      default: return "Library Guardian Ending";
    }
  } else {
    switch (endingId) {
      case "ending-happy": return "도서관 수호자 엔딩";
      case "ending-detective": return "전설의 꼬마 탐정 엔딩";
      case "ending-toy": return "장난감 친구 엔딩";
      case "ending-ghost": return "왁자지껄 유령 파티 엔딩";
      default: return "도서관 수호자 엔딩";
    }
  }
}

// 5. 로컬 스토리지 데이터 로드
function loadGameData() {
  const savedLang = localStorage.getItem("storyLang");
  if (savedLang === "en" || savedLang === "ko") {
    currentLang = savedLang;
  }

  const activeData = getActiveStoryData();
  const savedNode = localStorage.getItem("currentStoryNode");
  if (savedNode && activeData[savedNode]) {
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
  updateLangUI();
  updateAlbumUI();
}

// 언어 UI 업데이트
function updateLangUI() {
  const btnLangEl = document.getElementById("btn-lang");
  if (btnLangEl) {
    btnLangEl.textContent = currentLang === "en" ? "🇰🇷 한국어" : "🇺🇸 English";
  }
}

// 6. 메인 화면 렌더링 함수
function renderNode(nodeId) {
  const activeData = getActiveStoryData();
  const node = activeData[nodeId];
  if (!node) return;

  // 이전 진행 중이던 음성 중지
  if (window.soundManager) {
    window.soundManager.stopSpeech();
    if (!isAutoTTSMode) {
      updateTTSUI(false);
    }
  }

  // 특수 노드 사운드 효과 트리거
  if (window.soundManager) {
    if (nodeId === "glowing_bookshelf" || nodeId === "friend_ghost" || nodeId === "search_clues") {
      window.soundManager.playMagicChime();
    } else if (node.choices && node.choices.length === 0) {
      window.soundManager.playEndingFanfare();
    }
  }

  // 로컬스토리지에 현재 노드 및 언어 저장
  localStorage.setItem("currentStoryNode", nodeId);
  localStorage.setItem("storyLang", currentLang);

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
      btnReset.textContent = currentLang === "en" 
        ? "📖 Adventure Complete! Read from the Start" 
        : "📖 모험을 성공적으로 마쳤어요! 처음부터 다시 읽기";
      btnReset.addEventListener("click", () => {
        if (window.soundManager) window.soundManager.playClick();
        resetStory();
      });
      choiceContainerEl.appendChild(btnReset);

      if (node.endingId) {
        unlockEnding(node.endingId);
      }
    }

    // 페이드 인 및 fade-out 클래스 제거
    illustrationEl.parentElement.classList.remove("fade-out");
    storyTextEl.parentElement.classList.remove("fade-out");
    choiceContainerEl.classList.remove("fade-out");

    illustrationEl.parentElement.classList.add("fade-in");
    storyTextEl.parentElement.classList.add("fade-in");
    choiceContainerEl.classList.add("fade-in");

    // 0.5초 뒤 트랜지션 클래스 정리 및 자동 연속 낭독 실행
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

// 7. 엔딩 해금 및 축하 이벤트 로직
function unlockEnding(endingId) {
  const isNew = !unlockedEndings.includes(endingId);
  if (isNew) {
    unlockedEndings.push(endingId);
    localStorage.setItem("unlockedEndings", JSON.stringify(unlockedEndings));
    updateAlbumUI();
  }
  
  setTimeout(() => {
    showCelebrationModal(endingId);
  }, 300);
}

// 7-1. 마법 축하 모달 및 컨페티 폭죽 엔진
function showCelebrationModal(endingId) {
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

  const allEndings = ["ending-happy", "ending-detective", "ending-toy", "ending-ghost"];
  const isAllCompleted = allEndings.every(id => unlockedEndings.includes(id));

  let endingImg = "assets/images/scene_ending_happy.png";
  let endingTitle = getEndingName(endingId);

  if (endingId === "ending-happy") endingImg = "assets/images/scene_ending_happy.png";
  else if (endingId === "ending-detective") endingImg = "assets/images/scene_ending_detective.png";
  else if (endingId === "ending-toy") endingImg = "assets/images/scene_ending_toy.png";
  else if (endingId === "ending-ghost") endingImg = "assets/images/scene_ending_ghost.png";

  celImageEl.src = endingImg;
  celEndingNameEl.textContent = `🔑 ${endingTitle}`;

  if (isAllCompleted) {
    celTitleEl.textContent = currentLang === "en" ? "🏆 Master Title Unlocked!" : "🏆 축! 전설의 마스터 칭호 획득!";
    celDescEl.textContent = currentLang === "en"
      ? "Amazing! You collected all 4 secret endings and became the [Legendary Master Detective]! 🎉"
      : "대단해요! 도서관의 4가지 비밀 엔딩을 모두 수집하여 [전설의 꼬마 탐정 마스터]가 되셨습니다! 🎉";
  } else {
    celTitleEl.textContent = currentLang === "en" ? "🎉 New Ending Unlocked!" : "🎉 새로운 엔딩 도감 해금!";
    celDescEl.textContent = currentLang === "en"
      ? "Congratulations! You revealed a new ending with Ari!"
      : "아리와 함께 동화 속 새로운 모험의 결말을 밝혀내셨습니다!";
  }

  launchConfetti();

  albumModalEl.classList.add("hidden");
  celModalEl.classList.remove("hidden");
}

// 7-2. Canvas 마법 폭죽 컨페티 연출 엔진
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

// 8. 도감 UI 업데이트
function updateAlbumUI() {
  const endingIds = ["ending-happy", "ending-detective", "ending-toy", "ending-ghost"];
  endingIds.forEach(id => {
    const itemEl = document.getElementById(id);
    if (itemEl) {
      const h3El = itemEl.querySelector("h3");
      if (h3El) h3El.textContent = getEndingName(id);

      if (unlockedEndings.includes(id)) {
        itemEl.classList.add("unlocked");
        const statusEl = itemEl.querySelector(".album-status");
        if (statusEl) statusEl.textContent = currentLang === "en" ? "🎉 Unlocked" : "🎉 획득 (클릭하여 감상)";
        
        itemEl.onclick = () => {
          showCelebrationModal(id);
        };
        itemEl.style.cursor = "pointer";
      } else {
        itemEl.classList.remove("unlocked");
        const statusEl = itemEl.querySelector(".album-status");
        if (statusEl) statusEl.textContent = currentLang === "en" ? "🔒 Locked" : "🔒 미획득";
        itemEl.onclick = null;
        itemEl.style.cursor = "default";
      }
    }
  });
}

// 9. 처음부터 시작 로직
function resetStory() {
  currentNodeId = "start";
  isAutoTTSMode = false;
  localStorage.setItem("currentStoryNode", "start");

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

// 10. 현재 스토리 노드 TTS 낭독 시작 함수 (한국어/영어 다국어 분기)
function startTTSForCurrentNode() {
  if (!window.soundManager) return;

  const textToRead = storyTextEl.textContent;

  window.soundManager.speakText(
    textToRead,
    currentLang, // 'ko' | 'en'
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

// 11. TTS UI 상태 업데이트 함수
function updateTTSUI(isSpeaking) {
  const btnTts = document.getElementById("btn-tts");
  const storyCard = document.getElementById("story-card");
  if (!btnTts) return;

  if (isSpeaking || isAutoTTSMode) {
    btnTts.textContent = currentLang === "en" ? "🛑 Stop Speech" : "🛑 읽기 중지";
    btnTts.classList.add("speaking");
    if (storyCard) storyCard.classList.add("speaking");
  } else {
    btnTts.textContent = currentLang === "en" ? "🔊 Read Story" : "🔊 동화 읽어주기";
    btnTts.classList.remove("speaking");
    if (storyCard) storyCard.classList.remove("speaking");
  }
}

// 12. 이벤트 리스너 설정
const btnLangEl = document.getElementById("btn-lang");
if (btnLangEl) {
  btnLangEl.addEventListener("click", () => {
    currentLang = currentLang === "ko" ? "en" : "ko";
    localStorage.setItem("storyLang", currentLang);
    updateLangUI();
    updateAlbumUI();
    renderNode(currentNodeId);
  });
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

const btnTtsEl = document.getElementById("btn-tts");
if (btnTtsEl) {
  btnTtsEl.addEventListener("click", () => {
    if (!window.soundManager) return;

    if (isAutoTTSMode || window.soundManager.isSpeaking()) {
      isAutoTTSMode = false;
      window.soundManager.stopSpeech();
      updateTTSUI(false);
    } else {
      isAutoTTSMode = true;
      window.soundManager.playClick();
      startTTSForCurrentNode();
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

albumModalEl.addEventListener("click", (e) => {
  if (e.target === albumModalEl) {
    if (window.soundManager) window.soundManager.playClick();
    albumModalEl.classList.add("hidden");
  }
});

btnResetStoryEl.addEventListener("click", () => {
  resetStory();
});

// 13. 게임 최초 시작
window.addEventListener("DOMContentLoaded", () => {
  loadGameData();
  renderNode(currentNodeId);
});
