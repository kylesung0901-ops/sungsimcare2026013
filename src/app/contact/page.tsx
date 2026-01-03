"use client";

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '@/lib/firebase';
import styles from "./Contact.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const db = getFirestore(app);
            await addDoc(collection(db, 'contacts'), {
                ...formData,
                createdAt: serverTimestamp()
            });

            setSuccess(true);
            setFormData({ name: '', phone: '', email: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            console.error('문의 전송 실패:', err);
            setError('문의 전송에 실패했습니다. 다시 시도해주세요.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                            {success && (
                                <div style={{ padding: '15px', marginBottom: '20px', background: '#e8f5e9', color: '#388e3c', borderRadius: '4px', textAlign: 'center' }}>
                                    문의가 성공적으로 전송되었습니다!
                                </div>
                            )}
                            {error && (
                                <div style={{ padding: '15px', marginBottom: '20px', background: '#ffebee', color: '#c62828', borderRadius: '4px', textAlign: 'center' }}>
                                    {error}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
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
                                    <label>이메일</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>문의 내용</label>
                                    <textarea
                                        name="message"
                                        placeholder="문의 내용을 상세히 작성해 주세요"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn-clinix"
                                    style={{ width: '100%' }}
                                    disabled={loading}
                                >
                                    {loading ? '전송 중...' : '문의 보내기'}
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
