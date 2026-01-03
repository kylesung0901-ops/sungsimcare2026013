import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./News.module.css";
import Link from "next/link";

export default function NewsPage() {
    const newsItems = [
        {
            id: 1,
            title: "주식회사 안녕, '2025 사회공헌 우수기업' 대상 수상",
            date: "2025.12.20",
            image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            title: "[언론보도] 어르신 병원동행 서비스 '성심동행케어(주)', 이용자 만족도 98% 달성",
            date: "2025.12.15",
            image: "https://images.unsplash.com/photo-1505751172107-573525a7e9df?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 3,
            title: "따뜻한 동행, 지역사회 독거 노인을 위한 겨울맞이 나눔 행사 실시",
            date: "2025.12.05",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <main>
            <Header />
            <div className={styles.banner}>
                <div className="container">
                    <h2 className="text-uppercase text-bold color-white" style={{ color: 'white', fontWeight: 'bold' }}>따뜻한 뉴스</h2>
                    <p style={{ color: 'white' }}>Warm News</p>
                </div>
            </div>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.newsGrid}>
                        {newsItems.map((item) => (
                            <div key={item.id} className={styles.newsCard}>
                                <div className={styles.newsImage} style={{ backgroundImage: `url(${item.image})` }}></div>
                                <div className={styles.newsContent}>
                                    <div className={styles.newsDate}>{item.date}</div>
                                    <h4 className={styles.newsTitle}>{item.title}</h4>
                                    <Link href={`/news/${item.id}`} className={styles.readMore}>
                                        자세히 보기 <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
