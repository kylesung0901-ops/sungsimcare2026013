import styles from './TrainingSection.module.css';

const trainingList = [
    {
        title: '병원동행 매니저',
        description: <>병원 가는 길부터 귀가까지 이동과 진료의 <br className="mobile-only-br" />모든 과정을 함께하는 전문 동행 서비스</>,
        img: '/Gemini_Generated_Image_rx3kzhrx3kzhrx3k.png',
    },
    {
        title: '케어 매니저',
        description: <>초고령사회가 필요로 하는 돌봄 전문가 어르신의 <br className="mobile-only-br" />존엄한 삶을 지키는 케어 전문가</>,
        img: '/Gemini_Generated_Image_v4mn50v4mn50v4mn.png',
    },
    {
        title: '통합돌봄 매니저',
        description: <>의료·복지·주거·돌봄을 연결하는 지역사회 <br className="mobile-only-br" />통합돌봄의 핵심 코디네이터</>,
        img: '/Gemini_Generated_Image_zmlf2zmlf2zmlf2z.png',
    },
];

const TrainingSection = () => {
    return (
        <section className={styles.training}>
            <div className={`${styles.container} container`}>
                <div className={styles.header}>
                    <h2 className="heading-decorate heading-decorate-center text-uppercase text-center">WHAT WE DO</h2>
                    <p className={styles.descriptionCenter}>
                        성심동행케어(주)와 함께 최고의 <br className="mobile-only-br" />
                        전문가로 성장하세요.
                    </p>
                </div>
                <div className={styles.grid}>
                    {trainingList.map((item) => (
                        <div key={item.title} className={styles.card}>
                            <div
                                className={styles.image}
                                style={{ backgroundImage: `url(${item.img})` }}
                            ></div>
                            <div className={styles.info}>
                                <h5 className="text-bold color-blue">{item.title}</h5>
                                <p className={styles.description}>{item.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
