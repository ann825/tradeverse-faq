const faqData = [
  {
    category: "시작 및 계좌 연동",
    question: "Q1. 트레이드버스를 사용하려면 무엇이 필요한가요?",
    answer: "트레이드버스 사용을 위해서는 DB증권 계좌 개설이 필요하며, 계좌 연동을 위해 DB증권 OPEN API 신청이 필수입니다."
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q2. DB증권 계좌가 없어도 이용할 수 있나요?",
    answer: "아니요. 트레이드버스는 DB증권 계좌 연동을 기반으로 사용되므로, 먼저 DB증권 계좌를 개설해야 합니다.\n\n기존에 다른 증권사를 이용 중인 경우에도, 계좌 개설 후 예수금 이체 또는 보유 주식 이전 절차를 통해 DB증권 계좌에서 거래를 시작할 수 있습니다. 단, 세부 절차는 증권사별로 다를 수 있으므로 사전 확인이 필요합니다."
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q3. DB증권 계좌는 어디서 개설하나요?",
    answer: "DB증권 홈페이지 또는 DB증권 MTS 앱을 통해 비대면 계좌개설을 진행할 수 있습니다.\n\n자세한 계좌 개설, OPEN API 등록, 트레이드버스 회원가입 절차는 사용자 가이드에서 단계별로 확인할 수 있습니다."
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q4. 투자권유대행인 코드는 꼭 입력해야 하나요?",
    answer: "필수는 아니지만, DB증권 계좌 개설 시 투자권유대행인 코드를 입력하면 수수료 할인 혜택을 받을 수 있습니다. 투자권유대행인 코드는 계좌 개설 시 입력하는 것을 권장합니다.\n\n계좌 개설 후에도 다른 투자권유대행인 코드가 등록되어 있지 않은 경우 DB증권 MTS 앱에서 추가 등록이 가능할 수 있습니다. 등록 가능 여부는 계좌 상태에 따라 달라질 수 있으므로, 진행 전 지원팀에 문의해 주시기 바랍니다."
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q5. 투자권유대행인 코드 입력 시 수수료 혜택은 어떻게 되나요?",
    answer: "가이드 기준으로 투자권유대행인 코드 입력 시 수수료가 0.20%에서 0.08%로 할인됩니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q6. OPEN API Key는 어디서 신청하나요?",
    answer: "DB증권 홈페이지에 로그인한 뒤, 상단 메뉴에서 온라인 지점 → Open API 신청 메뉴로 이동해 신청할 수 있습니다.\n\n신청 가능 계좌를 조회한 후 약관 동의 및 사용 신청 절차를 진행합니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q7. OPEN API 신청 후 어떤 정보를 트레이드버스에 입력해야 하나요?",
    answer: "OPEN API 신청 완료 후 발급되는 계좌번호, App Key, Secret Key를 트레이드버스 회원가입 화면에 입력해야 합니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q8. OPEN API는 몇 개 계좌까지 신청할 수 있나요?",
    answer: "OPEN API 사용 신청은 최대 3계좌까지 가능합니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q9. App Key와 Secret Key는 계속 사용할 수 있나요?",
    answer: "아니요. 가이드에 따르면 App Key와 App Secret Key는 연 1회 갱신 후 재등록해야 합니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q10. 모의투자 계좌도 등록할 수 있나요?",
    answer: "현재는 실전계좌만 등록 가능하며, 모의투자 계좌는 지원되지 않습니다."
  },
  {
    category: "회원가입 및 로그인",
    question: "Q11. 트레이드버스 회원가입은 어디서 하나요?",
    answer: "트레이드버스 로그인 페이지에서 회원가입 버튼을 클릭해 계정을 생성할 수 있습니다."
  },
  {
    category: "회원가입 및 로그인",
    question: "Q12. 회원가입 시 어떤 절차가 필요한가요?",
    answer: "서비스 이용약관과 개인정보 처리방침을 끝까지 확인한 뒤 동의하고, 계정 생성 화면에서 필수 정보를 입력한 후 가입을 완료합니다."
  },
  {
    category: "회원가입 및 로그인",
    question: "Q13. 첫 로그인 후 바로 사용할 수 있나요?",
    answer: "첫 로그인 후에는 OPEN API 등록이 필요합니다. DB증권에서 발급받은 계좌번호, App Key, App Secret Key를 입력하고 계좌 등록을 완료해야 합니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q14. 대시보드에서는 무엇을 확인할 수 있나요?",
    answer: "대시보드는 로그인 후 초기 메인화면으로, 실시간 거래 정보와 등록된 전략을 한눈에 확인할 수 있는 화면입니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q15. 계좌현황 탭에서는 무엇을 볼 수 있나요?",
    answer: "거래 관련 금액 정보를 확인할 수 있습니다. 장중에는 실시간으로 갱신되며, 장 마감 후에는 증권사 정산이 반영된 최종 수치가 표시됩니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q16. 실현손익, 수수료, 제세금은 계속 누적되나요?",
    answer: "아니요. 다음날 프리마켓이 시작되면 실현손익, 수수료, 제세금은 초기화됩니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q17. 차트에서는 어떤 보조지표를 사용할 수 있나요?",
    answer: "차트에서는 EMA, SMA, Bollinger Bands, VWAP 보조지표를 지원하며, 지표별 설정 변경이 가능합니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q18. 관심종목은 어떻게 관리하나요?",
    answer: "관심종목 탭에서 당일 또는 지속적으로 모니터링할 종목을 추가하거나 삭제할 수 있습니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q19. Scarlett 탭은 무엇인가요?",
    answer: "Scarlett 탭은 당일 매매에 유리한 후보 종목을 핵심 정보와 함께 제공하는 기능입니다. 종목 목록은 실시간으로 변동될 수 있습니다.\n\n또한 투자 권유가 아닌 정보 제공용입니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q20. 가격 전략은 무엇인가요?",
    answer: "가격 전략은 사용자가 직접 매수 조건, 매도 조건, 손절 조건을 가격으로 입력해 생성하는 전략입니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q21. 가격 전략 생성 시 무엇을 입력해야 하나요?",
    answer: "전략을 등록할 종목, 주문금액, 주문시점, 매수유형, 주문유형, 매수가, 매도가, 손절가 등을 입력합니다. 주문수량과 예상수익률은 자동 계산됩니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q22. 주문시점의 ‘즉시주문’과 ‘근접주문’은 무엇이 다른가요?",
    answer: "즉시주문은 전략 생성과 동시에 매수주문이 시작되고 예수금이 즉시 차감됩니다.\n\n근접주문은 설정한 전략가에 근접했을 때 매수주문이 시작되며 주문과 동시에 예수금이 차감됩니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q23. 현재 어떤 매수유형과 주문유형을 지원하나요?",
    answer: "매수유형은 저점매수 / 돌파매수, 주문유형은 지정가 / 시장가를 제공합니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q24. 보조지표 전략은 어떻게 생성하나요?",
    answer: "보조지표 전략 생성 버튼을 클릭한 뒤 종목, 주문금액, 기준 차트, 매수 조건, 매도 조건, 손절 조건, 익절 조건을 입력하고 지표전략생성 버튼을 클릭해 생성합니다.\n\n조건은 지표, 가격, 부등호 조합으로 구성할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q25. 보조지표 전략에서 사용할 수 있는 지표는 무엇인가요?",
    answer: "가격, EMA, SMA, VWAP, BB를 부등호 조합으로 사용할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q26. 가격 전략은 생성 후 수정할 수 있나요?",
    answer: "가능합니다. 가격 전략은 차트에 표시되는 전략선을 드래그하여 매수가와 매도가를 수정할 수 있습니다. 매수선은 초록색, 매도선은 빨간색으로 표시됩니다.\n\n전략현황과 실시간 주문에서도 가격을 수정하여 매수가와 매도가를 수정할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q27. 보조지표 전략도 수정할 수 있나요?",
    answer: "가이드 기준으로 보조지표 전략은 수정이 불가하며, 삭제 후 다시 생성해야 합니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q28. 전략을 삭제하면 복구할 수 있나요?",
    answer: "아니요. 삭제된 전략은 복원이 불가하며, 현재 진행 중인 전략도 삭제될 수 있으므로 주의해야 합니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q29. 전략 상태는 어떻게 구분되나요?",
    answer: "전략 현황 탭에서 등록한 전략의 상태를 주문, 진행 등으로 확인할 수 있습니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q30. 실시간 주문 탭에서는 무엇을 확인하나요?",
    answer: "생성된 전략 중 진행 상태인 주문과 실시간 잔고의 지정가 주문 정보를 확인할 수 있습니다.\n\n또한 매수주문금액이 예수금을 초과하는지도 확인할 수 있습니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q31. 예수금보다 주문금액이 크면 어떻게 되나요?",
    answer: "초과 시 시스템이 자동으로 식별하여 전략 조건에 도달하더라도 주문하지 않고 주문대기 상태로 유지합니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q32. 실시간 잔고 탭에서는 무엇을 볼 수 있나요?",
    answer: "보유 종목의 평가손익, 보유수량, 평가금액, 매입금액 등의 기본 정보를 확인할 수 있습니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q33. 보유 종목은 어떻게 매도하나요?",
    answer: "실시간 잔고에서 수량을 입력해 시장가 또는 지정가로 분할 매도할 수 있습니다. 지정가 매도는 입력한 가격으로 주문되며, 시장가 매도는 즉시 최우선 매수호가부터 체결됩니다.\n\n즉시청산 버튼 클릭 시 전략현황과 실시간주문에 등록된 기존 주문은 삭제되며, 모든 보유 종목은 최우선 매수호가 기준으로 즉시 체결되어 청산됩니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q34. 시장가 주문은 언제 가능한가요?",
    answer: "일반적으로 국내 증권사는 시장가 주문을 정규장에서만 지원하지만, 트레이드버스에서는 프리마켓·정규장·애프터마켓 구분 없이 시장가 주문을 이용할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q35. 전략 목록에서는 무엇을 확인할 수 있나요?",
    answer: "주문 및 체결된 모든 정보, 예를 들어 주문시간, 주문종류, 종목, 주문수량, 주문가격, 체결상태 등을 확인할 수 있습니다.\n\n전략을 클릭하면 차트에서 해당 전략의 생성시간과 매수가, 매도가, 손절가, 매수조건을 한눈에 확인할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q36. 실현손익 페이지에서는 무엇을 확인하나요?",
    answer: "기간 범위를 선택해 조회하면 매매일자, 거래소, 종목명, 통화, 손익, 수익률 등 실현손익 상세정보를 확인할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q37. 실현손익의 중앙값과 최빈값은 무엇인가요?",
    answer: "실현손익 중앙값은 기간별 실현손익 중 중심이 되는 금액이며, 최빈값은 가장 빈도수가 높게 나온 금액입니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q38. 알람 내역에서는 무엇을 확인할 수 있나요?",
    answer: "당일 주문 및 체결 현황을 매매일자, 종목명, 매매구분, 가격, 수량, 상태구분 등으로 시간순 확인할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q39. 주문이 안 되거나 이상이 있을 때는 어디를 확인해야 하나요?",
    answer: "알람 내역의 주문 메시지 탭에서 오류 사유와 거래 가능 종목 또는 상태를 확인할 수 있습니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q40. 전략이 등록되지 않는 주요 원인은 무엇인가요?",
    answer: "주요 원인은 매매불가 종목, 예수금 부족, 현재가가 주문금액보다 큰 경우, 종목명 오입력, 해외주식 거래 미신청, 동시접속 허용 미신청 등이 있습니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q41. 데이터가 멈춘 것 같으면 어떻게 해야 하나요?",
    answer: "오른쪽 상단 시간 옆의 Refresh 버튼을 눌러 재동기화합니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q42. 주문이 접수되면 반드시 체결되나요?",
    answer: "아니요. 전략 주문이 접수되더라도 증권사 또는 현지 시장 사정에 따라 미체결이나 부분체결이 발생할 수 있습니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q43. 트레이드버스가 수익을 보장하나요?",
    answer: "아니요. 트레이드버스는 수익을 보장하지 않으며, 투자에 따른 손실이 발생할 수 있습니다. 모든 투자 판단과 결정은 이용자 본인의 책임입니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q44. 모든 시간 표기는 어떤 기준인가요?",
    answer: "트레이드버스 내 모든 표기 시간은 미국 동부시간 EST 기준입니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q45. 트레이드버스 기능 사용 중 모르는 점이 있으면 어떻게 해야 하나요?",
    answer: "트레이드버스 기능 사용 중 헷갈리거나 다시 확인이 필요한 경우, 화면 내 튜토리얼 아이콘을 클릭하여 안내 내용을 다시 확인해 주시기 바랍니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q46. 추가 문의는 어디로 하면 되나요?",
    answer: "추가 문의는 카카오톡 트레이드버스 채널의 1:1 문의를 통해 접수해 주시기 바랍니다.\n\n※ 카카오톡 채널 URL 또는 바로가기 버튼은 추후 추가하면 됩니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q47. 프리마켓 시작 전에 홈페이지에서 자동으로 로그아웃되는 이유는 무엇인가요?",
    answer: "트레이드버스의 안정적인 실행을 위해 프리마켓 시작 5분 전에는 홈페이지 세션이 자동으로 로그아웃됩니다.\n\n이는 장 시작 전 계좌·주문·전략 정보를 최신 상태로 반영하고, 오래된 세션으로 인한 오류를 방지하기 위한 절차입니다.\n\n자동 로그아웃 후에는 다시 로그인하여 서비스를 이용해 주시면 됩니다."
  }
];

const categoryButtons = document.getElementById("categoryButtons");
const faqList = document.getElementById("faqList");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

let selectedCategory = "전체";

const categories = ["전체", ...new Set(faqData.map(item => item.category))];

function renderCategories() {
  categoryButtons.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-button";
    button.textContent = category;

    if (category === selectedCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      selectedCategory = category;
      renderCategories();
      renderFaq();
    });

    categoryButtons.appendChild(button);
  });
}

function renderFaq() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredData = faqData.filter(item => {
    const matchesCategory =
      selectedCategory === "전체" || item.category === selectedCategory;

    const matchesKeyword =
      item.question.toLowerCase().includes(keyword) ||
      item.answer.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword);

    return matchesCategory && matchesKeyword;
  });

  faqList.innerHTML = "";
  resultCount.textContent = `총 ${filteredData.length}개`;

  if (filteredData.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  filteredData.forEach(item => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    faqItem.innerHTML = `
      <button class="faq-question">
        <div class="question-left">
          <span class="category-label">${item.category}</span>
          <span class="question-title">${item.question}</span>
        </div>
        <span class="icon">+</span>
      </button>
      <div class="faq-answer">${item.answer}</div>
    `;

    const questionButton = faqItem.querySelector(".faq-question");

    questionButton.addEventListener("click", () => {
      faqItem.classList.toggle("active");
    });

    faqList.appendChild(faqItem);
  });
}

searchInput.addEventListener("input", renderFaq);

renderCategories();
renderFaq();
