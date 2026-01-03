import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Auth.module.css";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main>
            <Header />
            <section className={styles.loginSection}>
                <div className={styles.authCard}>
                    <div className={styles.authHeader}>
                        <h2>로그인</h2>
                        <p>다시 오신 것을 환영합니다!</p>
                    </div>

                    <form>
                        <div className={styles.formGroup}>
                            <label>아이디 (이메일)</label>
                            <input type="email" placeholder="example@sungsim.care" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>비밀번호</label>
                            <input type="password" placeholder="비밀번호를 입력해 주세요" />
                        </div>
                        <button type="submit" className="btn-clinix" style={{ width: '100%', padding: '15px' }}>
                            로그인
                        </button>
                    </form>

                    <div className={styles.links}>
                        <Link href="/signup">회원가입</Link>
                        <span>|</span>
                        <Link href="/forgot-password">비밀번호 찾기</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
