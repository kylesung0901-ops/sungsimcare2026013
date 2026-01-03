import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css";

export default function ContactPage() {
    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>문의하기</h2>
                    <p style={{ color: 'white' }}>Contact person</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.contactInfo}>
                            <h3 className="heading-decorate text-bold">"궁금하신 점이 있다면<br />언제든 문의해 주세요"</h3>
                            <p>성심동행케어(주)는 여러분의 목소리에 귀를 기울입니다. 서비스 이용 관련 문의부터 채용 정보까지 무엇이든 물어보세요.</p>

                            <div style={{ marginTop: '40px' }}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><i className="fas fa-phone"></i></div>
                                    <div>
                                        <h5 className="text-bold">대표 번호</h5>
                                        <p>010-5756-9857 (평일 09:00 ~ 18:00)</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><i className="fas fa-envelope"></i></div>
                                    <div>
                                        <h5 className="text-bold">이메일</h5>
                                        <p>contact@sungsim.care</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><i className="fas fa-map-marker-alt"></i></div>
                                    <div>
                                        <h5 className="text-bold">본사 위치</h5>
                                        <p>(업데이트 예정)</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><i className="fas fa-user"></i></div>
                                    <div>
                                        <h5 className="text-bold">대표자</h5>
                                        <p>심형준</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <form>
                                <div className={styles.formGroup}>
                                    <label>성함</label>
                                    <input type="text" placeholder="이름을 입력해 주세요" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>연락처</label>
                                    <input type="text" placeholder="'-'없이 숫자만 입력해 주세요" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>문의 유형</label>
                                    <input type="text" placeholder="서비스 문의, 채용 문의 등" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>문의 내용</label>
                                    <textarea placeholder="문의 내용을 상세히 작성해 주세요"></textarea>
                                </div>
                                <button type="submit" className="btn-clinix" style={{ width: '100%' }}>
                                    문의 보내기
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
