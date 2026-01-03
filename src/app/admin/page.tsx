"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from '@/contexts/AuthContext';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { app } from '@/lib/firebase';
import styles from "./Admin.module.css";

interface ContactData {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    createdAt: any;
}

interface SignupData {
    id: string;
    email: string;
    name: string;
    phone: string;
    createdAt: any;
}

interface AppointmentData {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    message: string;
    createdAt: any;
}

export default function AdminPage() {
    const { user, isAdmin, loading } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('contacts');
    const [contacts, setContacts] = useState<ContactData[]>([]);
    const [signups, setSignups] = useState<SignupData[]>([]);
    const [appointments, setAppointments] = useState<AppointmentData[]>([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        if (!loading && (!user || !isAdmin)) {
            router.push('/login');
        }
    }, [user, isAdmin, loading, router]);

    useEffect(() => {
        if (user && isAdmin) {
            loadData();
        }
    }, [user, isAdmin]);

    const loadData = async () => {
        try {
            const db = getFirestore(app);

            // Load contacts
            const contactsQuery = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
            const contactsSnapshot = await getDocs(contactsQuery);
            const contactsData = contactsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as ContactData[];
            setContacts(contactsData);

            // Load signups
            const signupsQuery = query(collection(db, 'signups'), orderBy('createdAt', 'desc'));
            const signupsSnapshot = await getDocs(signupsQuery);
            const signupsData = signupsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as SignupData[];
            setSignups(signupsData);

            // Load appointments
            const appointmentsQuery = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'));
            const appointmentsSnapshot = await getDocs(appointmentsQuery);
            const appointmentsData = appointmentsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as AppointmentData[];
            setAppointments(appointmentsData);

            setDataLoading(false);
        } catch (error) {
            console.error('데이터 로드 실패:', error);
            setDataLoading(false);
        }
    };

    const formatDate = (timestamp: any) => {
        if (!timestamp) return '-';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('ko-KR') + ' ' + date.toLocaleTimeString('ko-KR');
    };

    if (loading || !user || !isAdmin) {
        return null;
    }

    return (
        <main className={styles.adminDashboard}>
            <Header />
            <div className={styles.container}>
                <div className={styles.dashboardHeader}>
                    <h1>관리자 대시보드</h1>
                    <p>고객 문의 및 상담 신청 관리</p>
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3>총 문의</h3>
                        <div className={styles.number}>{contacts.length}</div>
                    </div>
                    <div className={styles.statCard}>
                        <h3>회원가입</h3>
                        <div className={styles.number}>{signups.length}</div>
                    </div>
                    <div className={styles.statCard}>
                        <h3>상담 신청</h3>
                        <div className={styles.number}>{appointments.length}</div>
                    </div>
                </div>

                <div className={styles.tabsContainer}>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'contacts' ? styles.active : ''}`}
                            onClick={() => setActiveTab('contacts')}
                        >
                            문의 내역 ({contacts.length})
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'appointments' ? styles.active : ''}`}
                            onClick={() => setActiveTab('appointments')}
                        >
                            상담 신청 ({appointments.length})
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'signups' ? styles.active : ''}`}
                            onClick={() => setActiveTab('signups')}
                        >
                            회원가입 ({signups.length})
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {dataLoading ? (
                            <div className={styles.emptyState}>
                                <i className="fas fa-spinner fa-spin"></i>
                                <p>데이터를 불러오는 중...</p>
                            </div>
                        ) : (
                            <>
                                {activeTab === 'contacts' && (
                                    <>
                                        {contacts.length === 0 ? (
                                            <div className={styles.emptyState}>
                                                <i className="fas fa-inbox"></i>
                                                <p>아직 문의 내역이 없습니다.</p>
                                            </div>
                                        ) : (
                                            <table className={styles.dataTable}>
                                                <thead>
                                                    <tr>
                                                        <th>이름</th>
                                                        <th>이메일</th>
                                                        <th>전화번호</th>
                                                        <th>문의 내용</th>
                                                        <th>접수일</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {contacts.map((contact) => (
                                                        <tr key={contact.id}>
                                                            <td>{contact.name}</td>
                                                            <td>{contact.email}</td>
                                                            <td>{contact.phone}</td>
                                                            <td>{contact.message}</td>
                                                            <td>{formatDate(contact.createdAt)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )}
                                    </>
                                )}

                                {activeTab === 'appointments' && (
                                    <>
                                        {appointments.length === 0 ? (
                                            <div className={styles.emptyState}>
                                                <i className="fas fa-calendar-alt"></i>
                                                <p>아직 상담 신청 내역이 없습니다.</p>
                                            </div>
                                        ) : (
                                            <table className={styles.dataTable}>
                                                <thead>
                                                    <tr>
                                                        <th>이름</th>
                                                        <th>이메일</th>
                                                        <th>전화번호</th>
                                                        <th>서비스</th>
                                                        <th>희망일</th>
                                                        <th>메시지</th>
                                                        <th>신청일</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {appointments.map((appointment) => (
                                                        <tr key={appointment.id}>
                                                            <td>{appointment.name}</td>
                                                            <td>{appointment.email}</td>
                                                            <td>{appointment.phone}</td>
                                                            <td>{appointment.service}</td>
                                                            <td>{appointment.date}</td>
                                                            <td>{appointment.message}</td>
                                                            <td>{formatDate(appointment.createdAt)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )}
                                    </>
                                )}

                                {activeTab === 'signups' && (
                                    <>
                                        {signups.length === 0 ? (
                                            <div className={styles.emptyState}>
                                                <i className="fas fa-users"></i>
                                                <p>아직 회원가입 내역이 없습니다.</p>
                                            </div>
                                        ) : (
                                            <table className={styles.dataTable}>
                                                <thead>
                                                    <tr>
                                                        <th>이름</th>
                                                        <th>이메일</th>
                                                        <th>전화번호</th>
                                                        <th>가입일</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {signups.map((signup) => (
                                                        <tr key={signup.id}>
                                                            <td>{signup.name}</td>
                                                            <td>{signup.email}</td>
                                                            <td>{signup.phone}</td>
                                                            <td>{formatDate(signup.createdAt)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
