import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Price.module.css";

export default function PricePage() {
    const basicCares = [
        { name: "단기케어", price: "33,000원", time: "1시간", desc: "짧은 진료에 딱 맞는" },
        { name: "실속케어", price: "44,000원", time: "2시간", desc: "가장 많이 선택하는" },
        { name: "기본케어", price: "66,000원", time: "3시간", desc: "일상 외래 진료에는" },
        { name: "투석케어", price: "88,000원", time: "5시간", desc: "투석, 항암 등 특수진료" },
        { name: "원데이케어", price: "176,000원", time: "9시간", desc: "장시간 병원 체류 시" }
    ];

    const memberships = [
        {
            title: "2시간 이용 패키지",
            items: [
                { count: "3회", price: "121,000원" },
                { count: "4회", price: "165,000원" },
                { count: "5회", price: "203,500원" }
            ]
        },
        {
            title: "3시간 이용 패키지",
            items: [
                { count: "3회", price: "187,000원" },
                { count: "4회", price: "247,500원" },
                { count: "5회", price: "297,000원" }
            ]
        }
    ];

    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>서비스 요금</h2>
                    <p style={{ color: 'white' }}>Service Price Guide</p>
                </div>
            </div>

            <section className={`${styles.section} ${styles.bgWhite}`}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h3 className="heading-decorate heading-decorate-center text-bold">기본 서비스 요금</h3>
                        <p>투명하고 합리적인 가격으로 전문적인 돌봄 서비스를 제공합니다.</p>
                    </div>

                    <div className={styles.priceGrid}>
                        {basicCares.map((care, index) => (
                            <div key={index} className={styles.priceCard}>
                                <h5>{care.desc}</h5>
                                <h4>{care.name}</h4>
                                <div className={styles.priceValue}>{care.price}</div>
                                <div className={styles.priceTime}><i className="far fa-clock"></i> {care.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.bgOffWhite}`}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h3 className="heading-decorate heading-decorate-center text-bold">동행 요금 상세</h3>
                        <p>이동 수단에 따른 상세 요금 체계입니다. (부가세 10% 별도)</p>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.priceTable}>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>상세 내역</th>
                                    <th>요감</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.highlightRow}>
                                    <td rowSpan={3} style={{ fontWeight: 'bold' }}>당사 차량<br /><span style={{ fontSize: '12px', fontWeight: 'normal' }}>(차량지원 + 진료돌봄)</span></td>
                                    <td>기본요금 (왕복)</td>
                                    <td>60,000원 / 1시간 (거리 10km 이내)</td>
                                </tr>
                                <tr className={styles.highlightRow}>
                                    <td>시간 초과 요금</td>
                                    <td>12,500원 / 30분</td>
                                </tr>
                                <tr className={styles.highlightRow}>
                                    <td>거리 초과 요금</td>
                                    <td>5,000원 / 10km</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} style={{ fontWeight: 'bold' }}>자차 / 대중교통<br /><span style={{ fontSize: '12px', fontWeight: 'normal' }}>(교통비 자부담)</span></td>
                                    <td>기본요금</td>
                                    <td>50,000원 / 2시간</td>
                                </tr>
                                <tr>
                                    <td>초과요금 (2시간 초과 시)</td>
                                    <td>12,500원 / 30분</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.tableContainer} style={{ marginTop: '30px' }}>
                        <table className={styles.priceTable}>
                            <thead>
                                <tr>
                                    <th colSpan={2}>특약 및 할고 요금</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>전동식 계단 휠체어 이용</td>
                                    <td>25,000원</td>
                                </tr>
                                <tr>
                                    <td>추가 케어 서비스</td>
                                    <td>15,000원</td>
                                </tr>
                                <tr>
                                    <td>야간 할증 (19시 ~ 익일 08시)</td>
                                    <td>기본 요금의 30% 할증</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.bgWhite}`}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h3 className="heading-decorate heading-decorate-center text-bold">멤버십 패키지</h3>
                        <p>합리적인 비용으로 프리미엄 케어 혜택을 누려보세요.</p>
                    </div>

                    <div className={styles.membershipGrid}>
                        {memberships.map((membership, index) => (
                            <div key={index} className={styles.membershipCard}>
                                <h4>{membership.title}</h4>
                                {membership.items.map((item, i) => (
                                    <div key={i} className={styles.membershipItem}>
                                        <span className={styles.membershipCount}>{item.count} 이용</span>
                                        <span className={styles.membershipPrice}>{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.bgOffWhite}`}>
                <div className="container">
                    <div className={styles.noticeBox}>
                        <h5>서비스 이용 시 유의사항</h5>
                        <ul className={styles.noticeList}>
                            <li><strong>할인 혜택:</strong> 의료 급여 수급권자 대상 10% 할인 (증빙 서류 제출 시, 거리 요금 제외)</li>
                            <li><strong>취소 및 변경 수수료:</strong> 이용 24시간 전까지는 수수료가 없으며, 18~24시간 이내 취소 시 10,000원의 수수료가 발생합니다.</li>
                            <li><strong>추가 비용:</strong> 대중교통 이용 시 교통비 또는 매니저 차량 이용 시 발생하는 주차비 등은 이용자 실비 부담입니다.</li>
                            <li><strong>시간 초과:</strong> 서비스 예약 시간 초과 시 30분 단위로 10,000원의 추가 비용이 발생합니다.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
