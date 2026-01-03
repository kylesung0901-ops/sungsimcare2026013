"use client";

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '@/lib/firebase';
import styles from "../contact/Contact.module.css"; // Reuse contact styles

export default function AppointmentPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        service: '병원동행',
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
            await addDoc(collection(db, 'appointments'), {
                ...formData,
                createdAt: serverTimestamp()
            });

            setSuccess(true);
            setFormData({ name: '', phone: '', email: '', date: '', service: '병원동행', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            console.error('상담 신청 실패:', err);
            setError('상담 신청에 실패했습니다. 다시 시도해주세요.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                        {success && (
                            <div style={{ padding: '15px', marginBottom: '20px', background: '#e8f5e9', color: '#388e3c', borderRadius: '4px', textAlign: 'center' }}>
                                상담 신청이 성공적으로 접수되었습니다!
                            </div>
                        )}
                        {error && (
                            <div style={{ padding: '15px', marginBottom: '20px', background: '#ffebee', color: '#c62828', borderRadius: '4px', textAlign: 'center' }}>
                                {error}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label>보호자 성함</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="보호자 성함을 입력해 주세요"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>보호자 연락처</label>
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
                                <label>희망 상담 일시</label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>서비스 종류</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}
                                    required
                                >
                                    <option value="병원동행">병원동행 서비스</option>
                                    <option value="케어매니저">케어매니저</option>
                                    <option value="통합돌봄">통합돌봄</option>
                                    <option value="기타">기타 문의</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label>주요 질환 또는 증상</label>
                                <textarea
                                    name="message"
                                    placeholder="상담에 필요한 정보를 간단히 작성해 주세요"
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
                                {loading ? '신청 중...' : '상담 예약 신청'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
