/*
  모산 교육자료 모음 - 앱 목록
  ------------------------------------------------------------
  앱을 추가할 때는 아래 형식으로 한 덩어리 { ... } 를 복사해서 붙여 넣으세요.

  title    : 카드에 보이는 앱 이름
  desc     : 한두 줄 설명
  url      : 온라인 링크(https://...) 또는 apps 폴더의 html 파일(예: "apps/quiz.html")
             비워 두면("") '준비 중'으로 표시됩니다.
  category : 분류(필터 버튼으로 자동 생성) 예) 수업, 업무, 놀이, 평가
  tags     : 학년·교과 등 작은 꼬리표 (여러 개 가능)
  icon     : 아이콘 이미지 경로 (없으면 기본 아이콘 사용)
*/
window.APPS = [
  { title: "체크리스트", desc: "오늘 할 일을 학생들이 직접 확인하고 체크할 수 있어요.", url: "https://bada-gang.github.io/checklist/", category: "학급", tags: ["전학년", "할 일"], icon: "assets/icons/checklist.png" },
  { title: "시계 모형", desc: "2학년 '시각과 시간' 단원에서 쓰는 시계 모형이에요.", url: "https://bada-gang.github.io/clock/", category: "수업", tags: ["2학년", "수학"], icon: "assets/icons/clock.png" },
  { title: "자리 배치", desc: "학급 자리를 바꿀 때 사용하세요.", url: "https://bada-gang.github.io/seat/%EC%9E%90%EB%A6%AC%EB%B0%94%EA%BE%B8%EA%B8%B0.html", category: "학급", tags: ["교사용"], icon: "assets/icons/seat.png" },
  { title: "발표 로켓", desc: "번호를 뽑아 발표자를 정해요.", url: "https://bada-gang.github.io/randomnumber/", category: "학급", tags: ["번호 뽑기"], icon: "assets/icons/rocket.png" },
  { title: "생각 구름", desc: "워드클라우드를 학생들과 함께 만들어 보세요.", url: "https://wordcloud-bada.netlify.app/", category: "수업", tags: ["워드클라우드", "의견 모으기"], icon: "assets/icons/wordcloud.png" },
  { title: "구구 마을", desc: "구구단을 연습할 수 있는 힐링 게임이에요.", url: "https://googoodan3d.netlify.app/", category: "놀이", tags: ["2학년", "수학", "구구단"], icon: "assets/icons/googoodan.png" },
  { title: "대진표", desc: "대진표가 필요할 때 사용해 보세요.", url: "https://bada-gang.github.io/league/%EB%8C%80%EC%A7%84%ED%91%9C.html", category: "학급", tags: ["경기", "학급 행사"], icon: "assets/icons/league.png" },
];
