import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Price.module.css";

export default function PricePage() {
    const basicCares = [
        { name: "단기케어", price: "33,000원", desc: "짧은 진료에 딱 맞는" },
        { name: "실속케어", price: "55,000원", desc: "가장 많이 선택하는" },
        { name: "기본케어", price: "85,000원", desc: "일상 외래 진료에는" },
        { name: "투석케어", price: "137,000원", desc: "투석, 항암 등 특수진료" },
        { name: "서울병원 검진 방문", price: "220,000원", desc: "장시간 병원 체류 시" }
    ];

    const memberships = [
        {
            title: "2시간 이용 패키지 (부가세 10% 포함)",
            items: [
                { count: "3회", price: "135,000원" },
                { count: "4회", price: "180,000원" },
                { count: "5회", price: "225,000원" }
            ]
        },
        {
            title: "3시간 이용 패키지 (부가세 10% 포함)",
            items: [
                { count: "3회", price: "205,000원" },
                { count: "4회", price: "271,000원" },
                { count: "5회", price: "326,000원" }
            ]
        }
    ];

    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold" style={{ fontWeight: 'bold' }}>서비스 요금</h2>
                    <p>Service Price Guide</p>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.bgOffWhite}`}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h3 className="heading-decorate heading-decorate-center text-bold">멤버십 패키지 (부가세 10% 포함)</h3>
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

            <Footer />
        </main>
    );
}
