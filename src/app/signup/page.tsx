"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '@/lib/firebase';
import styles from "../login/Auth.module.css";
import Link from "next/link";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (formData.password.length < 8) {
            setError('비밀번호는 8자 이상이어야 합니다.');
            return;
        }

        setLoading(true);

        try {
            const auth = getAuth(app);
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Store additional user data in Firestore
            const db = getFirestore(app);
            await addDoc(collection(db, 'signups'), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                userId: userCredential.user.uid,
                createdAt: serverTimestamp()
            });

            router.push('/');
        } catch (err: any) {
            console.error('회원가입 실패:', err);
            if (err.code === 'auth/email-already-in-use') {
                setError('이미 사용 중인 이메일입니다.');
            } else if (err.code === 'auth/invalid-email') {
                setError('유효하지 않은 이메일 형식입니다.');
            } else {
                setError('회원가입에 실패했습니다. 다시 시도해주세요.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main>
            <Header />
            <section className={styles.loginSection}>
                <div className={styles.authCard}>
                    <div className={styles.authHeader}>
                        <h2>회원가입</h2>
                        <p>따뜻한 동행의 가족이 되어주세요.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{error}</div>}
                        <div className={styles.formGroup}>
                            <label>성함</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="이름을 입력해 주세요"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>아이디 (이메일)</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@sungsim.care"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>연락처</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="'-'없이 숫자만 입력해 주세요"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>비밀번호</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="8자 이상 입력해 주세요"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>비밀번호 확인</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="비밀번호를 다시 입력해 주세요"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-clinix"
                            style={{ width: '100%', padding: '15px' }}
                            disabled={loading}
                        >
                            {loading ? '가입 중...' : '가입하기'}
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
