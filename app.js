// ==========================================
// 꼬마 탐정 아리와 비밀 도서관의 꼬마 유령
// 게임 엔진 및 한국어/영어 대용량 스토리 데이터 소스 코드 (4배 대폭 확장판)
// ==========================================

// 1. 한국어 스토리 노드 데이터 (20여 개 풍성한 챕터 분기)
const storyDataKo = {
  start: {
    text: "구름 사이로 밝은 달빛이 내리쬐는 밤, 8살 꼬마 탐정 아리는 분홍색 탐정 모자를 눌러쓰고 손전등과 커다란 돋보기를 꼭 쥐었어요.\n아리 앞에는 오랜 세월 비밀을 간직해 온 마을의 비밀 도서관이 고요하게 서 있었답니다.\n\"소문에 의하면 이 도서관 깊은 곳에 밤마다 신비로운 마법을 부리는 황금 열쇠가 숨겨져 있다고 했어!\"\n아리의 가슴은 두근두근 기대감으로 부풀어 올랐어요. 과연 아리는 도서관 안으로 어떻게 들어가는 것이 좋을까요?",
    image: "assets/images/scene_start.png",
    progress: 10,
    choices: [
      { text: "🚪 삐걱거리는 오래된 도서관의 육중한 나무 문을 조심조심 열어본다.", nextNode: "library_door" },
      { text: "🪟 덩굴풀에 가려진 작고 먼지 쌓인 지하 창고 창문으로 들어간다.", nextNode: "basement_window" }
    ]
  },
  library_door: {
    text: "아리가 살그머니 나무 문을 밀자, \"삐이이익-\" 하는 정겨운 삐걱거림과 함께 묵직한 책 냄새가 코끝을 감쌌어요.\n도서관 내부 천장은 까마득히 높았고, 사방에 수천 권의 책들이 소복이 쌓여 있었지요.\n그때, 높다란 책장 서가 사이에서 신비로운 금빛 노란 불빛이 스르륵 새어 나오기 시작했어요!\n동시에 도서관 시계탑 쪽과 카운터 아래에서도 작고 신기한 소리가 들려왔답니다.",
    image: "assets/images/scene_bookshelf.png",
    progress: 25,
    choices: [
      { text: "✨ 노란빛이 새어 나오는 비밀 책장 틈새를 향해 걸어간다.", nextNode: "glowing_bookshelf" },
      { text: "🕰️ 째깍째깍 소리가 들려오는 웅장한 시계탑 홀 안쪽으로 가본다.", nextNode: "clock_tower_hall" }
    ]
  },
  basement_window: {
    text: "조심조심 지하 창문틀을 넘어서 지하 창고 안으로 가볍게 착지한 아리!\n사방에는 낡은 보물상자들과 거미줄, 그리고 커다란 나무 통들이 소복이 놓여 있었어요.\n그중 창고 한가운데 놓인 알록달록한 파란 보석 상자에서 영롱한 파란빛이 반짝거리고 있었지요.\n벽면 한쪽에는 이 도서관의 전체 구조가 그려진 낡은 양피지 지도가 걸려 있었답니다.",
    image: "assets/images/scene_basement.png",
    progress: 25,
    choices: [
      { text: "💎 반짝이는 영롱한 파란 보석 상자를 들여다보고 열어본다.", nextNode: "blue_box" },
      { text: "🗺️ 벽에 걸려 있는 오래된 도서관의 비밀 양피지 지도를 조사한다.", nextNode: "library_map" }
    ]
  },
  clock_tower_hall: {
    text: "시계탑 홀 안으로 들어서자, 거대한 톱니바퀴들이 째깍째깍 소리를 내며 천천히 돌아가고 있었어요.\n홀 한가운데에는 '도서관의 잊혀진 비밀 이야기'라는 제목이 붙은 커다란 대백과사전 책이 펼쳐져 있었답니다.\n책 위에는 야광 물감처럼 반짝이는 미세한 발자국들이 찍혀 카운터 밑으로 이어져 있었어요!",
    image: "assets/images/scene_bookshelf.png",
    progress: 40,
    choices: [
      { text: "📖 펼쳐진 대백과사전 책의 마법 수수께끼 페이지를 읽어본다.", nextNode: "old_encyclopedia" },
      { text: "👣 바닥에 찍힌 반짝이는 야광 발자국을 따라 카운터로 향한다.", nextNode: "counter_footsteps" }
    ]
  },
  glowing_bookshelf: {
    text: "책장 틈새를 살짝 들여다본 아리는 깜짝 놀라 두 눈이 둥그래졌어요!\n책 위에서 동글동글하고 귀여운 흰색 꼬마 유령 '퐁이'가 둥둥 떠서 재미있게 동화책을 읽고 있었거든요.\n퐁이는 아리와 눈이 마주치자 깜짝 놀라며 수줍게 말했어요.\n\"안녕? 난 책을 아주아주 좋아하는 유령 퐁이야. 사실 이 비밀 도서관의 마법 보물상자를 열 황금 열쇠를 잃어버려서 슬퍼하고 있었어...\"",
    image: "assets/images/scene_pong.png",
    progress: 50,
    choices: [
      { text: "🤝 \"안녕 퐁이! 난 꼬마 탐정 아리야. 내가 같이 열쇠를 찾아줄게!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"걱정 마 퐁이! 우선 책장 주변에 떨어진 별가루 단서부터 돋보기로 조사해볼게!\"", nextNode: "search_clues" }
    ]
  },
  blue_box: {
    text: "아리가 파란 상자를 살그머니 열자, 상자 안에서 태엽 소리와 함께 귀여운 태엽 쥐 인형들이 튀어나왔어요!\n인형들은 신나게 뱅글뱅글 춤을 추며 아리를 환영해 주었지요.\n자세히 보니 태엽 쥐 인형의 등 태엽 밑에 '비밀 서가 2층의 암호'가 적힌 작은 쪽지가 감겨 있었답니다.",
    image: "assets/images/scene_ending_toy.png",
    progress: 50,
    choices: [
      { text: "📜 비밀 암호 쪽지를 들고 2층 빛나는 책장 서가로 향한다.", nextNode: "glowing_bookshelf" },
      { text: "🐭 \"너희들 정말 귀엽다!\" 태엽 쥐 인형들과 신나는 장난감 방으로 들어간다.", nextNode: "toy_mice_room" }
    ]
  },
  library_map: {
    text: "돋보기로 벽에 걸린 낡은 양피지 지도를 비춰보자, 지도의 비밀 먹물이 반응하며 숨겨진 글씨가 떠올랐어요!\n'책상들 아래의 미로를 지나면 유령들의 비밀 놀이방과 황금 열쇠 상자가 나타난다.'\n지도를 읽은 아리는 도서관 깊은 곳으로 갈 수 있는 확신이 생겼답니다.",
    image: "assets/images/scene_basement.png",
    progress: 50,
    choices: [
      { text: "🗺️ 지도에 표시된 비밀 미로 통로를 찾아 발걸음을 옮긴다.", nextNode: "secret_passage" },
      { text: "👣 지도를 가방에 챙기고, 카운터 아래의 빛나는 발자국으로 가본다.", nextNode: "counter_footsteps" }
    ]
  },
  old_encyclopedia: {
    text: "대백과사전의 마법 페이지에는 빛나는 글씨로 귀여운 수수께끼가 적혀 있었어요.\n'밤에만 문을 열고, 마음속에 꿈을 품은 자만이 마법의 황금 열쇠에 다가갈 수 있다.'\n페이지 밑에는 퐁이라는 귀여운 유령 그림이 그려져 있었답니다!",
    image: "assets/images/scene_bookshelf.png",
    progress: 60,
    choices: [
      { text: "🧠 마법 페이지에 적힌 수수께끼 퀴즈를 직접 풀기 위해 퀴즈 방으로 간다.", nextNode: "quiz_room" },
      { text: "✨ 그림에 인쇄된 퐁이를 찾아 노란 불빛이 나는 책장으로 이동한다.", nextNode: "glowing_bookshelf" }
    ]
  },
  counter_footsteps: {
    text: "카운터 밑을 돋보기로 비추자, 알록달록한 별가루 발자국이 콕콕 찍혀서 서가 뒤쪽으로 이어져 있었어요.\n아리가 발자국 가까이 다가가자, 카운터 밑에서 수줍은 목소리가 소근거렸어요.\n\"누구니? 나를 찾아온 아기 탐정님이니?\"",
    image: "assets/images/scene_bookshelf.png",
    progress: 60,
    choices: [
      { text: "👣 별가루 발자국을 따라 도서관 서가 뒤편의 비밀 무도회장으로 들어간다.", nextNode: "ghost_ballroom" },
      { text: "🗣️ \"용기 있게 응답해! 난 도와주러 온 아리야!\" 하고 인사한다.", nextNode: "call_out" }
    ]
  },
  toy_mice_room: {
    text: "태엽 쥐들이 아리를 안내한 곳은 지하 깊은 곳에 위치한 비밀 장난감 방이었어요!\n그곳엔 아기자기한 목마와 레고 블록, 태엽 장난감들이 마법으로 움직이며 놀고 있었지요.\n장난감 상자 깊은 곳에 황금빛 열쇠 모양의 열쇠 구멍이 숨겨져 있었답니다.",
    image: "assets/images/scene_ending_toy.png",
    progress: 75,
    choices: [
      { text: "🐭 태엽 쥐 친구들과 신나게 춤을 추고 소꿉놀이를 즐기며 엔딩을 맞이한다.", nextNode: "ending_toy" },
      { text: "🗝️ 장난감 방의 비밀 통로를 지나 퐁이의 비밀 놀이방으로 들어간다.", nextNode: "secret_passage" }
    ]
  },
  secret_passage: {
    text: "책상 아래의 거미줄 미로 통로를 조심조심 통과하자, 마법처럼 거대한 비밀 방이 펼쳐졌어요!\n공중에는 알록달록한 별들과 미니 트램펄린이 떠 있었고, 방 중앙엔 눈부시게 빛나는 보물 상자가 놓여 있었답니다.",
    image: "assets/images/scene_basement.png",
    progress: 75,
    choices: [
      { text: "🎁 보물 상자 옆에서 아리를 기다리던 퐁이와 반갑게 상자를 열어본다.", nextNode: "secret_room" },
      { text: "🪞 방 한편에 놓인 신비한 거울 퍼즐을 돋보기로 풀어낸다.", nextNode: "mirror_puzzle" }
    ]
  },
  friend_ghost: {
    text: "아리의 다정한 인사에 감동한 퐁이는 퐁퐁 뛰어오르며 기뻐했어요!\n\"아리야 고마워! 나와 함께라면 도서관 3층 비밀 서재에 있는 무지개 보물 상자로 갈 수 있어!\"\n퐁이는 아리의 손을 잡고 빛나는 비밀 서재 문 앞으로 아리를 안내해 주었답니다.",
    image: "assets/images/scene_ending_happy.png",
    progress: 80,
    choices: [
      { text: "💫 퐁이와 함께 힘을 모아 무지개 보물 상자를 열어본다!", nextNode: "rainbow_chest" },
      { text: "🧠 상자 입구에 걸린 마법 퀴즈 수수께끼를 아리의 지혜로 풀어낸다.", nextNode: "quiz_room" }
    ]
  },
  search_clues: {
    text: "아리는 돋보기를 들고 책장 바닥부터 위쪽까지 차근차근 단서를 수색했어요.\n책장 두 번째 칸의 오래된 동화책 표지에 퐁이가 남긴 반짝이는 별빛 가루 단서가 새겨져 있는 것을 발견했지요!\n돋보기로 단서를 연결하자 마법 지도가 완성되었어요.",
    image: "assets/images/scene_ending_detective.png",
    progress: 80,
    choices: [
      { text: "🌟 별빛 가루 단서를 조합하여 황금 열쇠의 완벽한 봉인을 해제한다.", nextNode: "starlight_dust" },
      { text: "🏆 뛰어난 명추리로 전설의 꼬마 탐정 뱃지를 획득하는 결말을 연다.", nextNode: "ending_detective" }
    ]
  },
  ghost_ballroom: {
    text: "발자국을 따라 들어간 곳은 밤마다 도서관 유령들이 모이는 신비로운 무도회장이었어요!\n수많은 귀여운 아기 유령들이 모여 무지개 젤리를 먹으며 동화책을 읽고 있었지요.\n유령들은 아리를 보자 손뼉을 치며 환영해 주었어요!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 80,
    choices: [
      { text: "👻 귀여운 유령 친구들과 밤새도록 맛있는 젤리를 먹으며 동화책 파티를 즐긴다.", nextNode: "ending_ghost" },
      { text: "🔑 유령 대표 퐁이가 건네주는 마법의 황금 열쇠를 받아 상자를 연다.", nextNode: "ending_happy" }
    ]
  },
  call_out: {
    text: "아리가 용기 내어 목소리를 내자, 카운터 아래에서 퐁이가 뽀르르 튀어나와 수줍게 고개를 숙였어요.\n\"안녕 아리 탐정님! 나를 해치지 않으러 왔구나. 사실 마법의 황금 열쇠는 혼자서는 열 수 없고 다정한 친구와 함께 열어야 해!\"",
    image: "assets/images/scene_pong.png",
    progress: 80,
    choices: [
      { text: "🤝 \"당연하지 퐁이야! 우리 같이 보물 상자를 열러 가자!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"좋았어! 우선 보물 상자가 있는 통로를 돋보기로 수색해볼게!\"", nextNode: "search_clues" }
    ]
  },
  secret_room: {
    text: "비밀 방 중앙의 보물 상자 앞에 선 아리와 퐁이!\n상자 위에는 황금 열쇠가 은은하게 빛나고 있었어요.\n아리와 퐁이가 손을 맞잡고 상자 열쇠구멍에 열쇠를 넣자 눈부신 빛이 퍼져 나왔답니다!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 황금 열쇠를 완전히 돌려 마법 책들을 봉인 해제하는 최고의 결말로 간다.", nextNode: "ending_happy" }
    ]
  },
  mirror_puzzle: {
    text: "아리는 돋보기와 손전등 불빛을 거울 퍼즐에 반사시켜 비밀 문을 정확히 비추었어요!\n딸깍하는 소리와 함께 거울 문이 열리며 전설의 탐정 뱃지와 황금 열쇠가 드러났지요.\n아리의 뛰어난 직관과 추리력이 빛을 발한 순간이었어요!",
    image: "assets/images/scene_ending_detective.png",
    progress: 90,
    choices: [
      { text: "🌟 전설의 탐정 뱃지를 가슴에 달고 모험을 성공적으로 완수한다.", nextNode: "ending_detective" }
    ]
  },
  starlight_dust: {
    text: "아리가 별빛 가루 단서들을 차례대로 연결하자, 공중에 무지개빛 마법 문이 열렸어요!\n문 안쪽에서 퐁이가 반갑게 손을 흔들며 마법 황금 열쇠를 아리에게 전달해 주었답니다.",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 퐁이와 함께 황금 열쇠로 도서관의 마법 보물상자를 해금한다.", nextNode: "ending_happy" }
    ]
  },
  quiz_room: {
    text: "퀴즈 방에 도착한 아리! 마법 벽면에 귀여운 문제가 빛나고 있었어요.\n'도서관에서 가장 책을 사랑하고 지혜로운 탐정의 이름은 누구일까요?'\n아리는 밝게 웃으며 손을 들었어요. \"그건 바로 책을 사랑하는 꼬마 탐정 아리야!\"\n그 순간 마법 문이 열리며 화려한 보상이 쏟아졌답니다!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 퀴즈 정답 보상으로 황금 열쇠를 높이 들고 도서관 수호자가 된다.", nextNode: "ending_happy" },
      { text: "👻 퐁이와 밤새 재미있는 수수께끼 퀴즈 놀이를 하며 유령 파티를 즐긴다.", nextNode: "ending_ghost" }
    ]
  },
  rainbow_chest: {
    text: "아리와 퐁이가 무지개 보물 상자 앞에 섰어요.\n둘이 힘을 모아 \"하나, 둘, 셋!\" 하고 상자 뚜껑을 열자, 눈부신 무지개 빛과 함께 마법 황금 열쇠가 솟아올랐어요!\n도서관의 모든 책들이 행복하게 반짝이기 시작했답니다.",
    image: "assets/images/scene_ending_happy.png",
    progress: 95,
    choices: [
      { text: "🌈 도서관 수호자 엔딩으로 진입하여 모험을 마친다.", nextNode: "ending_happy" }
    ]
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

// 2. 영어 스토리 노드 데이터 (4배 확장판 English Story Edition)
const storyDataEn = {
  start: {
    text: "On a moonlit night, 8-year-old little detective Ari adjusted her pink detective hat and gripped her flashlight and large magnifying glass tightly.\nIn front of her stood the old town secret library, holding deep mysteries for centuries.\n\"Rumors say a golden magical key that casts magical spells every night is hidden deep inside!\"\nAri's heart fluttered with excitement. How should Ari enter the mysterious library?",
    image: "assets/images/scene_start.png",
    progress: 10,
    choices: [
      { text: "🚪 Gently push open the heavy creaky old wooden library door.", nextNode: "library_door" },
      { text: "🪟 Crawl into the small dusty basement window hidden behind ivy vines.", nextNode: "basement_window" }
    ]
  },
  library_door: {
    text: "As Ari gently pushed the door, a friendly creak echoed, and the cozy smell of old paper wrapped around her.\nThe ceiling was towering high, with thousands of books neatly stacked on endless shelves.\nSuddenly, a mysterious golden light streamed out from between the tall bookshelves!\nAt the same time, curious sounds echoed near the clock tower hall and under the counter.",
    image: "assets/images/scene_bookshelf.png",
    progress: 25,
    choices: [
      { text: "✨ Walk toward the glowing golden light between the secret bookshelves.", nextNode: "glowing_bookshelf" },
      { text: "🕰️ Head into the grand clock tower hall where ticking sounds resonate.", nextNode: "clock_tower_hall" }
    ]
  },
  basement_window: {
    text: "Ari carefully climbed through the window frame and landed softly in the basement storage room!\nOld treasure chests, cobwebs, and large wooden barrels filled the cozy space.\nIn the middle, a shiny blue gem chest was sparkling with magical blue light.\nOn the wall hung an ancient parchment map showing the entire library structure.",
    image: "assets/images/scene_basement.png",
    progress: 25,
    choices: [
      { text: "💎 Inspect and open the sparkling blue gem chest.", nextNode: "blue_box" },
      { text: "🗺️ Examine the secret parchment map hanging on the basement wall.", nextNode: "library_map" }
    ]
  },
  clock_tower_hall: {
    text: "Inside the clock tower hall, giant gears were turning slowly with steady ticking sounds.\nIn the center lay a giant encyclopedia open to a page titled 'Forgotten Secret Tales of the Library'.\nOn the page were glowing footprint dots leading down toward the library counter!",
    image: "assets/images/scene_bookshelf.png",
    progress: 40,
    choices: [
      { text: "📖 Read the magical riddle page inside the open encyclopedia.", nextNode: "old_encyclopedia" },
      { text: "👣 Follow the sparkling footprint dots toward the main counter.", nextNode: "counter_footsteps" }
    ]
  },
  glowing_bookshelf: {
    text: "Peeking through the books, Ari's eyes widened in amazement!\nA cute chubby white baby ghost named Pong was floating in the air, happily reading a storybook.\nPong gasped softly and said, \"Hi! I'm Pong the book-loving ghost. I lost the golden key to the magic chest...\"",
    image: "assets/images/scene_pong.png",
    progress: 50,
    choices: [
      { text: "🤝 \"Hi Pong! I'm detective Ari. I'll help you find the key!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"Don't worry Pong! Let me inspect the starlight clues with my magnifying glass!\"", nextNode: "search_clues" }
    ]
  },
  blue_box: {
    text: "Opening the blue chest, cute mechanical clockwork toy mice popped out with cheerful winding sounds!\nThe mice danced in circles to welcome Ari warmly.\nAri noticed a tiny secret note tucked under the key winding gears of the lead mouse.",
    image: "assets/images/scene_ending_toy.png",
    progress: 50,
    choices: [
      { text: "📜 Take the secret code note to the 2nd floor glowing bookshelf.", nextNode: "glowing_bookshelf" },
      { text: "🐭 \"You guys are adorable!\" Enter the secret toy playroom with the mice.", nextNode: "toy_mice_room" }
    ]
  },
  library_map: {
    text: "Shining her magnifying glass on the parchment map, secret magic ink revealed hidden letters!\n'Pass through the maze under the desks to find the Secret Ghost Playroom and the Golden Key Chest.'\nAri felt confident about navigating deep into the library.",
    image: "assets/images/scene_basement.png",
    progress: 50,
    choices: [
      { text: "🗺️ Follow the secret maze path shown on the map.", nextNode: "secret_passage" },
      { text: "👣 Put the map in her bag and follow the footprints under the counter.", nextNode: "counter_footsteps" }
    ]
  },
  old_encyclopedia: {
    text: "The magic encyclopedia page displayed a glowing riddle:\n'Only those who enter by night and hold dreams in their hearts can approach the Golden Key.'\nA cute illustration of Pong the ghost was drawn at the bottom!",
    image: "assets/images/scene_bookshelf.png",
    progress: 60,
    choices: [
      { text: "🧠 Go to the Quiz Room to solve the magical riddle.", nextNode: "quiz_room" },
      { text: "✨ Head to the glowing bookshelf where Pong is waiting.", nextNode: "glowing_bookshelf" }
    ]
  },
  counter_footsteps: {
    text: "Shining her magnifying glass under the counter, Ari saw colorful starlight footprints leading behind the stacks.\nAs Ari stepped closer, a gentle voice whispered from below:\n\"Who is there? Are you the little detective come to help?\"",
    image: "assets/images/scene_bookshelf.png",
    progress: 60,
    choices: [
      { text: "👣 Follow the starlight footprints into the secret ghost ballroom.", nextNode: "ghost_ballroom" },
      { text: "🗣️ Courageously reply, \"I'm Ari! I'm here to help!\"", nextNode: "call_out" }
    ]
  },
  toy_mice_room: {
    text: "The toy mice led Ari to a secret playroom deep in the basement!\nToy horses, building blocks, and wind-up dolls were playing magically together.\nDeep inside a toy chest lay a keyhole glowing with golden light.",
    image: "assets/images/scene_ending_toy.png",
    progress: 75,
    choices: [
      { text: "🐭 Dance and play house with the toy mice to unlock the Toy Friends Ending.", nextNode: "ending_toy" },
      { text: "🗝️ Pass through the secret toy passage into Pong's playroom.", nextNode: "secret_passage" }
    ]
  },
  secret_passage: {
    text: "Carefully navigating the cobweb maze under the desks, a grand magical room unfolded!\nColorful stars and mini trampolines floated in the air, with a radiant chest glowing in the center.",
    image: "assets/images/scene_basement.png",
    progress: 75,
    choices: [
      { text: "🎁 Meet Pong near the chest and open the treasure box together.", nextNode: "secret_room" },
      { text: "🪞 Solve the mysterious mirror puzzle on the wall with the magnifying glass.", nextNode: "mirror_puzzle" }
    ]
  },
  friend_ghost: {
    text: "Touched by Ari's kindness, Pong floated happily!\n\"Thank you Ari! With you, we can reach the rainbow chest in the 3rd floor secret study!\"\nPong gently held Ari's hand and guided her to the glowing study door.",
    image: "assets/images/scene_ending_happy.png",
    progress: 80,
    choices: [
      { text: "💫 Combine forces with Pong to open the rainbow chest!", nextNode: "rainbow_chest" },
      { text: "🧠 Solve the magic quiz lock on the chest with Ari's wisdom.", nextNode: "quiz_room" }
    ]
  },
  search_clues: {
    text: "Ari searched every shelf carefully from top to bottom with her magnifying glass.\nOn a fairytale book cover on the second shelf, she found starlight dust left by Pong!\nConnecting the dust dots revealed a magical map.",
    image: "assets/images/scene_ending_detective.png",
    progress: 80,
    choices: [
      { text: "🌟 Combine starlight clues to unlock the golden key seal.", nextNode: "starlight_dust" },
      { text: "🏆 Complete the Legendary Detective Ending with brilliant deduction.", nextNode: "ending_detective" }
    ]
  },
  ghost_ballroom: {
    text: "The footprints led to a magnificent ballroom where ghost friends gather every night!\nDozens of baby ghosts were sitting together, eating rainbow jellies and reading storybooks.\nThey clapped happily to welcome Ari!",
    image: "assets/images/scene_ending_ghost.png",
    progress: 80,
    choices: [
      { text: "👻 Join the ghost friends for a night of jellies and storybook fun.", nextNode: "ending_ghost" },
      { text: "🔑 Receive the golden key from Pong to unlock the chest.", nextNode: "ending_happy" }
    ]
  },
  call_out: {
    text: "Hearing Ari's brave voice, Pong popped out shyly from under the counter.\n\"Hi Detective Ari! The golden key is in the magic chest, but we must open it together!\"",
    image: "assets/images/scene_pong.png",
    progress: 80,
    choices: [
      { text: "🤝 \"Of course Pong! Let's go open the chest together!\"", nextNode: "friend_ghost" },
      { text: "🔍 \"Great! Let me inspect the path with my magnifying glass first!\"", nextNode: "search_clues" }
    ]
  },
  secret_room: {
    text: "Ari and Pong stood in front of the center treasure chest!\nThe golden key shone softly on top. As Ari and Pong turned the key together, brilliant light showered the room!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 Turn the key completely to unlock all magical storybooks!", nextNode: "ending_happy" }
    ]
  },
  mirror_puzzle: {
    text: "Ari reflected her flashlight off the mirror puzzle using her magnifying glass!\nWith a click, the mirror door opened, revealing the Legendary Detective Badge and Golden Key.\nAri's deduction shone brilliantly!",
    image: "assets/images/scene_ending_detective.png",
    progress: 90,
    choices: [
      { text: "🌟 Wear the Legendary Detective Badge proudly to finish the quest.", nextNode: "ending_detective" }
    ]
  },
  starlight_dust: {
    text: "As Ari connected the starlight dust, a rainbow portal opened in the air!\nPong reached out from the portal and handed Ari the golden key with a happy smile.",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 Unlock the library treasure chest with Pong.", nextNode: "ending_happy" }
    ]
  },
  quiz_room: {
    text: "Arriving at the Quiz Room, glowing letters shone on the wall:\n'Who is the smartest book-loving detective in the library?'\nAri smiled brightly and raised her hand, \"That's me, Little Detective Ari!\"\nThe magic door opened with wonderful rewards!",
    image: "assets/images/scene_ending_happy.png",
    progress: 90,
    choices: [
      { text: "🔑 Claim the golden key reward and become the Library Guardian.", nextNode: "ending_happy" },
      { text: "👻 Stay up all night solving fun riddles with Pong.", nextNode: "ending_ghost" }
    ]
  },
  rainbow_chest: {
    text: "Ari and Pong stood before the rainbow chest.\nCounting \"One, two, three!\", they opened the lid together, and the golden key rose with dazzling rainbow light!\nAll books in the library started sparkling happily.",
    image: "assets/images/scene_ending_happy.png",
    progress: 95,
    choices: [
      { text: "🌈 Enter the Library Guardian Ending to finish the adventure.", nextNode: "ending_happy" }
    ]
  },
  ending_happy: {
    text: "Ari and Pong unlocked the library treasure chest with the golden key, freeing all magical storybooks!\nNow every night, storybook characters come alive and read wonderful tales to Ari and Pong.\n\n[Library Guardian Ending] Ari and Pong became lifelong friends, ready for endless magical adventures. Happy Ending!",
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
