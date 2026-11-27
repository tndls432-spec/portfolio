/* =========================================================
   포트폴리오 콘텐츠 — 이 파일만 수정하면 사이트 내용이 바뀝니다.
   공개 사이트입니다. 회고·실패 경험·자소서 초안은 비공개 저장소 portfolio-notes 에 적으세요.
   ---------------------------------------------------------
   items[].type
     - "profile"  : 프로필 창
     - "folder"   : 같은 category 를 가진 항목들을 모아 보여주는 폴더
     - "list"     : 연도별 타임라인
     - "detail"   : 상세 페이지. sections: [{ h: "제목", body: "내용" }] 로 단락 추가
     - "slides"   : 발표자료 뷰어 (slides 배열에 이미지 경로, 또는 pdf 경로)
     - "contact"  : 연락처
   x, y : 화면 위치 (%) — 아이콘은 드래그로도 옮길 수 있습니다.
   cover: 썸네일. { src: "assets/xxx.jpg" } 를 넣으면 실제 이미지가 사용됩니다.
          kind: orb | spiral | type | stripes | grid | blob | folder | slides | wave
   ========================================================= */
window.PORTFOLIO = {
  owner: {
    name: "허수인",
    role: "수학 × 경제 · Risk Management / Actuary 지망",
    email: "hello@example.com", // 공개용 이메일로 교체
    instagram: "https://instagram.com/", // BLASH MAGAZINE 또는 본인 계정으로 교체
  },

  hero: {
    image: "assets/hero.svg", // 본인 사진으로 교체: "assets/hero.jpg"
    blur: 16,
  },

  items: [
    /* ================= 나 ================= */
    {
      id: "about", label: "ABOUT ME", type: "profile", x: 22, y: 12,
      cover: { kind: "type", text: "허", colors: ["#111", "#f4f1ea"] },
      bio: "숫자로 위험을 읽고, 근거로 설명하는 사람이 되고 싶습니다. 수학과에서 해석학·미분방정식을, 경제학 복수전공에서 경제학원론을 공부하며 두 분야가 모두 잘 맞는다는 것을 확인했고, 리스크 관리·계리 직무를 목표로 준비하고 있습니다.",
      facts: [
        ["학교", "전남대학교 수학과 2학년 2학기"],
        ["복수전공", "경제학과 · 교직이수"],
        ["학점", "4.29 / 4.5 (2-1 학과 1등)"],
        ["동아리", "BLASH (기업·산업 분석) · 홍보부 기자"],
        ["과외", "5년차 · 현재 중3, 고2 담당"],
        ["목표 직무", "리스크 관리 · 계리"],
      ],
      skills: ["해석학", "미분방정식", "경제학원론", "기업분석", "카드뉴스 제작", "발표"],
    },
    {
      id: "journey", label: "PATH", type: "detail", x: 33, y: 23,
      cover: { kind: "wave", colors: ["#0a0a0a", "#d9d9d9"] },
      meta: "전자공학 → 직접 해본 일들 → 수학·경제",
      description: "전남대 전자공학과에서 2년을 공부한 뒤, SNS 운영과 온라인 판매를 직접 해보며 내가 오래 잘할 수 있는 일이 무엇인지 찾았습니다. 그 답은 근거를 세우고 분석하는 일이었고, 수학과에 진학해 경제학을 복수전공하며 학과 1등이라는 결과로 확인했습니다.",
    },
    {
      id: "academics", label: "학업 4.29", type: "detail", x: 29, y: 40,
      cover: { kind: "type", text: "4.29", colors: ["#1638d8", "#ffffff"] },
      meta: "전남대 수학과 · 경제학 복수전공 · 교직이수",
      description: "학점 4.29, 2-1 학기 학과 1등.",
      tags: ["해석학", "미분방정식", "경제학원론 1·2"],
    },

    /* ================= BLASH 동아리 ================= */
    {
      id: "blash", label: "BLASH", type: "folder", category: "blash", x: 46, y: 20,
      cover: { kind: "spiral", colors: ["#111", "#fff"] },
    },
    {
      id: "hd-contest", label: "HD현대삼호 경진대회", category: "blash", type: "detail", x: 60, y: 14,
      cover: { kind: "orb", colors: ["#f6f6f6", "#1638d8"] },
      meta: "2026 · 기업분석 경진대회 · 예선 통과 (17팀 중 10팀)",
      description: "HD현대삼호 기업분석 경진대회. 3주간 준비해 17팀 중 10팀이 오르는 예선을 통과했고, 최종 발표를 앞두고 있습니다.",
      tags: ["기업분석", "조선업", "발표", "팀 프로젝트"],
    },
    {
      id: "p-defense", label: "방위산업 분석", category: "blash", type: "detail", x: 17, y: 30,
      cover: { kind: "blob", colors: ["#2f6b3a", "#111"] },
      meta: "2026 · BLASH 산업분석 프로젝트",
      description: "BLASH 산업분석 프로젝트로 방위산업을 분석했습니다.",
      tags: ["산업분석", "방위산업"],
    },
    {
      id: "p-lilly", label: "일라이릴리 분석", category: "blash", type: "detail", x: 58, y: 34,
      cover: { kind: "grid", colors: ["#121212", "#ff4f6d"] },
      meta: "2026 · BLASH 기업분석 프로젝트",
      description: "BLASH 기업분석 프로젝트로 일라이릴리를 분석했습니다.",
      tags: ["기업분석", "헬스케어", "해외기업"],
    },

    /* ================= BLASH MAGAZINE ================= */
    {
      id: "magazine", label: "BLASH MAGAZINE", type: "folder", category: "mag", x: 46, y: 41,
      cover: { kind: "slides", colors: ["#ff4f8b", "#fff"] },
    },
    {
      id: "mag-kospi", label: "코스피 고점 대비", category: "mag", type: "detail", x: 22, y: 48,
      cover: { kind: "type", text: "↘", colors: ["#f9e5ee", "#d6156c"] },
      meta: "카드뉴스 · 허수인 기자",
      description: "코스피가 고점 대비 얼마나 빠졌는지 정리한 카드뉴스.",
      tags: ["시장분석", "카드뉴스"],
      // images: ["assets/mag/kospi-1.jpg", "assets/mag/kospi-2.jpg"],
    },
    {
      id: "mag-crash", label: "폭락의 역사", category: "mag", type: "detail", x: 38, y: 58,
      cover: { kind: "orb", colors: ["#1a1a1a", "#ff3d3d"] },
      meta: "카드뉴스 · 허수인 기자",
      description: "역사 속 주식시장 폭락 사례를 정리한 카드뉴스.",
      tags: ["리스크", "금융사", "카드뉴스"],
    },

    /* ================= 과외 ================= */
    {
      id: "tutoring", label: "과외 5년", type: "detail", x: 76, y: 42,
      cover: { kind: "type", text: "∫", colors: ["#1f2fb8", "#dfe6ff"] },
      meta: "수학 과외 · 5년차 · 현재 중3 1명, 고2 1명",
      description: "5년 동안 이어온 수학 과외. 학생의 수준에 맞춰 개념을 설명하고 꾸준히 관리해 왔습니다.",
      tags: ["수학", "중등", "고등"],
    },
    {
      id: "reviews", label: "과외 후기", type: "list", x: 81, y: 22,
      cover: { kind: "type", text: "★", colors: ["#f8c400", "#111"] },
      entries: [
        { year: "김과외", title: "학부모·학생 후기 4건", note: "김과외 앱 리뷰" },
      ],
    },

    /* ================= 성과 ================= */
    {
      id: "awards", label: "수상·성과", type: "list", x: 72, y: 12,
      cover: { kind: "type", text: "1st", colors: ["#111", "#ffcf3a"] },
      entries: [
        { year: "2026", title: "HD현대삼호 기업분석 경진대회", note: "예선 통과 (17팀 중 10팀) · 최종 발표 예정" },
        { year: "2026", title: "전남대 수학과 2-1 학과 1등", note: "학점 4.29" },
      ],
    },

    /* ================= 진로 ================= */
    {
      id: "career", label: "RISK · ACTUARY", type: "detail", x: 67, y: 56,
      cover: { kind: "stripes", colors: ["#111", "#9bd7ff"] },
      meta: "목표 직무 · 리스크 관리 / 계리",
      description: "수학(해석학·미분방정식)과 경제가 모두 잘 맞고, 근거와 데이터로 전문성 있게 설명하는 일에 강점이 있습니다. 숫자로 위험을 읽고 설명하는 리스크 관리·계리 직무를 목표로 준비하고 있습니다.",
    },

    /* ================= 발표자료 ================= */
    {
      id: "ppt", label: "발표자료", type: "folder", category: "ppt", x: 47, y: 76,
      cover: { kind: "slides", colors: ["#1c1c1c", "#ff7a1a"] },
    },
    {
      id: "ppt-hd", label: "HD현대삼호 발표", category: "ppt", type: "slides", x: 62, y: 76,
      cover: { kind: "slides", colors: ["#f2f2f2", "#1638d8"] },
      meta: "경진대회 최종 발표",
      // pdf: "assets/hd-samho.pdf",
    },
    {
      id: "ppt-lilly", label: "일라이릴리 발표", category: "ppt", type: "slides", x: 30, y: 70,
      cover: { kind: "slides", colors: ["#2b1d14", "#ff4f6d"] },
      meta: "BLASH 기업분석",
    },
    {
      id: "ppt-defense", label: "방위산업 발표", category: "ppt", type: "slides", x: 89, y: 46,
      cover: { kind: "slides", colors: ["#2f6b3a", "#e9f1e5"] },
      meta: "BLASH 산업분석",
    },

    /* ================= 연락처 ================= */
    {
      id: "contact", label: "CONTACT", type: "contact", x: 86, y: 66,
      cover: { kind: "orb", colors: ["#1a1a1a", "#ff5a1f"] },
    },
  ],

  /* 하단 Dock — open: 항목 id / href: 외부 링크 / action: "closeAll" */
  dock: [
    { label: "About", open: "about", icon: "user", colors: ["#2b2b8f", "#6b6bff"] },
    { label: "BLASH", open: "blash", icon: "grid", colors: ["#0f3a5c", "#2e9bf0"] },
    { label: "경진대회", open: "hd-contest", icon: "flag", colors: ["#5b1010", "#ff5a3c"] },
    { label: "수상·성과", open: "awards", icon: "star", colors: ["#f8c400", "#ffe680"] },
    "sep",
    { label: "발표자료", open: "ppt", icon: "slides", colors: ["#f5f5f5", "#ffffff"] },
    { label: "Path", open: "journey", icon: "doc", colors: ["#fff", "#f1f1f1"] },
    "sep",
    { label: "Instagram", href: "owner.instagram", icon: "camera", colors: ["#f9a13a", "#c2338e"] },
    { label: "Mail", open: "contact", icon: "mail", colors: ["#1e90ff", "#5ac8fa"] },
    "sep",
    { label: "모두 닫기", action: "closeAll", icon: "trash", colors: ["#e8e8ea", "#c9c9cc"] },
  ],
};
