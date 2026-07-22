// ==========================================
// 꼬마 탐정 지우의 4대 마법 모험 시리즈 전집
// 게임 엔진 및 4개 동화 스토리 종합 소스 코드 (주인공: 지우)
// ==========================================

// 1. 동화 코스별 엔딩 메타데이터 정의 (각 4종 독립 엔딩)
const storyAlbumMeta = {
  story1: {
    title: "📚 1탄: 비밀 도서관 마법 엔딩 도감",
    endings: [
      { id: "ending-happy", title: "🔑 도서관 수호자 엔딩", icon: "🔑", img: "assets/images/scene_ending_happy.png" },
      { id: "ending-detective", title: "🌟 전설의 꼬마 탐정 엔딩", icon: "🌟", img: "assets/images/scene_ending_detective.png" },
      { id: "ending-toy", title: "🐭 장난감 친구 엔딩", icon: "🐭", img: "assets/images/scene_ending_toy.png" },
      { id: "ending-ghost", title: "👻 왁자지껄 유령 파티 엔딩", icon: "👻", img: "assets/images/scene_ending_ghost.png" }
    ]
  },
  story2: {
    title: "🍫 2탄: 달콤한 과자 성 마법 엔딩 도감",
    endings: [
      { id: "ending-happy", title: "👑 과자 왕국 수호자 엔딩", icon: "👑", img: "assets/images/scene_story2_ending.png" },
      { id: "ending-detective", title: "🔍 달콤한 과자 명탐정 엔딩", icon: "🔍", img: "assets/images/scene_ending_detective.png" },
      { id: "ending-toy", title: "🧸 젤리 곰 장난감 파티 엔딩", icon: "🧸", img: "assets/images/scene_story2_cookie.png" },
      { id: "ending-ghost", title: "🍪 과자 성 달콤 대축제 엔딩", icon: "🍪", img: "assets/images/scene_story2_start.png" }
    ]
  },
  story3: {
    title: "🌊 3탄: 바닷속 용궁 마법 엔딩 도감",
    endings: [
      { id: "ending-happy", title: "🌈 해저 용궁 수호자 엔딩", icon: "🌈", img: "assets/images/scene_ending_happy.png" },
      { id: "ending-detective", title: "🏆 용궁 해저 명탐정 엔딩", icon: "🏆", img: "assets/images/scene_ending_detective.png" },
      { id: "ending-toy", title: "🐟 태엽 물고기 댄스 엔딩", icon: "🐟", img: "assets/images/scene_ending_toy.png" },
      { id: "ending-ghost", title: "🐢 부기와 용궁 파티 엔딩", icon: "🐢", img: "assets/images/scene_story3_palace.png" }
    ]
  },
  story4: {
    title: "🚀 4탄: 장난감 우주선 마법 엔딩 도감",
    endings: [
      { id: "ending-happy", title: "🌌 은하수 우주 수호자 엔딩", icon: "🌌", img: "assets/images/scene_ending_happy.png" },
      { id: "ending-detective", title: "🏆 전설의 우주 명탐정 엔딩", icon: "🏆", img: "assets/images/scene_ending_detective.png" },
      { id: "ending-toy", title: "🤖 우주 로봇 파티 엔딩", icon: "🤖", img: "assets/images/scene_ending_toy.png" },
      { id: "ending-ghost", title: "🪐 토성 띠 우주 파티 엔딩", icon: "🪐", img: "assets/images/scene_story4_start.png" }
    ]
  }
};

// ------------------------------------------
// 📚 동화 1탄: 비밀 도서관과 꼬마 유령 퐁이
// ------------------------------------------
const story1Data = {
  start: {
    text: "구름 사이로 은은한 달빛이 내리쬐는 밤, 8살 꼬마 탐정 지우는 분홍색 탐정 모자를 눌러쓰고 손전등과 커다란 돋보기를 꼭 쥐었어요.\n지우 앞에는 오랜 세월 비밀을 간직해 온 마을의 비밀 도서관이 고요하게 서 있었답니다.\n\"소문에 의하면 이 도서관 깊은 곳에 밤마다 신비로운 마법을 부리는 황금 열쇠가 숨겨져 있다고 했어!\"\n지우의 가슴은 두근두근 기대감으로 부풀어 올랐어요. 도서관으로 진입할 수 있는 통로는 3곳이 눈에 띕니다.",
    image: "assets/images/scene_start.png",
    progress: 5,
    choices: [
      { text: "🚪 삐걱거리는 오래된 도서관의 육중한 나무 문을 조심조심 열어본다.", nextNode: "library_door" },
      { text: "🪟 덩굴풀에 가려진 작고 먼지 쌓인 지하 창고 창문으로 들어간다.", nextNode: "basement_window" },
      { text: "🌿 덩굴 사다리를 타고 올라가 2층 지붕 테라스 정원으로 들어간다.", nextNode: "rooftop_garden" }
    ]
  },
  library_door: {
    text: "지우가 살그머니 나무 문을 밀자, \"삐이이익-\" 하는 정겨운 삐걱거림과 함께 묵직한 책 냄새가 코끝을 감쌌어요.\n도서관 내부 천장은 까마득히 높았고, 사방에 수천 권의 책들이 소복이 쌓여 있었지요.\n그때, 높다란 책장 서가 사이에서 신비로운 금빛 노란 불빛이 스르륵 새어 나오기 시작했어요!\n동시에 도서관 시계탑 쪽과 고대 문서 보관소에서도 이상한 신호음이 들려왔답니다.",
    image: "assets/images/scene_bookshelf.png",
    progress: 12,
    choices: [
      { text: "✨ 노란빛이 새어 나오는 비밀 책장 틈새를 향해 살금살금 걸어간다.", nextNode: "glowing_bookshelf" },
      { text: "🕰️ 째깍째깍 소리가 들려오는 웅장한 시계탑 홀 안쪽으로 가본다.", nextNode: "clock_tower_hall" },
      { text: "📜 촛불이 희미하게 밝혀진 고대 문서 보관소 입구로 발걸음을 옮긴다.", nextNode: "ancient_archive" }
    ]
  },
  basement_window: {
    text: "조심조심 지하 창문틀을 넘어서 지하 창고 안으로 가볍게 착지한 지우!\n사방에는 낡은 보물상자들과 거미줄, 그리고 커다란 나무 통들이 소복이 놓여 있었어요.\n그중 창고 한가운데 놓인 알록달록한 파란 보석 상자에서 영롱한 파란빛이 반짝거리고 있었지요.\n벽면에는 낡은 지도가, 바닥에는 깊은 지하 동굴 통로가 열려 있었답니다.",
    image: "assets/images/scene_basement.png",
    progress: 12,
    choices: [
      { text: "💎 반짝이는 영롱한 파란 보석 상자를 들여다보고 열어본다.", nextNode: "blue_box" },
      { text: "🗺️ 벽에 걸려 있는 오래된 도서관의 비밀 양피지 지도를 조사한다.", nextNode: "library_map" },
      { text: "🦇 바람 소리가 솔솔 새어 나오는 깊은 지하 비밀 동굴로 내려간다.", nextNode: "underground_cave" }
    ]
  },
  rooftop_garden: {
    text: "달빛 아래 반짝이는 2층 지붕 정원에 오른 지우! 예쁜 야광 꽃들이 몽환적인 향기를 내뿜고 있었어요.\n정원 유리창 너머로 별빛을 관측하는 비밀 천문대 데크와 2층 책장 서재가 내려다보였답니다.",
    image: "assets/images/scene_start.png",
    progress: 12,
    choices: [
      { text: "🔭 별빛 망원경이 놓인 신비한 별빛 천문대 데크로 이동한다.", nextNode: "observatory_deck" },
      { text: "✨ 정원 연결 창문을 열고 2층 빛나는 책장 서재로 들어간다.", nextNode: "glowing_bookshelf" }
    ]
  },
  clock_tower_hall: {
    text: "시계탑 홀 안으로 들어서자, 거대한 톱니바퀴들이 째깍째깍 소리를 내며 천천히 돌아가고 있었어요.\n홀 한가운데에는 '도서관의 잊혀진 비밀 이야기'라는 대백과사전이 펼쳐져 있었고,\n바닥에는 야광 발자국과 태엽 톱니바퀴 방으로 향하는 작은 문이 있었답니다.",
    image: "assets/images/scene_bookshelf.png",
    progress: 20,
    choices: [
      { text: "📖 펼쳐진 대백과사전 책의 마법 수수께끼 페이지를 읽어본다.", nextNode: "old_encyclopedia" },
      { text: "👣 바닥에 찍힌 반짝이는 야광 발자국을 따라 카운터로 향한다.", nextNode: "counter_footsteps" },
      { text: "⚙️ 톱니바퀴 소리가 울리는 태엽 기계 방 안쪽으로 들여다본다.", nextNode: "clockwork_gear_room" }
    ]
  },
  glowing_bookshelf: {
    text: "책장 틈새를 살짝 들여다본 지우는 깜짝 놀라 두 눈이 둥그래졌어요!\n동글동글하고 귀여운 흰색 꼬마 유령 '퐁이'가 둥둥 떠서 재미있게 동화책을 읽고 있었거든요.\n\"안녕? 난 유령 퐁이야! 비밀 보물상자를 열 황금 열쇠를 같이 찾아줄래?\"",
    image: "assets/images/scene_pong.png",
    progress: 20,
    choices: [
      { text: "🤝 \"안녕 퐁이! 난 꼬마 탐정 지우야. 내가 같이 열쇠를 찾아줄게!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"걱정 마 퐁이! 우선 책장 주변의 별가루 단서부터 돋보기로 수색할게!\"", nextNode: "search_clues" },
      { text: "🎶 몽환적인 멜로디가 흐르는 마법 오르골 상자의 뚜껑을 연다.", nextNode: "music_box_room" }
    ]
  },
  blue_box: {
    text: "파란 상자를 열자 귀여운 태엽 쥐 인형들이 튀어나와 뱅글뱅글 춤을 추기 시작했어요!\n인형의 등 뒤에 적힌 암호 쪽지를 본 지우는 새로운 단서를 얻었답니다.",
    image: "assets/images/scene_ending_toy.png",
    progress: 20,
    choices: [
      { text: "🐭 태엽 쥐 인형들을 따라 비밀 장난감 방으로 들어간다.", nextNode: "toy_mice_room" },
      { text: "📖 쥐들의 암호 쪽지를 품에 넣고 2층 빛나는 책 서가로 올라간다.", nextNode: "glowing_bookshelf" }
    ]
  },
  library_map: {
    text: "돋보기로 양피지 지도를 비추자 비밀 먹물이 반응하며 도서관의 3대 비밀 통로가 드러났어요!\n지하 동굴, 책상 밑 미로, 그리고 카운터 발자국 길의 좌표가 명확해졌답니다.",
    image: "assets/images/scene_basement.png",
    progress: 20,
    choices: [
      { text: "🗺️ 지도에 표시된 책상 밑 비밀 미로 통로로 뛰어든다.", nextNode: "secret_passage" },
      { text: "👣 카운터 아래의 야광 발자국으로 향한다.", nextNode: "counter_footsteps" }
    ]
  },
  observatory_deck: {
    text: "별빛 천문대에 들어선 지우! 거대한 천체 망원경으로 밤하늘을 바라보자, 북두칠성이 지상의 비밀 도서관을 향해 빛의 화살표를 쏘아 보내고 있었어요!\n천문대 바닥에는 별자리 마법 퍼즐판이 놓여 있었답니다.",
    image: "assets/images/scene_start.png",
    progress: 28,
    choices: [
      { text: "🌌 천문대 바닥의 별자리 마법 퍼즐을 돋보기로 맞춘다.", nextNode: "star_constellation_puzzle" },
      { text: "✨ 별빛 화살표를 따라 아랫층 퐁이의 책 서가로 내려간다.", nextNode: "pong_first_meeting" }
    ]
  },
  underground_cave: {
    text: "지하 동굴로 내려오자, 시원한 바람과 함께 퐁퐁 샘솟는 수수께끼 분수가 눈앞에 나타났어요!\n분수대 물결 위에 빛나는 수수께끼 글귀가 둥둥 떠다니고 있었답니다.",
    image: "assets/images/scene_basement.png",
    progress: 28,
    choices: [
      { text: "⛲ 수수께끼 분수의 퀴즈를 풀고 마법 무지개 다리를 연결한다.", nextNode: "riddle_fountain" },
      { text: "🐭 동굴 구석에서 들리는 찌찍 태엽 소리를 따라 장난감 방으로 간다.", nextNode: "toy_mice_room" }
    ]
  },
  ancient_archive: {
    text: "고대 문서 보관소에는 수백 년 된 커다란 양피지 책들이 가득했어요.\n그곳에서 안경을 쓴 친절한 책벌레 유령 '지키 할아버지'가 지우를 반갑게 맞이해 주었답니다!\n\"오호라, 탐정 지우로구나! 내가 황금 자물쇠의 열쇠 단서를 알려주마.\"",
    image: "assets/images/scene_bookshelf.png",
    progress: 28,
    choices: [
      { text: "👴 지키 할아버지에게 황금 자물쇠의 비밀 힌트를 듣는다.", nextNode: "bookworm_jiki" },
      { text: "📖 보관소 중앙의 대백과사전 마법 페이지를 더 조사한다.", nextNode: "old_encyclopedia" }
    ]
  },
  music_box_room: {
    text: "오르골 뚜껑을 열자 몽환적인 춤추는 그림자 인형들이 나와壁면에 신비로운 그림자 연극을 펼쳤어요!\n그림자 인형들은 손가락으로 달콤한 냄새가 나는 유령 베이커리 빵집을 가리켰답니다.",
    image: "assets/images/scene_pong.png",
    progress: 28,
    choices: [
      { text: "🎭 신비로운 그림자 연극 신호를 따라 유령 베이커리로 간다.", nextNode: "shadow_game" },
      { text: "👻 오르골 소리에 이끌려 다가온 퐁이와 반갑게 대화한다.", nextNode: "pong_first_meeting" }
    ]
  },
  old_encyclopedia: {
    text: "대백과사전 마법 페이지에 빛나는 퀴즈가 떠올랐어요!\n'밤하늘의 별을 사랑하고 동화책을 좋아하는 자만이 마법 상자를 열 수 있다.'\n지우는 퀴즈의 답을 직감했답니다.",
    image: "assets/images/scene_bookshelf.png",
    progress: 36,
    choices: [
      { text: "🧠 퀴즈의 답을 맞추기 위해 마법 퀴즈 방으로 들어간다.", nextNode: "magic_riddle_quiz" }
    ]
  },
  counter_footsteps: {
    text: "돋보기로 발자국을 따라가자, 카운터 밑에서 작고 다정한 메아리 소리가 들려왔어요!\n발자국은 미로 같은 소리 홀을 거쳐 유령들의 무도회장으로 이어져 있었답니다.",
    image: "assets/images/scene_bookshelf.png",
    progress: 36,
    choices: [
      { text: "👣 별가루 발자국 트레일을 끝까지 추적해 들어간다.", nextNode: "footstep_trail" },
      { text: "🗣️ 큰 소리로 \"거기 누구 있니? 지우가 도와줄게!\" 하고 외친다.", nextNode: "call_out" }
    ]
  },
  clockwork_gear_room: {
    text: "태엽 기계 방 안에는 수많은 마법 톱니바퀴들이 오케스트라처럼 연주하고 있었어요!\n톱니바퀴 문 뒤편으로 태엽 쥐들의 댄스 파티장과 거울 퍼즐 방이 숨겨져 있었답니다.",
    image: "assets/images/scene_ending_toy.png",
    progress: 36,
    choices: [
      { text: "🎉 신나는 음악이 넘치는 태엽 쥐 댄스 파티로 진입한다.", nextNode: "toy_mouse_dance_party" },
      { text: "🪞 빛반사 거울 퍼즐이 설치된 비밀 신전으로 들어간다.", nextNode: "mirror_puzzle_chamber" }
    ]
  },
  pong_first_meeting: {
    text: "퐁이는 지우의 다정한 인사 소리에 배시시 웃으며 떠올랐어요!\n\"안녕 지우 탐정님! 내 손을 잡으면 거미줄 무지개 다리를 건너 보물 상자로 갈 수 있어!\"",
    image: "assets/images/scene_pong.png",
    progress: 45,
    choices: [
      { text: "🤝 퐁이와 절친이 되어 다정한 친구 모드로 보물 상자로 간다.", nextNode: "friend_ghost" },
      { text: "🕸️ 퐁이가 안내해 준 거미줄 무지개 다리를 신나게 건넌다.", nextNode: "spider_web_bridge" }
    ]
  },
  search_clues: {
    text: "돋보기로 책장을 수색하자, 퐁이가 흘린 빛나는 별빛 가루 단서들이 길게 펼쳐졌어요!\n지우의 명추리가 단서들을 하나씩 풀어내기 시작했답니다.",
    image: "assets/images/scene_ending_detective.png",
    progress: 45,
    choices: [
      { text: "🌟 별빛 가루 길을 따라 황금 열쇠의 완벽한 위치를 추적한다.", nextNode: "starlight_dust_path" },
      { text: "🔍 돋보기 수색 기술로 비밀 스위치를 밝혀낸다.", nextNode: "magnifier_deep_search" }
    ]
  },
  toy_mice_room: {
    text: "비밀 장난감 방에 도착한 지우! 귀여운 태엽 쥐들이 지우에게 과자를 대접하며 함께 춤을 추자고 청했답니다.",
    image: "assets/images/scene_ending_toy.png",
    progress: 45,
    choices: [
      { text: "🐭 태엽 쥐들과 신나게 춤추며 놀아주는 결말을 맞이한다.", nextNode: "toy_mouse_dance_party" }
    ]
  },
  secret_passage: {
    text: "책상 밑 비밀 미로 통로를 지나자 공중에 트램펄린이 떠 있는 마법 놀이방이 나타났어요!\n방 한가운데엔 빛나는 보물 상자와 빛반사 거울이 놓여 있었답니다.",
    image: "assets/images/scene_basement.png",
    progress: 45,
    choices: [
      { text: "🎁 비밀 상자 앞으로 가서 퐁이와 상자를 연다.", nextNode: "secret_room" },
      { text: "🪞 거울 퍼즐을 맞춰 전설의 명탐정 방으로 간다.", nextNode: "mirror_puzzle_chamber" }
    ]
  },
  star_constellation_puzzle: {
    text: "지우가 돋보기 불빛으로 천문대의 북두칠성 별자리를 맞추자, 하늘에서 별빛 가루가 쏟아져 내리며 황금 열쇠 좌표가 드러났어요!",
    image: "assets/images/scene_start.png",
    progress: 55,
    choices: [
      { text: "🌟 별빛 길을 따라 전설의 꼬마 탐정 뱃지를 얻으러 간다.", nextNode: "starlight_dust_path" }
    ]
  },
  riddle_fountain: {
    text: "수수께끼 분수의 퀴즈를 맞추자, 분수 물줄기가 알록달록한 무지개 다리로 바뀌며 퐁이의 보물 상자 방과 연결되었어요!",
    image: "assets/images/scene_basement.png",
    progress: 55,
    choices: [
      { text: "🌈 무지개 다리를 건너 보물 상자로 향한다.", nextNode: "rainbow_bridge" }
    ]
  },
  bookworm_jiki: {
    text: "책벌레 지키 할아버지가 고대 양피지 스크롤을 건네주었어요.\n\"이 암호를 입력하면 황금 자물쇠가 딸깍하고 열린단다!\"",
    image: "assets/images/scene_bookshelf.png",
    progress: 55,
    choices: [
      { text: "🔑 지키 할아버지의 암호 스크롤을 들고 자물쇠 방으로 간다.", nextNode: "golden_lock_chamber" }
    ]
  },
  shadow_game: {
    text: "그림자 연극을 지나 유령 베이커리에 도착한 지우! 갓 구운 달콤한 무지개 빵 냄새가 온 도서관에 퍼져 있었어요.",
    image: "assets/images/scene_pong.png",
    progress: 55,
    choices: [
      { text: "🧁 유령 베이커리에서 빵을 나눠먹고 유령 무도회장으로 간다.", nextNode: "ghost_bakery" }
    ]
  },
  magic_riddle_quiz: {
    text: "마법 퀴즈 방의 문이 딸깍 열리며 눈부신 황금 보물 상자가 모습을 나타냈어요!",
    image: "assets/images/scene_ending_happy.png",
    progress: 65,
    choices: [
      { text: "🔑 황금 열쇠를 들고 무지개 보물 상자를 연다.", nextNode: "rainbow_chest" }
    ]
  },
  footstep_trail: {
    text: "발자국 트레일을 지나자 메아리 홀이 나타났고, 그 너머로 수많은 아기 유령들이 환영 잔치를 벌이고 있었어요!",
    image: "assets/images/scene_bookshelf.png",
    progress: 65,
    choices: [
      { text: "🎶 메아리 홀을 지나 유령 무도회장으로 들어간다.", nextNode: "echo_hall" }
    ]
  },
  toy_mouse_dance_party: {
    text: "지우는 태엽 쥐 인형들과 신나게 춤을 추며 세상에서 가장 유쾌한 밤을 보냈답니다!\n[장난감 친구 엔딩] 태엽 쥐들과 언제든 소꿉놀이를 할 수 있게 되었습니다!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  spider_web_bridge: {
    text: "무지개 거미줄 다리를 건너자 눈부신 무지개 보물 상자가 지우를 기다리고 있었어요!",
    image: "assets/images/scene_ending_happy.png",
    progress: 75,
    choices: [
      { text: "💫 퐁이와 함께 힘껏 보물 상자를 열어젖힌다.", nextNode: "rainbow_chest" }
    ]
  },
  starlight_dust_path: {
    text: "별빛 가루 길 끝에서 지우는 전설의 꼬마 탐정 뱃지와 황금 열쇠를 동시에 발굴해냈습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🏆 명예의 전당으로 가서 전설의 탐정 엔딩을 맞이한다.", nextNode: "master_badge_ceremony" }
    ]
  },
  magnifier_deep_search: {
    text: "지우의 정밀한 돋보기 수색 덕분에 도서관의 숨겨진 모든 마법 장치가 풀어졌어요!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🌟 명예의 전당 수여식으로 이동한다.", nextNode: "master_badge_ceremony" }
    ]
  },
  secret_room: {
    text: "비밀 방 중앙의 황금 자물쇠 앞에 선 지우와 퐁이! 손을 모아 열쇠를 돌렸어요.",
    image: "assets/images/scene_ending_happy.png",
    progress: 85,
    choices: [
      { text: "🔑 황금 자물쇠를 완벽하게 해제한다.", nextNode: "golden_lock_chamber" }
    ]
  },
  mirror_puzzle_chamber: {
    text: "돋보기 불빛을 반사시켜 거울 퍼즐을 풀자 전설의 꼬마 탐정 수여식이 열렸습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🏆 전설의 탐정 뱃지를 가슴에 다는 엔딩으로 간다.", nextNode: "master_badge_ceremony" }
    ]
  },
  rainbow_bridge: {
    text: "무지개 다리를 건너 무지개 보물 상자 앞에 무사히 도착했어요!",
    image: "assets/images/scene_ending_happy.png",
    progress: 85,
    choices: [
      { text: "🌈 보물 상자를 열고 도서관 수호자가 된다.", nextNode: "rainbow_chest" }
    ]
  },
  golden_lock_chamber: {
    text: "지키 할아버지의 암호 스크롤대로 자물쇠를 돌리자 마법 책들이 모두 해금되었어요!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 마법 상자 봉인을 풀어낸다.", nextNode: "secret_chest_unsealing" }
    ]
  },
  ghost_bakery: {
    text: "유령 베이커리 빵집에서 따뜻한 무지개 빵을 먹은 뒤 모닥불 동화 파티장으로 향했어요!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 85,
    choices: [
      { text: "🔥 유령 친구들과 모닥불에 둘러앉아 동화책을 읽는다.", nextNode: "ghost_story_campfire" }
    ]
  },
  echo_hall: {
    text: "메아리 홀을 지나자 유령들의 왁자지껄한 모닥불 동화 파티가 시작되었습니다!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 85,
    choices: [
      { text: "👻 유령 무도회 파티 엔딩으로 들어간다.", nextNode: "ghost_story_campfire" }
    ]
  },
  ghost_story_campfire: {
    text: "지우는 밤마다 도서관 모닥불에 유령 친구들과 모여 무지개 젤리를 먹으며 재미있는 동화책을 읽게 되었어요!\n[왁자지껄 유령 파티 엔딩] 착한 유령 친구들과 영원한 독서 동반자가 되었습니다!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  },
  rainbow_chest: {
    text: "무지개 보물 상자가 열리며 비밀 도서관의 마법 이야기책들이 모두 해금되었습니다!\n[도서관 수호자 엔딩] 지우는 퐁이와 함께 언제나 신나는 마법 동화책 모험을 즐기게 되었습니다. 해피엔딩!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  secret_chest_unsealing: {
    text: "지우와 퐁이는 마법 보물상자를 해금하여 동화책 속 주인공들과 매일 밤 즐거운 이야기를 나누게 되었답니다!\n[도서관 수호자 엔딩] 해피엔딩!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  master_badge_ceremony: {
    text: "지우는 돋보기와 탁월한 명추리로 도서관의 모든 수수께끼를 해결하여 '전설의 명탐정 뱃지'를 가슴에 달았습니다!\n[전설의 꼬마 탐정 엔딩] 마을 최고의 탐정 지우 만세!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_happy: {
    text: "지우와 퐁이는 마법의 황금 열쇠로 도서관의 보물상자를 열어 비밀 도서관의 마법 책들을 모두 해금했어요!\n이제 밤마다 도서관의 동화책 속 마법 주인공들이 튀어나와 지우와 퐁이에게 세상에서 가장 재미있는 옛날이야기를 들려준답니다.\n\n[도서관 수호자 엔딩] 지우는 퐁이와 영원한 친구가 되어 언제나 신나는 동화책 모험을 떠날 수 있게 되었습니다. 해피엔딩!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  ending_detective: {
    text: "지우는 돋보기와 탁월한 추리력으로 비밀 도서관의 모든 단서를 풀어내고 황금 열쇠의 비밀을 명확히 밝혀냈어요!\n도서관 국왕님은 지우에게 '전설의 명탐정 뱃지'를 수여해 주었지요.\n\n[전설의 꼬마 탐정 엔딩] 지우는 마을 최고의 명탐정으로 이름을 날리게 되었습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_toy: {
    text: "지우는 황금 열쇠 대신, 지하 장난감 방에서 춤추는 태엽 쥐 인형들과 신나게 소꿉놀이를 하며 시간 가는 줄 몰랐어요.\n비록 열쇠는 못 찾았지만, 잊지 못할 세상에서 가장 신나고 유쾌한 비밀 장난감 친구들을 얻었답니다!\n\n[장난감 친구 엔딩] 귀여운 태엽 쥐들과 언제든 비밀 소꿉장난을 즐길 수 있게 되었습니다!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  ending_ghost: {
    text: "지우는 밤마다 도서관 무도회장에서 수많은 유령 친구들과 모여 알록달록 무지개 젤리를 먹고 동화책을 함께 읽게 되었어요.\n무서운 줄만 알았던 유령들은 세상에서 가장 따뜻하고 착한 독서 친구들이었지요!\n\n[왁자지껄 유령 파티 엔딩] 밤마다 도서관에서 신나는 동화책 모닥불 파티가 열리게 되었습니다!",
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
      { text: "🍫 달콤한 바삭바삭 쿠키 문을 조심스럽게 밀고 들어간다.", nextNode: "cookie_gate" },
      { text: "🍭 무지개 사탕 나무가 무성한 성 뒷길 산책로로 향한다.", nextNode: "candy_path" }
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
    text: "지우는 돋보기를 들고 과자 가루 단서를 꼼꼼히 따라가 마법 젤리 왕관의 위치를 밝혀냈어요!\n\n지우는 과자 왕국 최고의 명탐정 칭호를 획득했습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  jelly_box: {
    text: "보석 젤리 상자를 열자 신나는 춤추는 태엽 인형들이 튀어나와 젤리 파티를 벌였답니다!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  ending_sweet: {
    text: "지우와 곰돌이 기사는 마법 젤리 왕관을 찾아서 과자 왕국을 되찾았어요!\n매일 밤 과자 성에서 달콤한 과자 동화 파티가 열리게 되었답니다.\n\n[과자 왕국 수호자 엔딩] 해피엔딩!",
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
      { text: "🐢 \"안녕 부기야! 내가 바닷속 돋보기로 같이 찾아줄게!\"", nextNode: "boogi_friend" },
      { text: "🔍 \"산호초 사이의 빛나는 야광 조개 단서부터 추리해볼게!\"", nextNode: "search_ocean_clues" }
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
    text: "부기는 기뻐하며 용궁 수중 보물상자로 지우를 안내해 주었어요!\n무지개 여의주가 환하게 빛을 발하며 바닷속을 밝혀주었답니다.",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  search_ocean_clues: {
    text: "지우는 바닷속 돋보기로 무지개 여의주의 해저 위치를 명쾌하게 추리해 냈습니다!\n\n[해저 명탐정 엔딩] 용궁 수호 탐정이 되었습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ocean_box: {
    text: "해저 상자를 열자 귀여운 태엽 물고기들이 나와 신나는 해저 춤 파티를 열었어요!",
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
      { text: "🚀 장난감 우주선의 조종석 조종대를 잡고 은하수로 나아간다.", nextNode: "space_cockpit" },
      { text: "🪐 토성의 반짝이는 띠 미끄럼틀을 타고 별빛 정원으로 내려간다.", nextNode: "saturn_ring" }
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
    text: "로비와 지우는 손을 잡고 우주 보물 상자를 열어 은하수에 눈부신 별빛을 가득 채웠답니다!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  search_space_clues: {
    text: "지우는 우주 돋보기로 은하수의 모든 별자리 수수께끼를 해결해냈습니다!\n\n[우주 명탐정 엔딩] 전설의 우주 탐정이 되었습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  space_box: {
    text: "우주 상자를 열자 태엽 로봇 토이들이 나와 우주 댄스 파티를 벌였었어요!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  }
};

// 동화 시리즈 통합 맵
const allStories = {
  story1: story1Data,
  story2: story2Data,
  story3: story3Data,
  story4: story4Data
};

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

// 전역 상태 변수
let currentStoryKey = "story1";
let currentNodeId = "start";
let unlockedEndingsMap = {
  story1: [],
  story2: [],
  story3: [],
  story4: []
};
let isAutoTTSMode = false;

// 현재 스토리 데이터 취득
function getActiveStoryData() {
  return allStories[currentStoryKey] || story1Data;
}

// 헬퍼 함수: 현재 스토리의 특정 엔딩 이름 반환
function getEndingName(endingId) {
  const meta = storyAlbumMeta[currentStoryKey] || storyAlbumMeta.story1;
  const found = meta.endings.find(e => e.id === endingId);
  return found ? found.title : "마법 해피 엔딩";
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

  const savedEndings = localStorage.getItem("unlockedEndingsMap");
  if (savedEndings) {
    try {
      unlockedEndingsMap = JSON.parse(savedEndings);
    } catch (e) {
      // fallback
    }
  }
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
      btnReset.textContent = "📖 모험을 성공적으로 마쳤어요! 처음부터 다시 읽기";
      btnReset.addEventListener("click", () => {
        if (window.soundManager) window.soundManager.playClick();
        resetStory();
      });
      choiceContainerEl.appendChild(btnReset);

      if (node.endingId) {
        unlockEnding(node.endingId);
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

// 엔딩 해금 로직
function unlockEnding(endingId) {
  if (!unlockedEndingsMap[currentStoryKey]) {
    unlockedEndingsMap[currentStoryKey] = [];
  }
  const isNew = !unlockedEndingsMap[currentStoryKey].includes(endingId);
  if (isNew) {
    unlockedEndingsMap[currentStoryKey].push(endingId);
    localStorage.setItem("unlockedEndingsMap", JSON.stringify(unlockedEndingsMap));
    updateAlbumUI();
  }
  
  setTimeout(() => {
    showCelebrationModal(endingId);
  }, 300);
}

// 마법 축하 모달
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

  const currentMeta = storyAlbumMeta[currentStoryKey] || storyAlbumMeta.story1;
  const foundEnding = currentMeta.endings.find(e => e.id === endingId);

  let endingImg = foundEnding ? foundEnding.img : "assets/images/scene_ending_happy.png";
  let endingTitle = foundEnding ? foundEnding.title : getEndingName(endingId);

  celImageEl.src = endingImg;
  celEndingNameEl.textContent = endingTitle;
  celTitleEl.textContent = "🎉 새로운 동화 엔딩 해금!";
  celDescEl.textContent = "지우와 함께 동화 속 멋진 모험의 결말을 성공적으로 달성하셨습니다! 축하합니다!";

  launchConfetti();

  albumModalEl.classList.add("hidden");
  celModalEl.classList.remove("hidden");
}

// 컨페티 엔진
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

// 동화 코스별 맞춤 엔딩 도감 UI 실시간 동적 렌더링
function updateAlbumUI() {
  const gridEl = document.getElementById("album-grid");
  const albumTitleEl = document.getElementById("album-title");
  const albumDescEl = document.getElementById("album-desc");
  if (!gridEl) return;

  const currentMeta = storyAlbumMeta[currentStoryKey] || storyAlbumMeta.story1;
  const currentUnlocked = unlockedEndingsMap[currentStoryKey] || [];

  if (albumTitleEl) {
    albumTitleEl.textContent = `🏆 ${currentMeta.title}`;
  }
  if (albumDescEl) {
    albumDescEl.textContent = `이 동화 모험의 엔딩 수집 현황: (달성 ${currentUnlocked.length} / ${currentMeta.endings.length})`;
  }

  gridEl.innerHTML = "";

  currentMeta.endings.forEach(meta => {
    const itemEl = document.createElement("div");
    itemEl.className = "album-item";
    itemEl.id = meta.id;

    const isUnlocked = currentUnlocked.includes(meta.id);

    if (isUnlocked) {
      itemEl.classList.add("unlocked");
      itemEl.innerHTML = `
        <div class="album-status">🎉 획득 (클릭하여 감상)</div>
        <img src="${meta.img}" alt="${meta.title}">
        <h3>${meta.title}</h3>
      `;
      itemEl.onclick = () => {
        showCelebrationModal(meta.id);
      };
      itemEl.style.cursor = "pointer";
    } else {
      itemEl.classList.remove("unlocked");
      itemEl.innerHTML = `
        <div class="album-status">🔒 미획득</div>
        <img src="${meta.img}" alt="${meta.title}" style="filter: grayscale(1) opacity(0.4);">
        <h3>${meta.title}</h3>
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

// 최초 시작
window.addEventListener("DOMContentLoaded", () => {
  loadGameData();
  renderNode(currentNodeId);
});
