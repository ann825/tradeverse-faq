const faqData = [
  {
    category: "시작 및 계좌 연동",
    question: "Q1. 트레이드버스를 사용하려면 무엇이 필요한가요?",
    answer: "트레이드버스 사용을 위해서는 DB증권 계좌 개설이 필요하며, 계좌 연동을 위해 DB증권 OPEN API 신청이 필수입니다."
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q2. DB증권 계좌가 없어도 이용할 수 있나요?",
    answer: "아니요. 트레이드버스는 DB증권 계좌 연동을 기반으로 사용되므로, 먼저 DB증권 계좌를 개설해야 합니다.\n\n기존에 다른 증권사를 이용 중인 경우에도, 계좌 개설 후 예수금 이체 또는 보유 주식 이전 절차를 통해 DB증권 계좌에서 거래를 시작할 수 있습니다.\n단, 세부 절차는 증권사별로 다를 수 있으므로 사전 확인이 필요합니다."
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q3. DB증권 계좌는 어디서 개설하나요?",
    answer: "DB증권 홈페이지 또는 DB증권 MTS 앱을 통해 비대면 계좌개설을 진행할 수 있습니다.\n자세한 계좌 개설, OPEN API 등록, 트레이드버스 회원가입 절차는 사용자 가이드에서 단계별로 확인할 수 있습니다."
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q4. 투자권유대행인 코드는 꼭 입력해야 하나요?",
    answer: "필수는 아니지만, DB증권 계좌 개설 시 투자권유대행인 코드를 입력하면 수수료 할인 혜택을 받을 수 있습니다. \n투자권유대행인 코드는 계좌 개설 시 입력하는 것을 권장합니다.\n\n계좌 개설 후에도 다른 투자권유대행인 코드가 등록되어 있지 않은 경우 DB증권 MTS 앱에서 추가 등록이 가능할 수 있습니다. \n등록 가능 여부는 계좌 상태에 따라 달라질 수 있으므로, 진행 전 트레이드버스 카카오톡 채널로 문의해 주시기 바랍니다. <br><br><a href='http://pf.kakao.com/_xlJxajX' target='_blank' class='kakao-link'>💬 트레이드버스 카카오톡 채널 바로가기</a>"
  },
  {
    category: "시작 및 계좌 연동",
    question: "Q5. 투자권유대행인 코드 입력 시 수수료 혜택은 어떻게 되나요?",
    answer: "투자권유대행인 코드 입력 시 수수료가 0.20%에서 0.08%로 할인됩니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q1. OPEN API Key는 어디서 신청하나요?",
    answer: "DB증권 홈페이지에 로그인한 뒤, 상단 메뉴에서 온라인 지점 → Open API 신청 메뉴로 이동해 신청할 수 있습니다.\n신청 가능 계좌를 조회한 후 약관 동의 및 사용 신청 절차를 진행합니다. <br><br><a href='https://www.dbsec.co.kr/main/main.do' target='_blank' class='db-link'>🔗 DB증권 홈페이지 바로가기</a>" 
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q2. OPEN API 신청 후 어떤 정보를 트레이드버스에 입력해야 하나요?",
    answer: "OPEN API 신청 완료 후 DB증권에서 발급받은 계좌번호, App Key, Secret Key를 트레이드버스 홈페이지에서 입력해야 합니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q3. OPEN API는 몇 개 계좌까지 신청할 수 있나요?",
    answer: "OPEN API 사용 신청은 최대 3계좌까지 가능합니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q4. App Key와 Secret Key는 계속 사용할 수 있나요?",
    answer: "아니요. App Key와 App Secret Key는 연 1회 갱신 후 재등록해야 합니다."
  },
  {
    category: "OPEN API 신청 및 등록",
    question: "Q5. 모의투자 계좌도 등록할 수 있나요?",
    answer: "현재는 실전계좌만 등록 가능하며, 모의투자 계좌는 지원되지 않습니다."
  },
  {
    category: "회원가입 및 로그인",
    question: "Q1. 트레이드버스 회원가입은 어디서 하나요?",
    answer: "트레이드버스 로그인 페이지에서 회원가입 버튼을 클릭해 계정을 생성할 수 있습니다.<br><br><a href='https://trade.tradeverse.one/dashboard' target='_blank' class='db-link'>🔗 트레이드버스 홈페이지 바로가기</a>"
  },
  {
    category: "회원가입 및 로그인",
    question: "Q2. 회원가입 시 어떤 절차가 필요한가요?",
    answer: "서비스 이용약관과 개인정보 처리방침을 끝까지 확인한 뒤 동의하고, 계정 관리 화면에서 필수 정보를 입력한 후 가입을 완료합니다."
  },
  {
    category: "회원가입 및 로그인",
    question: "Q3. 첫 로그인 후 바로 사용할 수 있나요?",
    answer: "첫 로그인 후에는 OPEN API 등록이 필요합니다. \nDB증권에서 발급받은 계좌번호, App Key, App Secret Key를 입력하고 계좌 등록을 완료해야 합니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q1. 대시보드에서는 무엇을 확인할 수 있나요?",
    answer: "대시보드는 로그인 후 초기 메인화면으로, 실시간 거래 정보와 등록된 전략을 한눈에 확인할 수 있는 화면입니다. \n트레이드버스를 처음 이용하시는 경우, 우측 상단의 안내 아이콘ⓘ을 클릭하면 주요 기능 사용 방법을 튜토리얼로 확인할 수 있습니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q2. 계좌현황 탭에서는 무엇을 볼 수 있나요?",
    answer: "거래 관련 금액 정보를 확인할 수 있습니다. 장중에는 실시간으로 갱신되며, 장 마감 후에는 증권사 정산이 반영된 최종 수치가 표시됩니다. \n다만 장중 실시간 정보는 계좌 연결 상태 또는 데이터 수신 상황에 따라 지연될 수 있습니다. \n실시간 정보가 정상적으로 반영되지 않는 경우, 우측 상단의 Refresh 버튼🔄을 눌러 데이터를 업데이트해 주시기 바랍니다. "
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q3. 실현손익, 수수료, 제세금은 계속 누적되나요?",
    answer: "아니요. 다음날 프리마켓이 시작되면 실현손익, 수수료, 제세금은 초기화됩니다."
  },
  { 
    category: "대시보드 및 주요 화면",
    question: "Q4. 전략현황과 실시간 잔고에 종목이 많을 때 어떻게 관리하나요?",
    answer: "전략현황과 실시간 잔고에서는 <span class='plus-icon'>+</span>아이콘을 클릭하여 새로운 탭을 추가할 수 있습니다.\n탭을 활용하면 전략이나 보유 종목을 목적별로 구분하여 보다 효율적으로 관리할 수 있습니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q5. 관심종목은 어떻게 관리하나요?",
    answer: "관심종목 탭에서 당일 또는 지속적으로 모니터링할 종목을 추가하거나 삭제할 수 있습니다. \n스칼렛 탭에서 원하는 종목을 더블클릭하면 관심종목에 추가할 수 있습니다."
  },
  {
    category: "대시보드 및 주요 화면",
    question: "Q6. Scarlett 탭은 무엇인가요?",
    answer: "Scarlett 탭은 당일 매매에 유리한 후보 종목을 핵심 정보와 함께 제공하는 기능입니다. 종목 목록은 실시간으로 변동될 수 있습니다.\n해당 정보는 투자 권유가 아닌 정보 제공 목적입니다.\n최종 투자 판단과 거래에 따른 책임은 이용자 본인에게 있음을 유의하시어 거래를 진행해 주시기 바랍니다.\n\n📌Scarlett 탭 화면이 보이지 않는 경우, 이용 권한 확인이 필요할 수 있으므로 트레이드버스 카카오톡 채널로 문의해 주시기 바랍니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q1. 매매불가 종목이 무엇인가요?",
    answer: "매매불가 종목은 증권사 또는 거래소 기준에 따라 주문이 제한되는 종목을 의미합니다.\n해당 종목은 전략목록에서 붉은색으로 표시되며, 마우스 커서를 올리면 주문 불가 사유를 확인할 수 있습니다.\n자세한 주문 상태와 오류 사유는 우측 상단의 종 모양 아이콘 > 알림내역 > 주문메시지 탭에서도 확인할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q2. 가격 전략 생성 시 무엇을 입력해야 하나요?",
    answer: "전략을 등록할 종목, 주문금액 또는 수량, 주문시점, 매수유형, 주문유형, 매수가, 매도가, 손절가 또는 손절률 등을 입력합니다. \n종목 등록 후 트래킹 시점을 1분 또는 1일 기준으로 설정할 수 있습니다. \n하단의 주문수량, 예상평균단가 등의 정보는 입력값을 기준으로 자동 계산됩니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q3. 주문시점의 ‘즉시주문’과 ‘근접주문’은 무엇이 다른가요?",
    answer: "즉시주문은 전략 생성과 동시에 매수주문이 시작되고 예수금이 즉시 차감됩니다.\n\n근접주문은 설정한 전략가에 근접했을 때 매수주문이 시작되며 주문과 동시에 예수금이 차감됩니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q4. 현재 어떤 매수유형과 주문유형을 지원하나요?",
    answer: "매수유형은 저점매수와 돌파매수로 구분되며, 각 매수유형은 지정가 또는 시장가로 설정할 수 있습니다.\n\n✅ 저점매수: 지정가 또는 시장가\n✅ 돌파매수: 지정가 또는 시장가\n\n지정가는 사용자가 원하는 매수 가격을 직접 설정하는 방식이며, 시장가는 주문 시점의 최우선 호가를 기준으로 매수되는 방식입니다.\n돌파매수의 경우, 돌파 시점의 매수 조건 충족 여부에 따라 주문이 실행됩니다.\n단, 시장가 주문은 가격 변동이 클 경우 예상보다 불리한 가격에 체결될 수 있으므로 유의해 주시기 바랍니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q5. 보조지표 전략은 어떻게 생성하나요?",
    answer: "보조지표 전략 생성 버튼을 클릭한 뒤 종목, 주문금액, 차트 기준(1분 또는 1일), 매수 조건, 매도 조건, 손절 조건, 익절 조건을 입력하고 지표전략생성 버튼을 클릭해 생성합니다.\n\n조건은 지표, 가격, 부등호 조합으로 원하는 전략을 구성할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q6. 보조지표 전략에서 사용할 수 있는 지표는 무엇인가요?",
    answer: "차트에서는 EMA, SMA, Bollinger Bands, VWAP 보조지표를 지원하며, 지표별 설정 변경이 가능합니다. \n가격 조건과 보조지표 조건을 함께 활용하여 전략을 구성할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q7. 가격 전략은 생성 후 수정할 수 있나요?",
    answer: "가능합니다. 가격 전략은 차트에 표시되는 전략선을 드래그하여 매수가와 매도가를 수정할 수 있습니다.\n매수선은 초록색, 매도선은 빨간색으로 표시됩니다.\n전략현황과 실시간 주문에서도 가격을 수정하여 매수가와 매도가를 수정할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q8. 보조지표 전략도 수정할 수 있나요?",
    answer: "보조지표 전략은 생성 후 수정할 수 없습니다.\n변경이 필요한 경우 기존 전략을 삭제한 뒤 다시 생성해야 합니다.\n이미 매수가 체결된 전략은 전략현황에서 해당 전략을 취소한 후, 실시간 잔고에서 보유 종목을 지정가, 시장가 또는 즉시청산 방식으로 매도할 수 있습니다."
  },
  {
    category: "전략 생성 및 관리",
    question: "Q9. 전략을 삭제하면 복구할 수 있나요?",
    answer: "아니요. 삭제된 전략은 복원이 불가합니다.\n\n다만 자주 사용하는 보조지표 전략은 즐겨찾기에 저장해 두면 이후 전략 생성 시 다시 활용할 수 있습니다.\n보조지표 전략에서 즐겨찾기명과 보조지표 조건을 입력한 뒤 즐겨찾기 버튼을 누르면 즐겨찾기 탭에 추가됩니다.\n이후 저장된 전략을 선택하고 종목명, 차트 기준, 주문금액만 입력하면 해당 전략을 적용할 수 있습니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q1. 전략 상태는 어떻게 구분되나요?",
    answer: "전략현황 탭에서는 등록한 전략의 상태를 주문대기, 주문, 진행 3가지 상태로 확인할 수 있습니다.\n\n각 상태의 의미는 아래와 같습니다.\n✅ 주문대기: 보조지표 전략 또는 돌파 전략 생성 후, 설정한 조건이 아직 충족되지 않은 상태입니다.\n✅ 주문: 가격 전략 생성 시 주문이 즉시 실행되어 실시간 주문 탭에 표시된 상태입니다.\n✅ 진행: 매수 주문이 체결되어 전략이 진행 중인 상태입니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q2. 실시간 주문 탭에서는 무엇을 확인하나요?",
    answer: "실시간 주문 탭에서는 전략현황 목록 중 상태가 ‘주문’ 또는 ‘진행’인 전략의 매수 또는 매도 주문과 실시간 잔고에서 등록한 지정가 매도 주문을 확인할 수 있습니다.\n주문조건, 주문수량, 체결수량 등 주문 실행 내역을 확인할 수 있으며, 종목명으로도 검색할 수 있습니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q3. 예수금보다 주문금액이 크면 어떻게 되나요?",
    answer: "주문금액이 예수금을 초과한 경우, 시스템이 이를 자동으로 식별합니다.\n이 경우 전략 조건에 도달하더라도 주문은 실행되지 않으며, 주문대기 상태로 유지됩니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q4. 실시간 잔고 탭에서는 무엇을 볼 수 있나요?",
    answer: "보유 종목의 평가손익, 보유수량, 평가금액, 매입금액 등 기본 정보를 확인할 수 있습니다.\n분할 매도를 진행할 경우, 잔고수량과 주문가능수량이 다를 수 있습니다.\n이 경우 기존 매도 주문의 체결 여부를 확인한 후 다음 매도 주문을 진행해 주시기 바랍니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q5. 보유 종목은 어떻게 매도하나요?",
    answer: "실시간 잔고에서 수량을 입력해 시장가 또는 지정가로 분할 매도할 수 있습니다.\n지정가 매도는 입력한 가격으로 주문되며, 시장가 매도는 즉시 최우선 호가를 기준으로 체결됩니다.\n즉시청산 버튼 클릭 시 전략현황과 실시간주문에 등록된 기존 주문은 삭제되며, 해당 종목의 보유 수량 전체가 최우선 매수호가 기준으로 즉시 체결되어 청산됩니다.\n\n✅ 지정가 매도: 원하는 수량과 매도 가격을 직접 입력하여 주문할 수 있습니다.\n✅ 시장가 매도: 원하는 수량을 입력하면 최우선 호가를 기준으로 즉시 매도 주문이 실행됩니다.\n✅ 즉시청산: 버튼 클릭 시 전략현황과 실시간주문에 등록된 기존 주문이 삭제되며, 모든 보유 종목이 최우선 매수호가 기준으로 즉시 청산됩니다.\n\n단, 시장가 매도와 즉시청산은 호가 변동이 큰 경우 예상보다 불리한 가격에 체결될 수 있으므로 유의해 주시기 바랍니다."
  },
  {
    category: "주문 및 잔고",
    question: "Q6. 시장가 주문은 언제 가능한가요?",
    answer: "일반적으로 국내 증권사는 시장가 주문을 정규장에서만 지원하지만, 트레이드버스에서는 프리마켓·정규장·애프터마켓 구분 없이 시장가 주문을 이용할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q1. 전략 목록🎯 페이지에서는 무엇을 확인할 수 있나요?",
    answer: "전략 목록🎯 페이지에서는 등록한 전략의 주문일시, 종목, 주문유형, 주문수량, 주문가격, 체결상태 등을 상세하게 확인할 수 있습니다.\n전략을 클릭하면 차트에서 해당 전략의 생성시간, 매수가, 매도가, 손절가, 매수조건 등을 한눈에 확인할 수 있습니다.\n\n💡 참고: 트레이드버스 이용 중 오류가 발생한 경우, 전략 목록 화면을 캡처하여 공유해 주시면 보다 빠른 확인과 대응이 가능합니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q2. 실현손익🧮 페이지에서는 무엇을 확인하나요?",
    answer: "실현손익🧮 페이지에서는 매매일자, 종목명, 통화, 손익, 수익률 등 일별·종목별·기간별 매매 결과와 실현손익 상세 정보를 확인할 수 있습니다.\n동일 종목을 여러 번 거래한 경우에는 거래 내역이 합산되어 표시되며, 매수단가와 매도단가는 평균 단가 기준으로 표기됩니다.\n또한 실현손익은 외화와 원화 기준으로 확인할 수 있으며, 하단의 실시간 잔고 정보를 함께 참고하여 계좌 관리에 활용할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q3. 실현손익의 중앙값과 최빈값은 무엇인가요?",
    answer: "실현손익 중앙값은 조회한 기간의 실현손익을 금액순으로 정렬했을 때 가운데에 위치한 금액입니다.\n예를 들어 실현손익이 -10,000원, 5,000원, 20,000원이라면 가운데 값인 5,000원이 중앙값입니다.\n✔️ 중앙값은 일부 큰 수익이나 큰 손실에 덜 영향을 받아, 전체 거래 결과의 중간 수준을 확인할 때 참고할 수 있습니다.\n\n실현손익 최빈값은 조회한 기간의 실현손익 중 가장 자주 발생한 금액입니다.\n예를 들어 5,000원의 실현손익이 여러 번 반복되었다면, 5,000원이 최빈값으로 표시됩니다.\n✔️ 최빈값은 어떤 손익 구간이 가장 자주 발생했는지 확인할 때 참고할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q4. 알람 내역🔔에서는 무엇을 확인할 수 있나요?",
    answer: "알람 내역🔔에서는 당일 주문 및 체결 현황을 매매일자, 종목명, 매수·매도 구분, 가격, 수량, 주문·체결 상태 등을 시간순 기준으로 확인할 수 있습니다.\n종목명과 기간을 기준으로 주문 및 체결 내역을 검색할 수 있습니다."
  },
  {
    category: "실현손익, 전략 목록, 알람",
    question: "Q5. 주문이 안 되거나 이상이 있을 때는 어디를 확인해야 하나요?",
    answer: "알람 내역🔔의 주문 메시지 탭에서 주문 상태, 오류 사유, 매매불가 종목 여부 등을 확인할 수 있습니다.\n전략 목록🎯에서 주문이 불가한 항목은 빨간색으로 표시되며, 마우스 커서를 올리면 주문 불가 사유를 확인할 수 있습니다.\n추가 문의가 필요한 경우, 전략목록 화면을 캡처한 후 트레이드버스 카카오톡 채널로 문의해 주시면 보다 빠른 확인과 대응이 가능합니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q1. 전략이 등록되지 않거나 주문이 실행되지 않는 주요 원인은 무엇인가요?",
    answer: "주요 원인은 매매불가 종목, 예수금 부족 또는 주문금액 부족, 현재가대비 과도한 지정가 입력, 종목명 오입력, 해외주식 거래 미신청, 동시접속 허용 미신청 등이 있습니다.\n\n✅ 매매불가 종목\n증권사 또는 거래소 기준에 따라 주문이 제한되는 종목입니다. 종목의 거래 상태, 시장 구분, 거래 제한 여부 등에 따라 매매가 제한될 수 있습니다.\n\n✅ 예수금 부족 또는 주문금액 부족\n예수금이 부족하거나 입력한 주문금액으로 해당 종목 1주를 매수할 수 없는 경우 주문이 실행되지 않을 수 있습니다.\n\n✅ DB증권 신청 항목 미완료\nDB증권 해외주식 거래 신청 또는 동시접속 허용 신청이 완료되지 않은 경우 전략 등록 및 주문 실행이 제한될 수 있습니다.\n해당 항목은 DB증권 MTS에서 확인해 주시기 바랍니다.\n\n✅ 현재가 대비 과도한 지정가 입력\n지정가 주문에서 매수가 또는 매도가를 현재가와 지나치게 차이 나게 입력하면 시장 상황이나 증권사 주문 기준에 따라 주문이 거부되거나 체결되지 않을 수 있습니다.\n\n주문이 정상적으로 실행되지 않는 경우, 알람 내역의 주문 메시지 탭 또는 전략목록의 주문 불가 사유를 확인해 주시기 바랍니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q2. 데이터가 멈춘 것 같으면 어떻게 해야 하나요?",
    answer: "데이터가 멈춘 것처럼 보이는 경우, 우측 상단의 Refresh 버튼🔄을 눌러 데이터를 재동기화해 주시기 바랍니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q3. 주문이 접수되면 반드시 체결되나요?",
    answer: "아니요. 전략 주문이 접수되더라도 증권사 또는 현지 시장 사정에 따라 미체결이나 부분체결이 발생할 수 있습니다.\n주문이 체결된 후에는 실시간 주문 또는 실시간 잔고에서 체결 여부, 체결수량, 주문가능수량을 확인해 주시기 바랍니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q4. 트레이드버스가 수익을 보장하나요?",
    answer: "아니요. 트레이드버스는 수익을 보장하지 않으며, 투자에 따른 손실이 발생할 수 있습니다. 모든 투자 판단과 결정은 이용자 본인의 책임입니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q5. 모든 시간 표기는 어떤 기준인가요?",
    answer: "트레이드버스 내 모든 표기 시간은 미국 동부시간 EST 기준입니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q6. 트레이드버스 기능 사용 중 모르는 점이 있으면 어떻게 해야 하나요?",
    answer: "대시보드 화면 내 우측 상단의 안내 아이콘ⓘ을 클릭하여 내용을 다시 확인해 주시기 바랍니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q7. 추가 문의는 어디로 하면 되나요?",
    answer: "추가 문의는 트레이드버스 카카오톡 채널로 문의해 주시기 바랍니다. <br><br><a href='http://pf.kakao.com/_xlJxajX' target='_blank' class='kakao-link'>💬 트레이드버스 카카오톡 채널 바로가기</a>"
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q8. 프리마켓 시작 전에 홈페이지에서 자동으로 로그아웃되는 이유는 무엇인가요?",
    answer: "트레이드버스의 안정적인 실행을 위해 프리마켓 시작 5분 전에는 홈페이지 세션이 자동으로 로그아웃됩니다.\n이는 장 시작 전 계좌·주문·전략 정보를 최신 상태로 반영하고, 오래된 세션으로 인한 오류를 방지하기 위한 절차입니다.\n자동 로그아웃 후에는 다시 로그인하여 서비스를 이용해 주시면 됩니다."
  },
  {
    category: "오류 및 기타 문의사항",
    question: "Q9. ETF 종목 거래가 안되는 이유는 무엇인가요?",
    answer: "해외 ETF/ETN 거래를 위해서는 DB증권 앱에서 해외 ETP 위험고지 신청이 완료되어 있어야 거래가 가능합니다.\n확인 경로는 아래와 같습니다.\nDB증권 앱 > 검색 > 해외주식거래이용신청 > 해외 ETP(해외 ETF/ETN) 위험고지 > 이용중 여부 확인"
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
      searchInput.value = "";
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
