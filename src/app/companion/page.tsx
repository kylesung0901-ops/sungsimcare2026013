import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Companion.module.css";

export default function CompanionPage() {
    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold" style={{ fontWeight: 'bold' }}>병원동행매니저</h2>
                    <p>Hospital Accompaniment Manager</p>
                </div>
            </div>

            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textContent}>
                            <h3 className="heading-decorate text-bold">"전문성을 갖춘 따뜻한 동행자"</h3>
                            <p>
                                성심동행케어(주)의 병원동행매니저는 단순한 이동 지원을 넘어 어르신의 건강을 이해하고<br />
                                정서적으로 교감하는 전문가들입니다.
                            </p>
                            <p>
                                철저한 선별 과정과 정기적인 직무 교육을 통해 최상의 서비스를 제공하며,<br />
                                어르신의 안전을 최우선으로 생각합니다.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" alt="Companion Manager" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.qualificationSection}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h3 className="text-bold">매니저 자격 요건</h3>
                        <p>까다로운 기준을 통과한 믿을 수 있는 분들만 함께합니다.</p>
                    </div>

                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <i className="fas fa-user-md"></i>
                            <h4>의료/복지 자격</h4>
                            <p>간호사, 사회복지사, 요양보호사 등 전문 자격증을 소지하고 있습니다.</p>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-id-card-alt"></i>
                            <h4>신원 보증</h4>
                            <p>범죄 경력 조회 및 철저한 면접을 통해 신뢰할 수 있는 분들로 엄선했습니다.</p>
                        </div>
                        <div className={styles.card}>
                            <i className="fas fa-graduation-cap"></i>
                            <h4>전문 교육 이수</h4>
                            <p>병원 동행 에티켓, 응급처치, 노인 심리 등 자체 교육 과정을 이수했습니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
