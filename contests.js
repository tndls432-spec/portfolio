/* =========================================================
   공모전 · 경진대회 · 대외활동 목록 — 매주 자동 업데이트 대상
   ---------------------------------------------------------
   kind   : "공모전" | "경진대회" | "대외활동"
   start, end : 접수 기간 (YYYY-MM-DD). 모르면 null 로 두고 when 에 글로 적는다.
   est    : true = 올해 공고 전, 작년 일정 기준 추정
   fit    : ★★★ / ★★ / ★ / 선택 / ✕(지원 불가)
   joined : 참가 중이거나 참가한 대회의 결과 (있으면 '참가 이력'에 표시)
   link   : 공식 공고 또는 공고 모음 페이지
   ========================================================= */
window.CONTESTS = {
  updated: "2026-11-27",
  cadence: "매주 월요일 자동 업데이트",

  items: [
    {
      id: "hd-samho", kind: "경진대회", name: "HD현대삼호 기업분석 경진대회",
      host: "HD현대삼호", start: null, end: null, when: "2026년 하반기",
      joined: "예선 통과 (17팀 중 10팀) · 12월 최종 발표",
      fit: "참가", why: "3주 준비, BLASH 팀으로 참가",
    },
    {
      id: "db-ifc-17", kind: "공모전", name: "DB보험금융공모전 (제17회 예상)",
      host: "DB김준기문화재단", start: "2026-12-01", end: "2027-02-27", est: true,
      fit: "★★★", why: "겨울방학 메인. 개인 또는 2인 1팀, 논문·기획안. 분야: 보험·은행 / 증권·자산운용 / 경제. 코스피 폭락 VaR·ES 분석 논문으로 참가",
      note: "16회: 91팀 수상, 대상 500만원, 해외 금융탐방. 심사 기준에 실용성·현실 적용 가능성·연구의 한계",
      link: "https://ideafin.dbfoundation.or.kr/invitation/notice/1825",
    },
    {
      id: "kiwoom-winter", kind: "대외활동", name: "키움증권 대학생 서포터즈 (겨울)",
      host: "키움증권", start: "2026-12-01", end: "2026-12-04", est: true,
      fit: "★★", why: "접수 기간이 나흘뿐 → 12월 초 매일 확인. 활동 12~4월이라 3-1 부담을 보고 결정",
      note: "작년: 100명, 활동비·인턴십 기회, 전국 대학생 대상",
      link: "https://linkareer.com/activity/285721",
    },
    {
      id: "shinhan-sup", kind: "대외활동", name: "신한투자증권 대학생 서포터즈",
      host: "신한투자증권", start: null, end: "2026-12-31", est: true,
      fit: "★", why: "활동 1~4월. 3-1 학기 부담과 비교해서 선택",
      link: "https://linkareer.com/activity/285837",
    },
    {
      id: "krx-derivatives", kind: "경진대회", name: "전국 대학생 증권·파생상품 경시대회",
      host: "한국거래소", start: "2027-04-21", end: "2027-06-05", est: true,
      fit: "선택", why: "같은 대학 4인 이내 팀, 연구제안서. 공모전 논문을 확장하면 부담이 적다",
      note: "작년: 최우수 1,000만원·금융위원장 표창, 본선 10월. 입상 시 5년간 한국거래소 신입 채용 서류 우대",
      link: "https://thinkyou.co.kr/contest/62571",
    },
    {
      id: "kiwoom-summer", kind: "대외활동", name: "키움증권 커뮤니티 서포터즈 (여름)",
      host: "키움증권", start: "2027-06-10", end: "2027-06-21", est: true,
      fit: "선택", why: "활동 6~9월이라 FRM 공부와 겹친다",
      link: "https://linkareer.com/activity/328413",
    },
    {
      id: "bok-policy", kind: "경진대회", name: "한국은행 통화정책 경시대회",
      host: "한국은행", start: null, end: null, when: "2027년 7월 지역예선, 8월 전국결선 (추정)", est: true,
      fit: "선택", why: "금리 관심이 강점이지만 거시가 약점. FRM과 겹치면 뺀다",
      link: "https://www.bok.or.kr/portal/",
    },
    {
      id: "ins-idea", kind: "공모전", name: "보험산업 발전을 위한 대학생 아이디어 공모전",
      host: "한국보험신문", start: "2027-10-01", end: "2027-10-11", est: true,
      fit: "선택", why: "11월 본선 PT. FRM 시험과 겹친다. 보험사 쪽으로 기울 때만",
      note: "작년: 금융감독원장상, 생명·손해보험협회장상",
      link: "https://dazabi.com/insurance_magazine/article.php?id=4605",
    },
    {
      id: "bok-yes", kind: "대외활동", name: "한국은행 대학생 서포터즈 (YES)",
      host: "한국은행", start: "2027-01-15", end: "2027-02-03", est: true,
      fit: "✕", why: "서울·경기 지역 대학생 대상이라 지원 불가",
      link: "https://linkareer.com/activity/297029",
    },
  ],
};
