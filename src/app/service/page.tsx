import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Service.module.css";

export default function ServicePage() {
    const processes = [
        {
            number: "01",
            title: "예약 및 상담",
            description: <>고객센터나 홈페이지를 통해 문의하시면<br className="mobile-only-br" />
                담당 매니저가 친절히 상담해 드립니다.</>
        },
        {
            number: "02",
            title: "이동 지원",
            description: <>매니저가 자택으로 방문하여 병원까지<br className="mobile-only-br" />
                안전하게 동행하며 이동을 돕습니다.</>
        },
        {
            number: "03",
            title: "진료 접수/대기",
            description: <>병원 도착 후 진료 접수부터 대기 시간까지<br className="mobile-only-br" />
                곁에서 편안하게 함께합니다.</>
        },
        {
            number: "04",
            title: "수납 및 약국 동행",
            description: <>진료가 끝난 후 수납 절차를 돕고, <br className="mobile-only-br" />약국에서 처방전을 일일이 챙겨드립니다.</>
        },
        {
            number: "05",
            title: "안전한 귀가",
            description: <>모든 일정을 마친 후 다시 댁까지 안전하게<br className="mobile-only-br" />
                모셔다 드립니다.</>
        },
        {
            number: "06",
            title: "사후 리포트",
            description: <>보호자분께 진료 내용과 특이사항을<br className="mobile-only-br" />
                정리하여 상세하게 보고해 드립니다.</>
        }
    ];

    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold" style={{ fontWeight: 'bold' }}>병원동행 서비스</h2>
                    <p>Hospital Accompaniment Service</p>
                </div>
            </div>

            <div className={styles.middleImageSection}>
                <div className="container">
                    <img src="/Gemini_Generated_Image_5gx8c75gx8c75gx8.png" alt="Service Feature" className={styles.middleImage} />
                </div>
            </div>

            <section className={styles.introSection}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h3 className="heading-decorate heading-decorate-center text-bold">신속하고 진실된 서비스를 선보이는<br />성심 병원동행 서비스</h3>
                        <p className="intro-text" style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-main)', marginTop: '20px' }}>
                            현대사회는 고령화 시대라는 새로운 도전에<br className="mobile-only-br" />
                            직면하고 있습니다.<br />
                            고령화 시대 도움이 필요한 어르신들에게 전문적인<br className="mobile-only-br" />
                            병원동행 서비스를 제공하여 어르신들의 삶의 질<br className="mobile-only-br" />
                            향상을 위해 노력하는 성심 병원동행 서비스 매니저입니다.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.textContent}>
                            <h4 className="text-bold" style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--brand-blue)' }}>
                                믿고 맡길 수 있는 전문 서비스
                            </h4>
                            <p style={{ lineHeight: '1.9', marginBottom: '20px' }}>
                                믿고 우리 부모님에게 서비스를 제공할 병원동행 매니저를 통해 어르신들의 행복한 노후 생활을 지원할 수 있도록
                                지속적인 노력과 친근하고 전문적인 서비스를 제공하기 위하여 항상 최선의 노력을 다하겠습니다.
                            </p>
                            <p style={{ lineHeight: '1.9', marginBottom: '20px' }}>
                                저희 성심 병원동행 서비스는 어르신들의 안녕과 행복을 최우선으로 생각하며,
                                어르신들에게 편안하고 안전한 일상생활을 제공하기 위해 최선을 다하고 있습니다.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="/Gemini_Generated_Image_l5yyhdl5yyhdl5yy.png" alt="Hospital Service" />
                        </div>
                    </div>

                    <div className={styles.grid} style={{ marginTop: '60px', flexDirection: 'row-reverse' }}>
                        <div className={styles.textContent}>
                            <h4 className="text-bold" style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--brand-blue)' }}>
                                검증된 전문 매니저
                            </h4>
                            <p style={{ lineHeight: '1.9', marginBottom: '20px' }}>
                                병원동행 서비스 매니저는 검증된 교육기관으로부터 수료증을 수료한 믿을 수 있는 전문가입니다.
                            </p>
                            <p style={{ lineHeight: '1.9', marginBottom: '20px' }}>
                                따뜻한 마음과 책임감으로 일상생활 도움 등 다양한 영역에서 도움을 제공하고,
                                어르신들과의 상호작용과 의사소통에 능숙하며 친근하고 전문적인 서비스를 제공하고 있습니다.
                            </p>
                            <div style={{ marginTop: '30px' }}>
                                <a href="/contact" className="btn-clinix">문의하기</a>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="/Gemini_Generated_Image_yl0bahyl0bahyl0b.png" alt="Professional Manager" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h3 className="text-bold">서비스 진행 절차</h3>
                        <p>성심동행케어(주)의 병원동행 서비스는 체계적이고 투명하게 진행됩니다.</p>
                    </div>

                    <div className={styles.processGrid}>
                        {processes.map((process) => (
                            <div key={process.number} className={styles.processItem}>
                                <span className={styles.processNumber}>{process.number}</span>
                                <h4>{process.title}</h4>
                                <p>{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
