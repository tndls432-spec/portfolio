/* =========================================================
   포트폴리오 콘텐츠 — 이 파일만 수정하면 사이트 내용이 바뀝니다.
   ---------------------------------------------------------
   items[].type
     - "profile"  : 프로필 창
     - "folder"   : 같은 category 를 가진 항목들을 모아 보여주는 폴더
     - "list"     : 연도별 타임라인 (수상이력, 공모전 등)
     - "detail"   : 프로젝트/공모전 상세 페이지
     - "slides"   : PPT 뷰어 (slides 배열에 이미지 경로, 또는 pdf 경로)
     - "contact"  : 연락처
   x, y : 화면 위치 (%) — 아이콘은 드래그로도 옮길 수 있습니다.
   cover: 썸네일. { src: "assets/xxx.jpg" } 를 넣으면 실제 이미지가 사용됩니다.
          src 가 없으면 kind/colors 로 그래픽 썸네일이 자동 생성됩니다.
          kind: orb | spiral | type | stripes | grid | blob | folder | slides | wave
   ========================================================= */
window.PORTFOLIO = {
  owner: {
    name: "YOUR NAME",
    role: "Visual Designer · Creative Developer",
    email: "hello@example.com",
    instagram: "https://instagram.com/",
  },

  hero: {
    image: "assets/hero.svg", // 본인 사진으로 교체: "assets/hero.jpg"
    blur: 16,                 // 배경 인물 블러 강도(px)
  },

  items: [
    /* ---------- PROFILE ---------- */
    {
      id: "about", label: "ABOUT ME", type: "profile", x: 22, y: 12,
      cover: { kind: "type", text: "ME", colors: ["#111", "#f4f1ea"] },
      bio: "안녕하세요. 브랜드 아이덴티티와 모션, 인터랙티브 웹을 만드는 디자이너입니다. 음악·패션·전시 분야의 비주얼 작업을 주로 해왔습니다.",
      facts: [
        ["Based in", "Seoul, KR"],
        ["Education", "OO대학교 시각디자인과 (2021 – 2025)"],
        ["Focus", "Brand Identity · Motion · Web"],
      ],
      skills: ["After Effects", "Photoshop", "Illustrator", "Figma", "Blender", "HTML/CSS/JS"],
    },
    {
      id: "resume", label: "RESUME", type: "detail", x: 29, y: 40, category: "profile",
      cover: { kind: "stripes", colors: ["#f2f2f2", "#1c1c1c"] },
      meta: "CV · 2026",
      description: "이력서 PDF를 assets 폴더에 넣고 아래 links 의 href 를 바꿔주세요.",
      links: [{ label: "이력서 PDF 보기", href: "assets/resume.pdf" }],
    },

    /* ---------- FOLDERS ---------- */
    {
      id: "projects", label: "PROJECTS", type: "folder", category: "project", x: 46, y: 20,
      cover: { kind: "spiral", colors: ["#111", "#fff"] },
    },
    {
      id: "contests", label: "공모전", type: "folder", category: "contest", x: 60, y: 14,
      cover: { kind: "orb", colors: ["#f6f6f6", "#1638d8"] },
    },
    {
      id: "awards", label: "수상이력", type: "list", x: 72, y: 12,
      cover: { kind: "type", text: "★", colors: ["#1f2fb8", "#dfe6ff"] },
      entries: [
        { year: "2026", title: "OO 디자인 어워드", note: "브랜딩 부문 금상" },
        { year: "2025", title: "OO 공모전", note: "대상 (1위 / 340팀)" },
        { year: "2025", title: "OO 영상 페스티벌", note: "모션그래픽 우수상" },
        { year: "2024", title: "교내 졸업전시", note: "최우수 작품 선정" },
      ],
    },
    {
      id: "slides", label: "PRESENTATIONS", type: "folder", category: "ppt", x: 46, y: 41,
      cover: { kind: "slides", colors: ["#ff4f8b", "#fff"] },
    },

    /* ---------- PROJECTS ---------- */
    {
      id: "p-identity", label: "BRAND IDENTITY", category: "project", type: "detail", x: 17, y: 30,
      cover: { kind: "blob", colors: ["#e8402f", "#111"] },
      meta: "2026 · Branding",
      description: "음악 레이블의 리브랜딩 프로젝트. 로고, 타이포그래피 시스템, 앨범 아트워크 가이드를 설계했습니다.",
      tags: ["Branding", "Typography"],
      links: [{ label: "Behance", href: "#" }],
    },
    {
      id: "p-stage", label: "STAGE VISUALS", category: "project", type: "detail", x: 33, y: 23,
      cover: { kind: "wave", colors: ["#0a0a0a", "#d9d9d9"] },
      meta: "2025 · Motion",
      description: "라이브 공연 LED 스크린용 모션 그래픽 12종. After Effects + TouchDesigner.",
      tags: ["Motion", "Live"],
    },
    {
      id: "p-poster", label: "POSTER SERIES", category: "project", type: "detail", x: 22, y: 48,
      cover: { kind: "type", text: "A", colors: ["#f9e5ee", "#d6156c"] },
      meta: "2025 · Print",
      description: "전시 홍보용 실험적 타이포그래피 포스터 시리즈 (6점).",
      tags: ["Print", "Typography"],
    },
    {
      id: "p-web", label: "INTERACTIVE WEB", category: "project", type: "detail", x: 58, y: 34,
      cover: { kind: "grid", colors: ["#121212", "#9bd7ff"] },
      meta: "2025 · Web",
      description: "WebGL 기반 인터랙티브 아카이브 사이트 디자인 및 개발.",
      tags: ["Web", "WebGL"],
    },
    {
      id: "p-merch", label: "MERCH", category: "project", type: "detail", x: 53, y: 66,
      cover: { kind: "stripes", colors: ["#2f6b3a", "#e9f1e5"] },
      meta: "2024 · Product",
      description: "투어 굿즈 그래픽 및 패키지 디자인.",
      tags: ["Product", "Packaging"],
    },
    {
      id: "p-label", label: "BOTTLE LABEL", category: "project", type: "detail", x: 38, y: 58,
      cover: { kind: "orb", colors: ["#ffd6e8", "#ff3d8b"] },
      meta: "2024 · Packaging",
      description: "와인 브랜드 라벨 디자인 3종.",
      tags: ["Packaging"],
    },

    /* ---------- CONTESTS (공모전) ---------- */
    {
      id: "c-1", label: "OO 공모전 대상", category: "contest", type: "detail", x: 76, y: 42,
      cover: { kind: "spiral", colors: ["#1638d8", "#e9edff"] },
      meta: "2025 · 대상",
      description: "공모전 주제, 내가 맡은 역할, 결과물과 성과를 정리하세요.",
      tags: ["공모전", "팀 3인"],
    },
    {
      id: "c-2", label: "OO 영상제", category: "contest", type: "detail", x: 81, y: 22,
      cover: { kind: "blob", colors: ["#e7e3f5", "#5a2bd6"] },
      meta: "2025 · 우수상",
      description: "모션그래픽 출품작 — 기획, 스토리보드, 제작 과정.",
      tags: ["영상", "모션"],
    },
    {
      id: "c-3", label: "OO 브랜딩 챌린지", category: "contest", type: "detail", x: 67, y: 56,
      cover: { kind: "type", text: "B", colors: ["#111", "#ffcf3a"] },
      meta: "2024 · 본선 진출",
      description: "지역 브랜드 아이덴티티 제안.",
      tags: ["브랜딩"],
    },
    {
      id: "c-4", label: "OO 아이디어 공모", category: "contest", type: "detail", x: 89, y: 46,
      cover: { kind: "wave", colors: ["#e5f4ff", "#0a74c9"] },
      meta: "2024 · 장려상",
      description: "서비스 UX 아이디어 공모전 출품작.",
      tags: ["UX"],
    },

    /* ---------- PPT ---------- */
    {
      id: "ppt-1", label: "기획서 DECK", category: "ppt", type: "slides", x: 30, y: 66,
      cover: { kind: "slides", colors: ["#1c1c1c", "#ff7a1a"] },
      meta: "2026 · 18 slides",
      // slides: ["assets/ppt1/01.jpg", "assets/ppt1/02.jpg"],  ← 슬라이드 이미지
      // pdf: "assets/ppt1.pdf",                                ← 또는 PDF
    },
    {
      id: "ppt-2", label: "졸업작품 발표", category: "ppt", type: "slides", x: 47, y: 74,
      cover: { kind: "slides", colors: ["#f2f2f2", "#1638d8"] },
      meta: "2025 · 24 slides",
    },
    {
      id: "ppt-3", label: "브랜드 제안서", category: "ppt", type: "slides", x: 62, y: 74,
      cover: { kind: "slides", colors: ["#2b1d14", "#ffb38a"] },
      meta: "2025 · 12 slides",
    },

    /* ---------- CONTACT ---------- */
    {
      id: "contact", label: "CONTACT", type: "contact", x: 86, y: 66,
      cover: { kind: "orb", colors: ["#1a1a1a", "#ff5a1f"] },
    },
  ],

  /* 하단 Dock — open: 항목 id / href: 외부 링크 / action: "closeAll" */
  dock: [
    { label: "About", open: "about", icon: "user", colors: ["#2b2b8f", "#6b6bff"] },
    { label: "Projects", open: "projects", icon: "grid", colors: ["#0f3a5c", "#2e9bf0"] },
    { label: "공모전", open: "contests", icon: "flag", colors: ["#5b1010", "#ff5a3c"] },
    { label: "수상이력", open: "awards", icon: "star", colors: ["#f8c400", "#ffe680"] },
    "sep",
    { label: "Presentations", open: "slides", icon: "slides", colors: ["#f5f5f5", "#ffffff"] },
    { label: "Resume", open: "resume", icon: "doc", colors: ["#fff", "#f1f1f1"] },
    "sep",
    { label: "Instagram", href: "owner.instagram", icon: "camera", colors: ["#f9a13a", "#c2338e"] },
    { label: "Mail", open: "contact", icon: "mail", colors: ["#1e90ff", "#5ac8fa"] },
    "sep",
    { label: "Close all", action: "closeAll", icon: "trash", colors: ["#e8e8ea", "#c9c9cc"] },
  ],
};
