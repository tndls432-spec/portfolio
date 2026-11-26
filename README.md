# Desktop-style Portfolio

macOS 데스크톱처럼 아이콘을 클릭하면 창이 열리는 포트폴리오 사이트입니다. 빌드 과정 없는 정적 사이트(HTML/CSS/JS)라 Vercel에 그대로 배포됩니다.

## 내용 수정
- **`data.js`** 만 수정하면 됩니다.
  - `owner` : 이름, 직함, 이메일, 인스타그램
  - `hero.image` : 배경 인물 사진 (`assets/hero.jpg` 등으로 교체)
  - `items` : 바탕화면 아이콘 (프로필 / 폴더 / 수상이력 / 공모전 / PPT / 연락처)
  - `dock` : 하단 독 버튼
- 썸네일에 실제 이미지를 쓰려면 `cover: { src: "assets/파일.jpg" }`
- PPT는 `slides: ["assets/ppt1/01.jpg", ...]` 또는 `pdf: "assets/deck.pdf"`

## 기능
- 아이콘 클릭 → 창 열기, 드래그로 위치 이동 (브라우저에 저장)
- 창 드래그 / 더블클릭 최대화 / ESC 닫기 / 폴더 안에서 뒤로가기
- `#/항목id` 링크로 특정 창 바로 열기 (예: `/#/awards`)
- 모바일에서는 아이콘이 그리드로 정렬되고 창은 전체화면
