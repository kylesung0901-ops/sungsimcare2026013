"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './Statistics.module.css';

const Counter = ({ end, duration }: { end: number; duration: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <div ref={countRef}>{count.toLocaleString()}+</div>;
};

const Statistics = () => {
    return (
        <section className={styles.statistics}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.statItem} ${styles.bgBlue1}`}>
                    <h6 className="text-uppercase text-bold heading-decorate">누적 동행</h6>
                    <div className={styles.number}>
                        <Counter end={7800} duration={2000} />
                    </div>
                    <p className={styles.label}>누적된 행복한 동행 사례</p>
                </div>
                <div className={`${styles.statItem} ${styles.bgBlue2}`}>
                    <h6 className="text-uppercase text-bold heading-decorate">전문 매니저</h6>
                    <div className={styles.number}>
                        <Counter end={250} duration={2000} />
                    </div>
                    <p className={styles.label}>함께하는 병원동행 전문가</p>
                </div>
                <div className={`${styles.statItem} ${styles.bgBlue3}`}>
                    <h6 className="text-uppercase text-bold heading-decorate">평균 만족도</h6>
                    <div className={styles.number}>
                        <Counter end={98} duration={2000} />
                    </div>
                    <p className={styles.label}>고객분들이 평가해주신 만족도(%)</p>
                </div>
                <div className={`${styles.statItem} ${styles.bgBlue4}`}>
                    <h6 className="text-uppercase text-bold heading-decorate">서비스 지역</h6>
                    <div className={styles.number}>
                        <Counter end={12} duration={2000} />
                    </div>
                    <p className={styles.label}>현재 서비스 중인 주요 도시</p>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
