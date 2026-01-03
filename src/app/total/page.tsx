import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Total.module.css";

export default function TotalCarePage() {
    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>통합돌봄매니저</h2>
                    <p style={{ color: 'white' }}>Integrated Care Manager</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.intro}>
                        <h3 className="heading-decorate heading-decorate-center text-bold">"지역사회와 연결하는 든든한 고리"</h3>
                        <p>
                            통합돌봄매니저는 어르신이 살던 곳에서 건강하고 행복하게 지내실 수 있도록<br />
                            의료, 복지, 주거 등 흩어져 있는 다양한 자원을 하나로 연결하는 코디네이터입니다.
                        </p>
                    </div>

                    <div className={styles.rolesGrid}>
                        <div className={styles.roleCard}>
                            <h4>자원 연결 및 조정</h4>
                            <ul>
                                <li>지역 내 병의원 및 보건소 서비스 연계</li>
                                <li>정부 및 지자체 복지 혜택 안내 및 신청 대행</li>
                                <li>민간 돌봄 서비스 매칭 및 조정</li>
                            </ul>
                        </div>
                        <div className={styles.roleCard}>
                            <h4>생활 환경 개선</h4>
                            <ul>
                                <li>낙상 방지 등을 위한 주거 환경 개선 지원</li>
                                <li>인지 강화 및 신체 활동 프로그램 연결</li>
                                <li>식사 배달 및 가사 보조 서비스 연계</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
