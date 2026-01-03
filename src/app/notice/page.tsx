import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Notice.module.css";
import Link from "next/link";

export default function NoticePage() {
    const notices = [
        {
            id: 1,
            type: "공지",
            title: "[필독] 2026년 설 연휴 서비스 운영 안내",
            date: "2025.12.28",
            view: 124
        },
        {
            id: 2,
            type: "업데이트",
            title: "홈페이지 리뉴얼 및 앱 업데이트 안내",
            date: "2025.12.20",
            view: 85
        },
        {
            id: 3,
            type: "공지",
            title: "겨울철 한파 대비 서비스 이용 시 주의사항",
            date: "2025.12.10",
            view: 210
        }
    ];

    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>공지사항</h2>
                    <p style={{ color: 'white' }}>Notice</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <table className={styles.noticeTable}>
                        <thead>
                            <tr>
                                <th style={{ width: '80px' }} className={styles.hideMobile}>번호</th>
                                <th>제목</th>
                                <th style={{ width: '120px' }}>날짜</th>
                                <th style={{ width: '80px' }} className={styles.hideMobile}>조회</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice) => (
                                <tr key={notice.id}>
                                    <td className={styles.hideMobile}>{notice.id}</td>
                                    <td>
                                        <span className={`${styles.tag} ${notice.type === '공지' ? styles.tagNotice : styles.tagUpdate}`}>
                                            {notice.type}
                                        </span>
                                        <Link href={`/notice/${notice.id}`}>{notice.title}</Link>
                                    </td>
                                    <td>{notice.date}</td>
                                    <td className={styles.hideMobile}>{notice.view}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <Footer />
        </main>
    );
}
