import Link from "next/link";
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            {/* Local images or placeholder can be added here */}
            <header className={styles.heroContent}>
                <div className={`${styles.content} container`}>
                    <div className={styles.caption}>
                        <h3 className="heading-decorate text-uppercase">Expert Care Services</h3>
                        <h1 className={styles.headline}>다시 안녕을 묻다.</h1>
                        <p className={styles.subText}>
                            보호자가 안심할 수 있는 최고의 <br className="mobile-only-br" />
                            병원 동행 및 케어 서비스를 <br className="mobile-only-br" />
                            제공합니다.
                        </p>
                        <Link href="/appointment" className="btn-clinix">상담 신청하기</Link>
                    </div>
                    <div className={styles.scrollDown}>
                        <p>Scroll Down</p>
                        <div className={styles.arrow}>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Hero;
