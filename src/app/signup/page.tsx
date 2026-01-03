import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../login/Auth.module.css";
import Link from "next/link";

export default function SignupPage() {
    return (
        <main>
            <Header />
            <section className={styles.loginSection}>
                <div className={styles.authCard}>
                    <div className={styles.authHeader}>
                        <h2>회원가입</h2>
                        <p>따뜻한 동행의 가족이 되어주세요.</p>
                    </div>

                    <form>
                        <div className={styles.formGroup}>
                            <label>성함</label>
                            <input type="text" placeholder="이름을 입력해 주세요" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>아이디 (이메일)</label>
                            <input type="email" placeholder="example@sungsim.care" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>연락처</label>
                            <input type="text" placeholder="'-'없이 숫자만 입력해 주세요" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>비밀번호</label>
                            <input type="password" placeholder="8자 이상 입력해 주세요" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>비밀번호 확인</label>
                            <input type="password" placeholder="비밀번호를 다시 입력해 주세요" />
                        </div>
                        <button type="submit" className="btn-clinix" style={{ width: '100%', padding: '15px' }}>
                            가입하기
                        </button>
                    </form>

                    <div className={styles.links}>
                        <span>이미 계정이 있으신가요?</span>
                        <Link href="/login">로그인</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
