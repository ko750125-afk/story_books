// ==========================================
// 꼬마 탐정 지우의 4대 마법 모험 시리즈 - 스토리 데이터 모듈
// 각 동화의 노드 트리, 선택지, 엔딩 분기 데이터 정의
// ==========================================

// ------------------------------------------
// 📚 동화 1탄: 비밀 도서관과 꼬마 유령 퐁이
// ------------------------------------------
const story1Data = {
  start: {
    text: "구름 사이로 은은한 달빛이 내리쬐는 밤, 9살 꼬마 탐정 지우는 분홍색 탐정 모자를 눌러쓰고 손전등과 커다란 돋보기를 꼭 쥐었어요.\n지우 앞에는 오랜 세월 비밀을 간직해 온 마을의 비밀 도서관이 고요하게 서 있었답니다.\n\"소문에 의하면 이 도서관 깊은 곳에 밤마다 신비로운 마법을 부리는 황금 열쇠가 숨겨져 있다고 했어!\"\n지우의 가슴은 두근두근 기대감으로 부풀어 올랐어요. 도서관으로 진입할 수 있는 통로는 3곳이 눈에 띕니다.",
    image: "assets/images/scene_start.png",
    progress: 5,
    choices: [
      { text: "🪟 덩굴풀에 가려진 작고 먼지 쌓인 지하 창고 창문으로 들어간다.", nextNode: "basement_window" },
      { text: "🌿 덩굴 사다리를 타고 올라가 2층 지붕 테라스 정원으로 들어간다.", nextNode: "rooftop_garden" },
      { text: "🚪 삐걱거리는 오래된 도서관의 육중한 나무 문을 조심조심 열어본다.", nextNode: "library_door" }
    ]
  },
  library_door: {
    text: "지우가 살그머니 나무 문을 밀자, \"삐이이익-\" 하는 정겨운 삐걱거림과 함께 묵직한 책 냄새가 코끝을 감쌌어요.\n도서관 내부 천장은 까마득히 높았고, 사방에 수천 권의 책들이 소복이 쌓여 있었지요.\n그때, 높다란 책장 서가 사이에서 신비로운 금빛 노란 불빛이 스르륵 새어 나오기 시작했어요!",
    image: "assets/images/scene_bookshelf.png",
    progress: 30,
    choices: [
      { text: "🕰️ 째깍째깍 소리가 들려오는 웅장한 시계탑 홀 안쪽으로 가본다.", nextNode: "clock_tower_hall" },
      { text: "✨ 노란빛이 새어 나오는 비밀 책장 틈새를 향해 살금살금 걸어간다.", nextNode: "glowing_bookshelf" }
    ]
  },
  basement_window: {
    text: "조심조심 지하 창문틀을 넘어서 지하 창고 안으로 가볍게 착지한 지우!\n사방에는 낡은 보물상자들과 거미줄, 그리고 커다란 나무 통들이 소복이 놓여 있었어요.\n그중 창고 한가운데 놓인 알록달록한 파란 보석 상자에서 영롱한 파란빛이 반짝거리고 있었지요.",
    image: "assets/images/scene_basement.png",
    progress: 30,
    choices: [
      { text: "💎 반짝이는 영롱한 파란 보석 상자를 들여다보고 열어본다.", nextNode: "blue_box" },
      { text: "🗺️ 벽에 걸려 있는 오래된 도서관의 비밀 양피지 지도를 조사한다.", nextNode: "library_map" }
    ]
  },
  rooftop_garden: {
    text: "달빛 아래 반짝이는 2층 지붕 정원에 오른 지우! 예쁜 야광 꽃들이 몽환적인 향기를 내뿜고 있었어요.\n정원 유리창 너머로 별빛을 관측하는 비밀 천문대 데크와 2층 책장 서재가 내려다보였답니다.",
    image: "assets/images/scene_start.png",
    progress: 30,
    choices: [
      { text: "✨ 정원 연결 창문을 열고 2층 빛나는 책장 서재로 들어간다.", nextNode: "glowing_bookshelf" }
    ]
  },
  clock_tower_hall: {
    text: "시계탑 홀 안으로 들어서자, 거대한 톱니바퀴들이 째깍째깍 소리를 내며 천천히 돌아가고 있었어요.\n홀 한가운데에는 대백과사전이 펼쳐져 있었고 바닥에는 야광 발자국이 이어져 있었답니다.",
    image: "assets/images/scene_bookshelf.png",
    progress: 50,
    choices: [
      { text: "👣 바닥에 찍힌 반짝이는 야광 발자국을 따라 카운터로 향한다.", nextNode: "counter_footsteps" }
    ]
  },
  glowing_bookshelf: {
    text: "책장 틈새를 살짝 들여다본 지우는 깜짝 놀라 두 눈이 둥그래졌어요!\n동글동글하고 귀여운 흰색 꼬마 유령 '퐁이'가 둥둥 떠서 재미있게 동화책을 읽고 있었거든요.\n\"안녕? 난 유령 퐁이야! 비밀 보물상자를 열 황금 열쇠를 같이 찾아줄래?\"",
    image: "assets/images/scene_pong.png",
    progress: 60,
    choices: [
      { text: "🔍 \"걱정 마 퐁이! 우선 책장 주변의 별가루 단서부터 돋보기로 수색할게!\"", nextNode: "search_clues" },
      { text: "🤝 \"안녕 퐁이! 난 꼬마 탐정 지우야. 내가 같이 열쇠를 찾아줄게!\"", nextNode: "friend_ghost" }
    ]
  },
  blue_box: {
    text: "파란 상자를 열자 귀여운 태엽 쥐 인형들이 튀어나와 뱅글뱅글 춤을 추기 시작했어요!\n태엽 쥐들은 지우와 함께 신나게 장난감 놀이를 하고 싶어 하는 눈치예요.",
    image: "assets/images/scene_ending_toy.png",
    progress: 60,
    choices: [
      { text: "🐭 \"너희들 정말 귀엽다!\" 태엽 쥐들과 신나게 춤추며 놀아준다.", nextNode: "ending_toy" },
      { text: "📖 쥐들의 암호 쪽지를 품에 넣고 2층 빛나는 책 서가로 올라간다.", nextNode: "glowing_bookshelf" }
    ]
  },
  library_map: {
    text: "돋보기로 지도를 비추자 비밀 먹물이 반응하며 책상 밑 비밀 미로 통로가 드러났어요!",
    image: "assets/images/scene_basement.png",
    progress: 60,
    choices: [
      { text: "👣 야광 발자국이 이끄는 카운터 아래로 향한다.", nextNode: "counter_footsteps" }
    ]
  },
  counter_footsteps: {
    text: "카운터 밑을 비추자 야광 별가루 발자국이 밤마다 열리는 유령 무도회장으로 이끌었어요!\n유령들은 지우를 환영하며 마법의 열쇠를 선물로 주었답니다.",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  },
  friend_ghost: {
    text: "지우의 다정한 인사에 감동한 퐁이는 지우의 손을 꼭 잡고 보물 상자 앞으로 안내해 주었어요!\n\"이 무지개 상자를 열면 세상에서 가장 재미있는 마법 이야기가 튀어나올 거야!\"",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  search_clues: {
    text: "돋보기로 책장을 꼼꼼히 살핀 지우는 퐁이가 남긴 별빛 가루 단서를 찾아내어 황금 열쇠를 발견해 냈어요!\n\n지우는 훌륭한 추리로 명탐정 뱃지를 얻게 되었습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_happy: {
    text: "지우와 퐁이는 마법의 황금 열쇠로 비밀 도서관의 마법 책들을 모두 해금했어요!\n밤마다 동화책 속 마법 주인공들이 튀어나와 재미있는 이야기를 들려준답니다.\n\n[도서관 수호자 엔딩 - 100점 만점]",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  ending_detective: {
    text: "지우는 탁월한 추리력으로 비밀 도서관의 모든 수수께끼를 해결하고 '전설의 명탐정 뱃지'를 수상했어요!\n\n[전설의 꼬마 탐정 엔딩 - 80점 우수]",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_toy: {
    text: "지우는 지하 장난감 방에서 춤추는 태엽 쥐들과 신나게 춤추고 소꿉놀이를 하며 유쾌한 밤을 보냈답니다!\n\n[장난감 친구 엔딩 - 60점 참 잘했어요]",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  ending_ghost: {
    text: "지우는 밤마다 도서관 유령 무도회장에서 착한 유령 친구들과 모여 무지개 젤리를 먹고 동화책을 읽게 되었어요!\n\n[왁자지껄 유령 파티 엔딩 - 40점 탐험 성공]",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  }
};

// ------------------------------------------
// 🍫 동화 2탄: 달콤한 과자 성과 잃어버린 젤리 왕관
// ------------------------------------------
const story2Data = {
  start: {
    text: "어느 달콤한 햇살 아래, 꼬마 탐정 지우는 분홍색 탐정 모자를 쓰고 과자 향기가 솔솔 풍기는 '달콤한 과자 왕국'에 도착했어요!\n알록달록한 젤리 나무와 초콜릿 문 뒤로 웅장한 과자 성이 서 있었지요.\n\"소문에 의하면 과자 왕국의 잃어버린 '마법 젤리 왕관'이 성 안 어딘가에 숨겨져 있대!\"\n지우는 달콤한 과자 성 안으로 진입할 길을 찾아봅니다.",
    image: "assets/images/scene_story2_start.png",
    progress: 10,
    choices: [
      { text: "🍭 무지개 사탕 나무가 무성한 성 뒷길 산책로로 향한다.", nextNode: "candy_path" },
      { text: "🍫 달콤한 바삭바삭 쿠키 문을 조심스럽게 밀고 들어간다.", nextNode: "cookie_gate" }
    ]
  },
  cookie_gate: {
    text: "쿠키 문을 열고 성 안으로 들어서자, 사방에 초콜릿 기둥과 바삭한 팝콘 바닥이 펼쳐졌어요!\n그때, 푹신푹신한 곰돌이 젤리 기사가 달려와 엉엉 울며 말했어요.\n\"탐정 지우님! 장난꾸러기 쿠키 몬스터가 우리의 마법 젤리 왕관을 가져갔어요! 함께 찾아주세요!\"",
    image: "assets/images/scene_story2_cookie.png",
    progress: 40,
    choices: [
      { text: "🧸 \"울지 마 곰돌이 기사야! 내가 함께 젤리 왕관을 찾아줄게!\"", nextNode: "jelly_knight" },
      { text: "🔍 \"걱정 마! 내가 성 바닥의 달콤한 과자 가루 발자국을 수색해볼게!\"", nextNode: "search_crumb_clues" }
    ]
  },
  candy_path: {
    text: "무지개 사탕 나무 산책로로 들어서자, 알록달록 사탕 분수에서 탄산 사다수가 퐁퐁 솟아오르고 있었어요!\n분수대 옆에 파란색 보석 젤리 상자가 반짝반짝 빛나고 있었지요.",
    image: "assets/images/scene_basement.png",
    progress: 40,
    choices: [
      { text: "💎 반짝이는 보석 젤리 상자의 비밀 뚜껑을 연다.", nextNode: "jelly_box" },
      { text: "🏰 사탕 분수를 지나 성 중앙 대연회장으로 발걸음을 옮긴다.", nextNode: "cookie_gate" }
    ]
  },
  jelly_knight: {
    text: "곰돌이 젤리 기사는 신이 나서 지우를 과자 성의 비밀 보물방 앞으로 안내해 주었어요!\n\"이 상자 안에 잃어버린 마법 젤리 왕관이 들어 있어요! 함께 뚜껑을 열어요!\"",
    image: "assets/images/scene_story2_cookie.png",
    progress: 80,
    choices: [
      { text: "👑 곰돌이 기사와 함께 젤리 왕관 상자를 힘차게 열어젖힌다!", nextNode: "ending_sweet" }
    ]
  },
  search_crumb_clues: {
    text: "지우는 돋보기를 들고 과자 가루 단서를 꼼꼼히 따라가 마법 젤리 왕관의 위치를 밝혀냈어요!\n\n[달콤한 과자 명탐정 엔딩 - 80점 우수]",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  jelly_box: {
    text: "보석 젤리 상자를 열자 신나는 춤추는 태엽 인형들이 튀어나와 젤리 파티를 벌였답니다!\n\n[젤리 곰 장난감 파티 엔딩 - 60점 참 잘했어요]",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  ending_sweet: {
    text: "지우와 곰돌이 기사는 마법 젤리 왕관을 찾아서 과자 왕국을 되찾았어요!\n매일 밤 과자 성에서 달콤한 과자 동화 파티가 열리게 되었답니다.\n\n[과자 왕국 수호자 엔딩 - 100점 만점]",
    image: "assets/images/scene_story2_ending.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  }
};

// ------------------------------------------
// 🌊 동화 3탄: 바닷속 용궁 도시와 신비한 무지개 여의주
// ------------------------------------------
const story3Data = {
  start: {
    text: "푸른 바닷물이 투명하게 빛나는 해변, 꼬마 탐정 지우는 마법 스노클링 잠수경을 착용하고 에메랄드빛 바닷속으로 조심스레 헤엄쳐 들어갔어요.\n물속 깊은 곳에 환상적인 마법 산호초로 둘러싸인 '해저 용궁 도시'가 웅장하게 서 있었답니다!\n\"용궁의 보물인 '무지개 여의주'가 잃어버려졌다고 들었어! 부기와 함께 찾아볼까?\"",
    image: "assets/images/scene_story3_start.png",
    progress: 10,
    choices: [
      { text: "🐚 반짝이는 진주 조개 문을 통해 해저 용궁 내부로 들어간다.", nextNode: "dragon_palace" },
      { text: "🐠 알록달록 산호초 미로 길을 따라 해저 정원으로 가본다.", nextNode: "coral_garden" }
    ]
  },
  dragon_palace: {
    text: "용궁 안으로 들어오자, 둥글둥글 귀여운 아기 거북이 '부기'가 헤엄쳐 나와 지우를 반겼어요!\n\"안녕 탐정 지우야! 용왕님의 무지개 여의주를 잃어버려서 슬퍼하고 있었어... 함께 찾아줄래?\"",
    image: "assets/images/scene_story3_palace.png",
    progress: 50,
    choices: [
      { text: "🔍 \"산호초 사이의 빛나는 야광 조개 단서부터 추리해볼게!\"", nextNode: "search_ocean_clues" },
      { text: "🐢 \"안녕 부기야! 내가 바닷속 돋보기로 같이 찾아줄게!\"", nextNode: "boogi_friend" }
    ]
  },
  coral_garden: {
    text: "산호초 미로 정원에서 반짝이는 파란 해저 상자를 발견한 지우!",
    image: "assets/images/scene_basement.png",
    progress: 50,
    choices: [
      { text: "💎 반짝이는 해저 보석 상자를 열어본다.", nextNode: "ocean_box" },
      { text: "🏰 해저 용궁 본전 안쪽으로 들어간다.", nextNode: "dragon_palace" }
    ]
  },
  boogi_friend: {
    text: "부기는 기뻐하며 용궁 수중 보물상자로 지우를 안내해 주었어요!\n무지개 여의주가 환하게 빛을 발하며 바닷속을 밝혀주었답니다.\n\n[해저 용궁 수호자 엔딩 - 100점 만점]",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  search_ocean_clues: {
    text: "지우는 바닷속 돋보기로 무지개 여의주의 해저 위치를 명쾌하게 추리해 냈습니다!\n\n[용궁 해저 명탐정 엔딩 - 80점 우수]",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ocean_box: {
    text: "해저 상자를 열자 귀여운 태엽 물고기들이 나와 신나는 해저 춤 파티를 열었어요!\n\n[태엽 물고기 댄스 엔딩 - 60점 참 잘했어요]",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  }
};

// ------------------------------------------
// 🚀 동화 4탄: 장난감 우주선과 은하수 별빛 별자리
// ------------------------------------------
const story4Data = {
  start: {
    text: "별들이 보석처럼 쏟아지는 밤, 꼬마 탐정 지우는 마법 헬멧을 쓰고 밤하늘로 솟구쳐 오른 비밀 장난감 우주선 '알록달록 호'에 탑승했어요!\n창밖으로는 몽환적인 핑크색 은하수와 별자리들이 지우를 환영해 주었지요.\n\"은하수 너머에서 떨어진 '잃어버린 별빛 조각'을 모아 우주를 밝혀야 해!\"",
    image: "assets/images/scene_story4_start.png",
    progress: 10,
    choices: [
      { text: "🪐 토성의 반짝이는 띠 미끄럼틀을 타고 별빛 정원으로 내려간다.", nextNode: "saturn_ring" },
      { text: "🚀 장난감 우주선의 조종석 조종대를 잡고 은하수로 나아간다.", nextNode: "space_cockpit" }
    ]
  },
  space_cockpit: {
    text: "조종석에 앉자 동글동글 귀여운 우주 로봇 '로비'가 깜빡깜빡 눈을 맞추며 인사했어요!\n\"삐리삐리! 안녕 탐정 지우! 잃어버린 별빛 조각 상자를 같이 찾아줘!\"",
    image: "assets/images/scene_pong.png",
    progress: 50,
    choices: [
      { text: "🤖 \"안녕 로비! 나와 함께 우주 보물상자를 찾으러 가자!\"", nextNode: "roby_friend" },
      { text: "🔍 \"우주 돋보기로 별빛 입자 단서를 수색할게!\"", nextNode: "search_space_clues" }
    ]
  },
  saturn_ring: {
    text: "토성 띠 미끄럼틀에서 신비로운 파란 우주 상자를 발굴한 지우!",
    image: "assets/images/scene_basement.png",
    progress: 50,
    choices: [
      { text: "💎 영롱한 별빛 우주 상자를 열어본다.", nextNode: "space_box" },
      { text: "🚀 다시 우주선 조종석으로 이동한다.", nextNode: "space_cockpit" }
    ]
  },
  roby_friend: {
    text: "로비와 지우는 손을 잡고 우주 보물 상자를 열어 은하수에 눈부신 별빛을 가득 채웠답니다!\n\n[은하수 우주 수호자 엔딩 - 100점 만점]",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  search_space_clues: {
    text: "지우는 우주 돋보기로 은하수의 모든 별자리 수수께끼를 해결해냈습니다!\n\n[전설의 우주 명탐정 엔딩 - 80점 우수]",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  space_box: {
    text: "우주 상자를 열자 태엽 로봇 토이들이 나와 우주 댄스 파티를 벌였었어요!\n\n[우주 로봇 파티 엔딩 - 60점 참 잘했어요]",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  }
};

// ------------------------------------------
// 동화 시리즈 통합 맵 (app.js에서 참조)
// ------------------------------------------
const allStories = {
  story1: story1Data,
  story2: story2Data,
  story3: story3Data,
  story4: story4Data
};
