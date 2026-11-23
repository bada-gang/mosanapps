/*
  모산 교육자료 모음 - 사이트 설정과 앱 목록
  관리자 페이지(admin.html)에서 수정하면 이 파일이 자동으로 바뀝니다. 직접 고쳐도 됩니다.

  SITE.heroTitle : 상단 큰 제목. 줄바꿈은 \n, *별표* 안의 글자는 파란색 강조
  SITE.columns   : 한 줄에 놓을 카드 수 ("auto" 또는 2, 3, 4)
  APPS[].visible : false면 홈페이지에 표시하지 않음
  APPS[].url     : 비어 있으면 홈페이지에 표시하지 않음
*/
window.SITE = {
  "eyebrow": "2026 AI·디지털 활용 선도학교",
  "heroTitle": "작은 학교,\n*더 큰 세상*을 보다",
  "heroText": "모산초 선생님들이 AI로 직접 만든 수업·업무 도구를 한곳에 모았습니다.\n카드를 누르면 바로 실행됩니다.",
  "columns": "auto"
};

window.APPS = [
  { "title": "체크리스트", "desc": "오늘 할 일을 학생들이 직접 확인하고 체크할 수 있어요.", "url": "https://bada-gang.github.io/checklist/", "category": "학급", "tags": ["전학년", "할 일"], "icon": "assets/icons/checklist.png", "visible": true },
  { "title": "시계 모형", "desc": "2학년 '시각과 시간' 단원에서 쓰는 시계 모형이에요.", "url": "https://bada-gang.github.io/clock/", "category": "수업", "tags": ["2학년", "수학"], "icon": "assets/icons/clock.png", "visible": true },
  { "title": "자리 배치", "desc": "학급 자리를 바꿀 때 사용하세요.", "url": "https://bada-gang.github.io/seat/%EC%9E%90%EB%A6%AC%EB%B0%94%EA%BE%B8%EA%B8%B0.html", "category": "학급", "tags": ["교사용"], "icon": "assets/icons/seat.png", "visible": true },
  { "title": "발표 로켓", "desc": "번호를 뽑아 발표자를 정해요.", "url": "https://bada-gang.github.io/randomnumber/", "category": "학급", "tags": ["번호 뽑기"], "icon": "assets/icons/rocket.png", "visible": true },
  { "title": "생각 구름", "desc": "워드클라우드를 학생들과 함께 만들어 보세요.", "url": "https://wordcloud-bada.netlify.app/", "category": "수업", "tags": ["워드클라우드", "의견 모으기"], "icon": "assets/icons/wordcloud.png", "visible": true },
  { "title": "구구 마을", "desc": "구구단을 연습할 수 있는 힐링 게임이에요.", "url": "https://googoodan3d.netlify.app/", "category": "놀이", "tags": ["2학년", "수학", "구구단"], "icon": "assets/icons/googoodan.png", "visible": true },
  { "title": "대진표", "desc": "대진표가 필요할 때 사용해 보세요.", "url": "https://bada-gang.github.io/league/%EB%8C%80%EC%A7%84%ED%91%9C.html", "category": "학급", "tags": ["경기", "학급 행사"], "icon": "assets/icons/league.png", "visible": true }
];
