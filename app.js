// ==========================================
// 꼬마 탐정 아리와 비밀 도서관의 꼬마 유령
// 게임 엔진 및 한국어/영어 45개 초대형 스토리 노드 소스 코드 (2배 대폭 추가 확장판)
// ==========================================

// 1. 한국어 스토리 노드 데이터 (45개 대용량 탐험 노드 트리)
const storyDataKo = {
  start: {
    text: "구름 사이로 은은한 달빛이 내리쬐는 밤, 8살 꼬마 탐정 아리는 분홍색 탐정 모자를 눌러쓰고 손전등과 커다란 돋보기를 꼭 쥐었어요.\n아리 앞에는 오랜 세월 비밀을 간직해 온 마을의 비밀 도서관이 고요하게 서 있었답니다.\n\"소문에 의하면 이 도서관 깊은 곳에 밤마다 신비로운 마법을 부리는 황금 열쇠가 숨겨져 있다고 했어!\"\n아리의 가슴은 두근두근 기대감으로 부풀어 올랐어요. 도서관으로 진입할 수 있는 통로는 3곳이 눈에 띕니다.",
    image: "assets/images/scene_start.png",
    progress: 5,
    choices: [
      { text: "🚪 삐걱거리는 오래된 도서관의 육중한 나무 문을 조심조심 열어본다.", nextNode: "library_door" },
      { text: "🪟 덩굴풀에 가려진 작고 먼지 쌓인 지하 창고 창문으로 들어간다.", nextNode: "basement_window" },
      { text: "🌿 덩굴 사다리를 타고 올라가 2층 지붕 테라스 정원으로 들어간다.", nextNode: "rooftop_garden" }
    ]
  },
  library_door: {
    text: "아리가 살그머니 나무 문을 밀자, \"삐이이익-\" 하는 정겨운 삐걱거림과 함께 묵직한 책 냄새가 코끝을 감쌌어요.\n도서관 내부 천장은 까마득히 높았고, 사방에 수천 권의 책들이 소복이 쌓여 있었지요.\n그때, 높다란 책장 서가 사이에서 신비로운 금빛 노란 불빛이 스르륵 새어 나오기 시작했어요!\n동시에 도서관 시계탑 쪽과 고대 문서 보관소에서도 이상한 신호음이 들려왔답니다.",
    image: "assets/images/scene_bookshelf.png",
    progress: 12,
    choices: [
      { text: "✨ 노란빛이 새어 나오는 비밀 책장 틈새를 향해 살금살금 걸어간다.", nextNode: "glowing_bookshelf" },
      { text: "🕰️ 째깍째깍 소리가 들려오는 웅장한 시계탑 홀 안쪽으로 가본다.", nextNode: "clock_tower_hall" },
      { text: "📜 촛불이 희미하게 밝혀진 고대 문서 보관소 입구로 발걸음을 옮긴다.", nextNode: "ancient_archive" }
    ]
  },
  basement_window: {
    text: "조심조심 지하 창문틀을 넘어서 지하 창고 안으로 가볍게 착지한 아리!\n사방에는 낡은 보물상자들과 거미줄, 그리고 커다란 나무 통들이 소복이 놓여 있었어요.\n그중 창고 한가운데 놓인 알록달록한 파란 보석 상자에서 영롱한 파란빛이 반짝거리고 있었지요.\n벽면에는 낡은 지도가, 바닥에는 깊은 지하 동굴 통로가 열려 있었답니다.",
    image: "assets/images/scene_basement.png",
    progress: 12,
    choices: [
      { text: "💎 반짝이는 영롱한 파란 보석 상자를 들여다보고 열어본다.", nextNode: "blue_box" },
      { text: "🗺️ 벽에 걸려 있는 오래된 도서관의 비밀 양피지 지도를 조사한다.", nextNode: "library_map" },
      { text: "🦇 바람 소리가 솔솔 새어 나오는 깊은 지하 비밀 동굴로 내려간다.", nextNode: "underground_cave" }
    ]
  },
  rooftop_garden: {
    text: "달빛 아래 반짝이는 2층 지붕 정원에 오른 아리! 예쁜 야광 꽃들이 몽환적인 향기를 내뿜고 있었어요.\n정원 유리창 너머로 별빛을 관측하는 비밀 천문대 데크와 2층 책장 서재가 내려다보였답니다.",
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
    text: "책장 틈새를 살짝 들여다본 아리는 깜짝 놀라 두 눈이 둥그래졌어요!\n동글동글하고 귀여운 흰색 꼬마 유령 '퐁이'가 둥둥 떠서 재미있게 동화책을 읽고 있었거든요.\n책장 옆엔 아름다운 멜로디가 흐르는 마법 오르골 상자도 놓여 있었답니다.",
    image: "assets/images/scene_pong.png",
    progress: 20,
    choices: [
      { text: "👻 퐁이에게 수줍게 인사를 건네며 반갑게 통소리를 낸다.", nextNode: "pong_first_meeting" },
      { text: "🔍 돋보기를 들고 책장 주위의 별가루 단서를 꼼꼼히 스캔한다.", nextNode: "search_clues" },
      { text: "🎶 몽환적인 멜로디가 흐르는 마법 오르골 상자의 뚜껑을 연다.", nextNode: "music_box_room" }
    ]
  },
  blue_box: {
    text: "파란 상자를 열자 귀여운 태엽 쥐 인형들이 튀어나와 뱅글뱅글 춤을 추기 시작했어요!\n인형의 등 뒤에 적힌 암호 쪽지를 본 아리는 새로운 단서를 얻었답니다.",
    image: "assets/images/scene_ending_toy.png",
    progress: 20,
    choices: [
      { text: "🐭 태엽 쥐 인형들을 따라 비밀 장난감 방으로 들어간다.", nextNode: "toy_mice_room" },
      { text: "📖 암호 쪽지를 품에 넣고 2층 빛나는 책 서가로 올라간다.", nextNode: "glowing_bookshelf" }
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
    text: "별빛 천문대에 들어선 아리! 거대한 천체 망원경으로 밤하늘을 바라보자, 북두칠성이 지상의 비밀 도서관을 향해 빛의 화살표를 쏘아 보내고 있었어요!\n천문대 바닥에는 별자리 마법 퍼즐판이 놓여 있었답니다.",
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
    text: "고대 문서 보관소에는 수백 년 된 커다란 양피지 책들이 가득했어요.\n그곳에서 안경을 쓴 친절한 책벌레 유령 '지키 할아버지'가 아리를 반갑게 맞이해 주었답니다!\n\"오호라, 탐정 아리로구나! 내가 황금 자물쇠의 열쇠 단서를 알려주마.\"",
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
    text: "대백과사전 마법 페이지에 빛나는 퀴즈가 떠올랐어요!\n'밤하늘의 별을 사랑하고 동화책을 좋아하는 자만이 마법 상자를 열 수 있다.'\n아리는 퀴즈의 답을 직감했답니다.",
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
      { text: "🗣️ 큰 소리로 \"거기 누구 있니? 아리가 도와줄게!\" 하고 외친다.", nextNode: "call_out" }
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
    text: "퐁이는 아리의 다정한 인사 소리에 배시시 웃으며 떠올랐어요!\n\"안녕 아리 탐정님! 내 손을 잡으면 거미줄 무지개 다리를 건너 보물 상자로 갈 수 있어!\"",
    image: "assets/images/scene_pong.png",
    progress: 45,
    choices: [
      { text: "🤝 퐁이와 절친이 되어 다정한 친구 모드로 보물 상자로 간다.", nextNode: "friend_ghost" },
      { text: "🕸️ 퐁이가 안내해 준 거미줄 무지개 다리를 신나게 건넌다.", nextNode: "spider_web_bridge" }
    ]
  },
  search_clues: {
    text: "돋보기로 책장을 수색하자, 퐁이가 흘린 빛나는 별빛 가루 단서들이 길게 펼쳐졌어요!\n아리의 명추리가 단서들을 하나씩 풀어내기 시작했답니다.",
    image: "assets/images/scene_ending_detective.png",
    progress: 45,
    choices: [
      { text: "🌟 별빛 가루 길을 따라 황금 열쇠의 완벽한 위치를 추적한다.", nextNode: "starlight_dust_path" },
      { text: "🔍 돋보기 수색 기술로 비밀 스위치를 밝혀낸다.", nextNode: "magnifier_deep_search" }
    ]
  },
  toy_mice_room: {
    text: "비밀 장난감 방에 도착한 아리! 귀여운 태엽 쥐들이 아리에게 과자를 대접하며 함께 춤을 추자고 청했답니다.",
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
    text: "아리가 돋보기 불빛으로 천문대의 북두칠성 별자리를 맞추자, 하늘에서 별빛 가루가 쏟아져 내리며 황금 열쇠 좌표가 드러났어요!",
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
    text: "그림자 연극을 지나 유령 베이커리에 도착한 아리! 갓 구운 달콤한 무지개 빵 냄새가 온 도서관에 퍼져 있었어요.",
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
    text: "아리는 태엽 쥐 인형들과 신나게 춤을 추며 세상에서 가장 유쾌한 밤을 보냈답니다!\n[장난감 친구 엔딩] 태엽 쥐들과 언제든 소꿉놀이를 할 수 있게 되었습니다!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  spider_web_bridge: {
    text: "무지개 거미줄 다리를 건너자 눈부신 무지개 보물 상자가 아리를 기다리고 있었어요!",
    image: "assets/images/scene_ending_happy.png",
    progress: 75,
    choices: [
      { text: "💫 퐁이와 함께 힘껏 보물 상자를 열어젖힌다.", nextNode: "rainbow_chest" }
    ]
  },
  starlight_dust_path: {
    text: "별빛 가루 길 끝에서 아리는 전설의 꼬마 탐정 뱃지와 황금 열쇠를 동시에 발굴해냈습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🏆 명예의 전당으로 가서 전설의 탐정 엔딩을 맞이한다.", nextNode: "master_badge_ceremony" }
    ]
  },
  magnifier_deep_search: {
    text: "아리의 정밀한 돋보기 수색 덕분에 도서관의 숨겨진 모든 마법 장치가 풀어졌어요!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🌟 명예의 전당 수여식으로 이동한다.", nextNode: "master_badge_ceremony" }
    ]
  },
  secret_room: {
    text: "비밀 방 중앙의 황금 자물쇠 앞에 선 아리와 퐁이! 손을 모아 열쇠를 돌렸어요.",
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
    text: "아리는 밤마다 도서관 모닥불에 유령 친구들과 모여 무지개 젤리를 먹으며 재미있는 동화책을 읽게 되었어요!\n[왁자지껄 유령 파티 엔딩] 착한 유령 친구들과 영원한 독서 동반자가 되었습니다!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  },
  rainbow_chest: {
    text: "무지개 보물 상자가 열리며 비밀 도서관의 마법 이야기책들이 모두 해금되었습니다!\n[도서관 수호자 엔딩] 아리는 퐁이와 함께 언제나 신나는 마법 동화책 모험을 즐기게 되었습니다. 해피엔딩!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  secret_chest_unsealing: {
    text: "아리와 퐁이는 마법 보물상자를 해금하여 동화책 속 주인공들과 매일 밤 즐거운 이야기를 나누게 되었답니다!\n[도서관 수호자 엔딩] 해피엔딩!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  master_badge_ceremony: {
    text: "아리는 돋보기와 탁월한 명추리로 도서관의 모든 수수께끼를 해결하여 '전설의 명탐정 뱃지'를 가슴에 달았습니다!\n[전설의 꼬마 탐정 엔딩] 마을 최고의 탐정 아리 만세!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_happy: {
    text: "아리와 퐁이는 마법의 황금 열쇠로 도서관의 보물상자를 열어 비밀 도서관의 마법 책들을 모두 해금했어요!\n이제 밤마다 도서관의 동화책 속 마법 주인공들이 튀어나와 아리와 퐁이에게 세상에서 가장 재미있는 옛날이야기를 들려준답니다.\n\n[도서관 수호자 엔딩] 아리는 퐁이와 영원한 친구가 되어 언제나 신나는 동화책 모험을 떠날 수 있게 되었습니다. 해피엔딩!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  ending_detective: {
    text: "아리는 돋보기와 탁월한 추리력으로 비밀 도서관의 모든 단서를 풀어내고 황금 열쇠의 비밀을 명확히 밝혀냈어요!\n도서관 국왕님은 아리에게 '전설의 명탐정 뱃지'를 수여해 주었지요.\n\n[전설의 꼬마 탐정 엔딩] 아리는 마을 최고의 명탐정으로 이름을 날리게 되었습니다!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_toy: {
    text: "아리는 황금 열쇠 대신, 지하 장난감 방에서 춤추는 태엽 쥐 인형들과 신나게 소꿉놀이를 하며 시간 가는 줄 몰랐어요.\n비록 열쇠는 찾지 못했지만, 잊지 못할 세상에서 가장 신나고 유쾌한 비밀 장난감 친구들을 얻었답니다!\n\n[장난감 친구 엔딩] 귀여운 태엽 쥐들과 언제든 비밀 소꿉장난을 즐길 수 있게 되었습니다!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  ending_ghost: {
    text: "아리는 밤마다 도서관 무도회장에서 수많은 유령 친구들과 모여 알록달록 무지개 젤리를 먹고 동화책을 함께 읽게 되었어요.\n무서운 줄만 알았던 유령들은 세상에서 가장 따뜻하고 착한 독서 친구들이었지요!\n\n[왁자지껄 유령 파티 엔딩] 밤마다 도서관에서 신나는 동화책 모닥불 파티가 열리게 되었습니다!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  }
};

// 2. 영어 스토리 노드 데이터 (45개 대용량 탐험 노드 트리 English Edition)
const storyDataEn = {
  start: {
    text: "On a moonlit night, 8-year-old little detective Ari adjusted her pink detective hat and gripped her flashlight and magnifying glass tightly.\nIn front of her stood the old secret library holding deep mysteries for centuries.\n\"Rumors say a golden magical key that casts magical spells every night is hidden deep inside!\"\nAri's heart fluttered with excitement. Three secret entrances lead into the library.",
    image: "assets/images/scene_start.png",
    progress: 5,
    choices: [
      { text: "🚪 Gently push open the heavy creaky old wooden library door.", nextNode: "library_door" },
      { text: "🪟 Crawl into the small dusty basement window hidden behind ivy vines.", nextNode: "basement_window" },
      { text: "🌿 Climb the ivy ladder onto the 2nd floor rooftop terrace garden.", nextNode: "rooftop_garden" }
    ]
  },
  library_door: {
    text: "As Ari gently pushed the door, a friendly creak echoed, and the cozy smell of old paper wrapped around her.\nThe ceiling was towering high, with thousands of books neatly stacked on endless shelves.\nSuddenly, a golden light streamed out from between the tall bookshelves!\nAt the same time, strange sounds echoed near the clock tower hall and ancient archive.",
    image: "assets/images/scene_bookshelf.png",
    progress: 12,
    choices: [
      { text: "✨ Walk toward the glowing golden light between the secret bookshelves.", nextNode: "glowing_bookshelf" },
      { text: "🕰️ Head into the grand clock tower hall where ticking sounds resonate.", nextNode: "clock_tower_hall" },
      { text: "📜 Step into the candlelight of the ancient archive entrance.", nextNode: "ancient_archive" }
    ]
  },
  basement_window: {
    text: "Ari carefully climbed through the window frame and landed softly in the basement storage room!\nOld treasure chests, cobwebs, and large wooden barrels filled the cozy space.\nIn the middle, a shiny blue gem chest was sparkling with magical blue light.\nAn ancient map hung on the wall, and a deep underground cave passage opened in the floor.",
    image: "assets/images/scene_basement.png",
    progress: 12,
    choices: [
      { text: "💎 Inspect and open the sparkling blue gem chest.", nextNode: "blue_box" },
      { text: "🗺️ Examine the secret parchment map hanging on the wall.", nextNode: "library_map" },
      { text: "🦇 Descend into the deep underground secret cave.", nextNode: "underground_cave" }
    ]
  },
  rooftop_garden: {
    text: "Standing in the moonlit 2nd floor terrace garden, night-blooming glowing flowers emitted a dreamlike scent.\nThrough the glass windows, Ari could see the starry observatory deck and the 2nd floor library study.",
    image: "assets/images/scene_start.png",
    progress: 12,
    choices: [
      { text: "🔭 Move onto the mysterious observatory deck equipped with a telescope.", nextNode: "observatory_deck" },
      { text: "✨ Open the garden window and step into the glowing 2nd floor study.", nextNode: "glowing_bookshelf" }
    ]
  },
  clock_tower_hall: {
    text: "Inside the clock tower hall, giant gears were turning slowly with steady ticking sounds.\nIn the center lay a giant encyclopedia open to 'Forgotten Secret Tales of the Library'.\nOn the floor were glowing footprint dots and a door leading to the clockwork gear room.",
    image: "assets/images/scene_bookshelf.png",
    progress: 20,
    choices: [
      { text: "📖 Read the magical riddle page inside the open encyclopedia.", nextNode: "old_encyclopedia" },
      { text: "👣 Follow the sparkling footprint dots toward the main counter.", nextNode: "counter_footsteps" },
      { text: "⚙️ Look inside the clockwork gear machine chamber.", nextNode: "clockwork_gear_room" }
    ]
  },
  glowing_bookshelf: {
    text: "Peeking through the books, Ari's eyes widened in amazement!\nA cute chubby white baby ghost named Pong was floating in the air, happily reading a storybook.\nBeside the shelf sat a magical music box playing a dreamlike melody.",
    image: "assets/images/scene_pong.png",
    progress: 20,
    choices: [
      { text: "👻 Greet Pong shyly with a warm hello.", nextNode: "pong_first_meeting" },
      { text: "🔍 Scan the starlight dust clues around the shelf with a magnifying glass.", nextNode: "search_clues" },
      { text: "🎶 Open the lid of the magical music box playing sweet melodies.", nextNode: "music_box_room" }
    ]
  },
  blue_box: {
    text: "Opening the blue chest, cute mechanical clockwork toy mice popped out with cheerful winding sounds!\nSeeing a secret code note under their winding gears, Ari gained a new clue.",
    image: "assets/images/scene_ending_toy.png",
    progress: 20,
    choices: [
      { text: "🐭 Follow the toy mice into the secret toy playroom.", nextNode: "toy_mice_room" },
      { text: "📖 Carry the secret code note up to the 2nd floor glowing bookshelf.", nextNode: "glowing_bookshelf" }
    ]
  },
  library_map: {
    text: "Shining her magnifying glass on the parchment map, secret magic ink revealed three major hidden paths!\nThe coordinates for the underground cave, desk maze, and counter footsteps became clear.",
    image: "assets/images/scene_basement.png",
    progress: 20,
    choices: [
      { text: "🗺️ Dive into the secret desk maze path marked on the map.", nextNode: "secret_passage" },
      { text: "👣 Head toward the glowing footprints under the counter.", nextNode: "counter_footsteps" }
    ]
  },
  observatory_deck: {
    text: "Stepping onto the starry observatory deck, Ari looked through the giant telescope!\nThe Big Dipper was shooting light arrows down toward the secret library below.\nA constellation magic puzzle board lay on the deck floor.",
    image: "assets/images/scene_start.png",
    progress: 28,
    choices: [
      { text: "🌌 Solve the constellation magic puzzle with her magnifying glass.", nextNode: "star_constellation_puzzle" },
      { text: "✨ Follow the light arrows down to Pong's bookshelf.", nextNode: "pong_first_meeting" }
    ]
  },
  underground_cave: {
    text: "Descending into the cool underground cave, a bubbling riddle fountain appeared!\nGlowing riddle sentences were floating gently on the water waves.",
    image: "assets/images/scene_basement.png",
    progress: 28,
    choices: [
      { text: "⛲ Solve the fountain riddle to connect the magic rainbow bridge.", nextNode: "riddle_fountain" },
      { text: "🐭 Follow winding clockwork sounds into the toy room.", nextNode: "toy_mice_room" }
    ]
  },
  ancient_archive: {
    text: "The ancient archive was filled with hundreds of years old parchment scrolls.\nKind old bookworm ghost 'Grandpa Jiki' wearing glasses welcomed Ari warmly!\n\"Aha! Detective Ari! I shall share the key clue to the golden lock.\"",
    image: "assets/images/scene_bookshelf.png",
    progress: 28,
    choices: [
      { text: "👴 Listen to Grandpa Jiki's secret hint for the golden lock.", nextNode: "bookworm_jiki" },
      { text: "📖 Inspect the encyclopedia magic page in the center.", nextNode: "old_encyclopedia" }
    ]
  },
  music_box_room: {
    text: "Opening the music box, dancing shadow dolls performed a magical puppet show on the wall!\nThe shadow dolls pointed toward a sweet-smelling Ghost Bakery.",
    image: "assets/images/scene_pong.png",
    progress: 28,
    choices: [
      { text: "🎭 Follow the shadow puppet signal to the Ghost Bakery.", nextNode: "shadow_game" },
      { text: "👻 Talk warmly with Pong who floated over attracted by the music.", nextNode: "pong_first_meeting" }
    ]
  },
  old_encyclopedia: {
    text: "A glowing riddle appeared on the magic page:\n'Only those who love stars and fairytales can open the magic chest.'\nAri instantly sensed the answer.",
    image: "assets/images/scene_bookshelf.png",
    progress: 36,
    choices: [
      { text: "🧠 Step into the Magic Quiz Room to solve the riddle.", nextNode: "magic_riddle_quiz" }
    ]
  },
  counter_footsteps: {
    text: "Following the footprints, gentle echo sounds whispered from under the counter!\nThe footprints led through the Echo Hall toward the ghost ballroom.",
    image: "assets/images/scene_bookshelf.png",
    progress: 36,
    choices: [
      { text: "👣 Track the starlight footprint trail to the end.", nextNode: "footstep_trail" },
      { text: "🗣️ Courageously shout, \"Is anyone there? Ari is here to help!\"", nextNode: "call_out" }
    ]
  },
  clockwork_gear_room: {
    text: "Inside the gear chamber, magic gears played like an orchestra!\nBehind the gear door lay the toy mice dance floor and mirror puzzle chamber.",
    image: "assets/images/scene_ending_toy.png",
    progress: 36,
    choices: [
      { text: "🎉 Enter the toy mice dance party filled with cheerful music.", nextNode: "toy_mouse_dance_party" },
      { text: "🪞 Enter the secret temple fitted with light reflecting mirrors.", nextNode: "mirror_puzzle_chamber" }
    ]
  },
  pong_first_meeting: {
    text: "Pong smiled sweetly at Ari's warm greeting!\n\"Hi Detective Ari! Hold my hand, and we can cross the cobweb rainbow bridge to the chest!\"",
    image: "assets/images/scene_pong.png",
    progress: 45,
    choices: [
      { text: "🤝 Become best friends with Pong and head to the treasure chest.", nextNode: "friend_ghost" },
      { text: "🕸️ Cross the cobweb rainbow bridge guided by Pong.", nextNode: "spider_web_bridge" }
    ]
  },
  search_clues: {
    text: "Scanning the shelves with her magnifying glass, starlight dust clues left by Pong stretched far!\nAri's brilliant deduction began solving the clues one by one.",
    image: "assets/images/scene_ending_detective.png",
    progress: 45,
    choices: [
      { text: "🌟 Track the starlight dust path to locate the golden key.", nextNode: "starlight_dust_path" },
      { text: "🔍 Reveal the hidden magic switch using magnifying search techniques.", nextNode: "magnifier_deep_search" }
    ]
  },
  toy_mice_room: {
    text: "Arriving at the secret toy room, cute mechanical mice offered snacks and invited Ari to dance!",
    image: "assets/images/scene_ending_toy.png",
    progress: 45,
    choices: [
      { text: "🐭 Dance happily with the toy mice to reach the Toy Ending.", nextNode: "toy_mouse_dance_party" }
    ]
  },
  secret_passage: {
    text: "Passing through the desk maze, a magical playroom with floating trampolines appeared!\nA glowing chest and light reflecting mirrors lay in the center.",
    image: "assets/images/scene_basement.png",
    progress: 45,
    choices: [
      { text: "🎁 Go to the secret chest and open it with Pong.", nextNode: "secret_room" },
      { text: "🪞 Align the mirror puzzle to enter the Master Detective Room.", nextNode: "mirror_puzzle_chamber" }
    ]
  },
  star_constellation_puzzle: {
    text: "As Ari aligned the Big Dipper constellation with her magnifying glass light, starlight dust showered down, revealing the golden key coordinates!",
    image: "assets/images/scene_start.png",
    progress: 55,
    choices: [
      { text: "🌟 Follow the starlight path to earn the Master Detective Badge.", nextNode: "starlight_dust_path" }
    ]
  },
  riddle_fountain: {
    text: "Solving the fountain riddle transformed the water stream into a rainbow bridge connected to Pong's chest room!",
    image: "assets/images/scene_basement.png",
    progress: 55,
    choices: [
      { text: "🌈 Cross the rainbow bridge toward the treasure chest.", nextNode: "rainbow_bridge" }
    ]
  },
  bookworm_jiki: {
    text: "Grandpa Jiki handed over an ancient parchment scroll.\n\"Enter this code, and the golden lock will click open!\"",
    image: "assets/images/scene_bookshelf.png",
    progress: 55,
    choices: [
      { text: "🔑 Take Grandpa Jiki's code scroll to the lock chamber.", nextNode: "golden_lock_chamber" }
    ]
  },
  shadow_game: {
    text: "Passing the shadow play into the Ghost Bakery, warm smells of freshly baked rainbow bread filled the library!",
    image: "assets/images/scene_pong.png",
    progress: 55,
    choices: [
      { text: "🧁 Share bread at the bakery and head to the ghost ballroom.", nextNode: "ghost_bakery" }
    ]
  },
  magic_riddle_quiz: {
    text: "The Magic Quiz door clicked open, revealing a radiant golden chest!",
    image: "assets/images/scene_ending_happy.png",
    progress: 65,
    choices: [
      { text: "🔑 Open the rainbow treasure chest with the golden key.", nextNode: "rainbow_chest" }
    ]
  },
  footstep_trail: {
    text: "Following the footprint trail, the Echo Hall appeared, leading to a grand party hosted by baby ghosts!",
    image: "assets/images/scene_bookshelf.png",
    progress: 65,
    choices: [
      { text: "🎶 Pass through the Echo Hall into the ghost ballroom.", nextNode: "echo_hall" }
    ]
  },
  toy_mouse_dance_party: {
    text: "Ari danced happily with the toy mice, enjoying the most delightful night ever!\n[Toy Friends Ending] Ari made secret toy friends forever in the basement!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  spider_web_bridge: {
    text: "Crossing the rainbow cobweb bridge, a dazzling treasure chest awaited Ari!",
    image: "assets/images/scene_ending_happy.png",
    progress: 75,
    choices: [
      { text: "💫 Push open the treasure chest together with Pong.", nextNode: "rainbow_chest" }
    ]
  },
  starlight_dust_path: {
    text: "At the end of the starlight dust path, Ari discovered the Master Detective Badge and Golden Key!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🏆 Enter the Hall of Fame for the Legendary Detective Ending.", nextNode: "master_badge_ceremony" }
    ]
  },
  magnifier_deep_search: {
    text: "Thanks to Ari's precise magnifying search, every hidden magic mechanism unlocked!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🌟 Move to the Master Badge Award Ceremony.", nextNode: "master_badge_ceremony" }
    ]
  },
  secret_room: {
    text: "Standing before the golden lock in the secret room, Ari and Pong turned the key together.",
    image: "assets/images/scene_ending_happy.png",
    progress: 85,
    choices: [
      { text: "🔑 Unlock the golden lock completely.", nextNode: "golden_lock_chamber" }
    ]
  },
  mirror_puzzle_chamber: {
    text: "Reflecting light through the mirror puzzle opened the Master Detective Ceremony!",
    image: "assets/images/scene_ending_detective.png",
    progress: 85,
    choices: [
      { text: "🏆 Wear the Legendary Detective Badge for the ending.", nextNode: "master_badge_ceremony" }
    ]
  },
  rainbow_bridge: {
    text: "Crossing the rainbow bridge, Ari arrived safely before the rainbow treasure chest!",
    image: "assets/images/scene_ending_happy.png",
    progress: 85,
    choices: [
      { text: "🌈 Open the chest and become the Library Guardian.", nextNode: "rainbow_chest" }
    ]
  },
  golden_lock_chamber: {
    text: "Turning the lock according to Grandpa Jiki's scroll unlocked all magical books!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 Unseal the magical treasure chest.", nextNode: "secret_chest_unsealing" }
    ]
  },
  ghost_bakery: {
    text: "After eating warm rainbow bread at the bakery, Ari headed to the campfire story ground!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 85,
    choices: [
      { text: "🔥 Sit around the campfire with ghost friends to read storybooks.", nextNode: "ghost_story_campfire" }
    ]
  },
  echo_hall: {
    text: "Passing the Echo Hall, a jolly ghost campfire story party began!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 85,
    choices: [
      { text: "👻 Enter the Ghost Party Ending.", nextNode: "ghost_story_campfire" }
    ]
  },
  ghost_story_campfire: {
    text: "Every night, Ari joins ghost friends around the campfire to eat rainbow jellies and read storybooks!\n[Jolly Ghost Party Ending] Ari gained warm reading companions forever!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
    choices: []
  },
  rainbow_chest: {
    text: "The rainbow chest opened, unsealing all magical storybooks in the library!\n[Library Guardian Ending] Ari and Pong enjoy endless fairytale adventures together. Happy Ending!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  secret_chest_unsealing: {
    text: "Ari and Pong unsealed the chest, enjoying joyful bedtime stories with fairytale characters every night!\n[Library Guardian Ending] Happy Ending!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  master_badge_ceremony: {
    text: "Ari solved all library riddles with her magnifying glass and deduction, wearing the 'Master Detective Badge' proudly!\n[Legendary Detective Ending] Long live Detective Ari!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_happy: {
    text: "Ari and Pong unlocked the library treasure chest with the golden key, freeing all magical storybooks!\nEvery night, storybook characters come alive and read wonderful tales to Ari and Pong.\n\n[Library Guardian Ending] Ari and Pong became lifelong friends, ready for endless magical adventures. Happy Ending!",
    image: "assets/images/scene_ending_happy.png",
    progress: 100,
    endingId: "ending-happy",
    choices: []
  },
  ending_detective: {
    text: "With her trusty magnifying glass and brilliant deduction, Ari solved every mystery in the secret library!\nThe Library King awarded Ari the 'Legendary Master Detective Badge'.\n\n[Legendary Detective Ending] Ari became celebrated as the greatest detective in town!",
    image: "assets/images/scene_ending_detective.png",
    progress: 100,
    endingId: "ending-detective",
    choices: []
  },
  ending_toy: {
    text: "Instead of searching for the key, Ari spent the night dancing and playing house with the mechanical toy mice in the basement.\nShe gained unforgettable, sweet secret toy friends forever!\n\n[Toy Friends Ending] Ari and the toy mice can play secret house anytime in the basement!",
    image: "assets/images/scene_ending_toy.png",
    progress: 100,
    endingId: "ending-toy",
    choices: []
  },
  ending_ghost: {
    text: "Every night, Ari joins the ghost ballroom party to eat rainbow jellies and read storybooks together.\nThe ghosts were the warmest and kindest reading friends in the world!\n\n[Jolly Ghost Party Ending] Cozy storybook campfire parties are held every night in the library!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 100,
    endingId: "ending-ghost",
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
    if (nodeId === "glowing_bookshelf" || nodeId === "friend_ghost" || nodeId === "search_clues" || nodeId === "observatory_deck") {
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

// 10. 현재 스토리 노드 TTS 낭독 시작 함수 (순수 본문만 낭독)
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
