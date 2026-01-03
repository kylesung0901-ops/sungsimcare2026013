"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from '@/contexts/AuthContext';
import styles from "./Auth.module.css";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            router.push('/');
        } catch (err: any) {
            setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <Header />
            <section className={styles.loginSection}>
                <div className={styles.authCard}>
                    <div className={styles.authHeader}>
                        <h2>로그인</h2>
                        <p>다시 오신 것을 환영합니다!</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                        <div className={styles.formGroup}>
                            <label>아이디 (이메일)</label>
                            <input
                                type="email"
                                placeholder="example@sungsim.care"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>비밀번호</label>
                            <input
                                type="password"
                                placeholder="비밀번호를 입력해 주세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-clinix"
                            style={{ width: '100%', padding: '15px' }}
                            disabled={loading}
                        >
                            {loading ? '로그인 중...' : '로그인'}
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
