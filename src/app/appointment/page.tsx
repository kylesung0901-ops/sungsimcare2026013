import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../contact/Contact.module.css"; // Reuse contact styles

export default function AppointmentPage() {
    return (
        <main>
            <Header />
            <div className={styles.banner} style={{ backgroundImage: 'linear-gradient(rgba(39, 77, 168, 0.8), rgba(39, 77, 168, 0.8)), url("https://images.unsplash.com/photo-1549213821-4708d624e1d1?auto=format&fit=crop&w=1600&q=80")' }}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>상담 예약하기</h2>
                    <p style={{ color: 'white' }}>Service Appointment</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h3 className="heading-decorate heading-decorate-center text-bold">상담 신청서 작성</h3>
                        <p>전문 상담사가 확인 후 전화를 드립니다.</p>
                    </div>

                    <div className={styles.formCard}>
                        <form>
                            <div className={styles.formGroup}>
                                <label>보호자 성함</label>
                                <input type="text" placeholder="보호자 성함을 입력해 주세요" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>보호자 연락처</label>
                                <input type="text" placeholder="'-'없이 숫자만 입력해 주세요" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>희망 상담 일시</label>
                                <input type="datetime-local" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>어르신 성함 (선택)</label>
                                <input type="text" placeholder="어르신 성함을 입력해 주세요" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>주요 질환 또는 증상</label>
                                <textarea placeholder="상담에 필요한 정보를 간단히 작성해 주세요"></textarea>
                            </div>
                            <button type="submit" className="btn-clinix" style={{ width: '100%' }}>
                                상담 예약 신청
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
