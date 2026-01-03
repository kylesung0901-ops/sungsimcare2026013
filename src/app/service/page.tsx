import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Service.module.css";

export default function ServicePage() {
    const processes = [
        {
            number: "01",
            title: "예약 및 상담",
            description: "고객센터나 홈페이지를 통해 문의하시면 담당 매니저가 친절히 상담해 드립니다."
        },
        {
            number: "02",
            title: "이동 지원",
            description: "매니저가 자택으로 방문하여 병원까지 안전하게 동행하며 이동을 돕습니다."
        },
        {
            number: "03",
            title: "진료 접수/대기",
            description: "병원 도착 후 진료 접수부터 대기 시간까지 곁에서 편안하게 함께합니다."
        },
        {
            number: "04",
            title: "수납 및 약국 동행",
            description: "진료가 끝난 후 수납 절차를 돕고, 약국에서 처방전을 일일이 챙겨드립니다."
        },
        {
            number: "05",
            title: "안전한 귀가",
            description: "모든 일정을 마친 후 다시 댁까지 안전하게 모셔다 드립니다."
        },
        {
            number: "06",
            title: "사후 리포트",
            description: "보호자분께 진료 내용과 특이사항을 정리하여 상세하게 보고해 드립니다."
        }
    ];

    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>병원동행 서비스</h2>
                    <p style={{ color: 'white' }}>Hospital Accompaniment Service</p>
                </div>
            </div>

            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textContent}>
                            <h3 className="heading-decorate text-bold">"집에서 병원, 다시 집으로!<br />부모님의 병원 가는 길을 책임집니다."</h3>
                            <p>
                                거동이 불편하시거나 혼자 병원 가기 두려운 어르신들을 위해,<br />
                                자택 출발부터 진료 후 귀가까지 전 과정을 전문 매니저가 동행합니다.
                            </p>
                            <p>
                                자녀분들이 바쁜 일상 속에서도 안심하실 수 있도록 실시간 상황 보고와<br />
                                상세한 진료 리포트를 제공해 드립니다.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" alt="Hospital Service" />
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
