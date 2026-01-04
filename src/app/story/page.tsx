import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./SubPage.module.css";

export default function StoryPage() {
    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold">따뜻한 동행</h2>
                    <p>Story of Warm Companion</p>
                </div>
            </div>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.fullContent}>
                        <h3 className="heading-decorate text-bold">"혼자서는 어려운 순간 성심동행케어(주)가 곁에 있어요"</h3>
                        <p className={styles.mainText}>
                            나이가 들수록, 혹은 몸이 불편할수록 병원 가는 길은 멀고 험난하게 느껴집니다.<br />
                            성심동행케어(주)는 이러한 어려움을 겪는 분들을 위해 시작되었습니다.
                        </p>
                        <p>
                            단순히 차량으로 모셔다드리는 것을 넘어, 집을 나서는 순간부터 진료실에서의 상담,
                            그리고 다시 따뜻한 집으로 돌아오기까지의 전 과정을 가족의 마음으로 함께합니다.
                        </p>

                        <div className={styles.values}>
                            <div className={styles.valueItem}>
                                <h5 className="text-bold color-blue">신뢰 (Trust)</h5>
                                <p>정직한 서비스로 고객의 믿음에 보답합니다.</p>
                            </div>
                            <div className={styles.valueItem}>
                                <h5 className="text-bold color-blue">혁신 (Innovation)</h5>
                                <p>더 나은 돌봄 문화를 위해 끊임없이 고민합니다.</p>
                            </div>
                            <div className={styles.valueItem}>
                                <h5 className="text-bold color-blue">공감 (Empathy)</h5>
                                <p>따뜻한 마음으로 세상의 온기를 더합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
