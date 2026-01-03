import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Care.module.css";

export default function CarePage() {
    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>케어매니저</h2>
                    <p style={{ color: 'white' }}>Care Manager</p>
                </div>
            </div>

            <section className={`${styles.section} ${styles.bgWhite}`}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textContent}>
                            <h3 className="heading-decorate text-bold">"일상의 건강과 안녕을 설계합니다"</h3>
                            <p>
                                케어매니저는 어르신의 건강 상태와 생활 환경을 종합적으로 분석하여<br />
                                가장 적합한 돌봄 서비스를 설계하고 제안하는 전문가입니다.
                            </p>
                            <p>
                                단순히 서비스를 전달하는 것에 그치지 않고, 어르신의 삶의 질 향상을 위해<br />
                                정기적으로 소통하며 상태를 모니터링합니다.
                            </p>

                            <div className={styles.featureList}>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}><i className="fas fa-search-plus"></i></div>
                                    <div className={styles.featureText}>
                                        <h5>종합 상태 평가</h5>
                                        <p>건강, 영양, 심리, 환경 등 다각도의 평가를 진행합니다.</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}><i className="fas fa-clipboard-list"></i></div>
                                    <div className={styles.featureText}>
                                        <h5>맞춤 케어플랜 수립</h5>
                                        <p>개별 욕구에 맞춘 최적화된 돌봄 계획을 수립합니다.</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}><i className="fas fa-user-friends"></i></div>
                                    <div className={styles.featureText}>
                                        <h5>정기 방문 상담</h5>
                                        <p>주기적인 방문을 통해 상태 변화를 체크하고 정서적으로 지지합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" alt="Care Manager" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
