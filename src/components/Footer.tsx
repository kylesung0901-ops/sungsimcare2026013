import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.column}>
                    <h6 className="heading-decorate text-uppercase">ABOUT SUNGSIM</h6>
                    <p>성심동행케어(주)는 보호자가 안심할 수 있는 최고의 <br className="pc-only-br" />병원 동행 서비스를 제공하는 차세대 돌봄 플랫폼입니다.</p>
                </div>

                <div className={styles.column}>
                    <h6 className="heading-decorate text-uppercase">TAGS</h6>
                    <div className={styles.tags}>
                        <span>병원동행</span>
                        <span>케어매니저</span>
                        <span>돌봄</span>
                        <span>전문가</span>
                        <span>안심서비스</span>
                    </div>
                </div>

                <div className={styles.column}>
                    <h6 className="heading-decorate text-uppercase">RECENT POSTS</h6>
                    <ul className={styles.postsList}>
                        <li><a href="#">새로운 병원동행 서비스 런칭 안내</a></li>
                        <li><a href="#">케어매니저 정기 교육 세션 안내</a></li>
                        <li><a href="#">성심케어와 함께하는 건강한 동행</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h6 className="heading-decorate text-uppercase">CONTACT US</h6>
                    <p>대표: 심형준</p>
                    <p>전화: 010-9478-9857</p>
                    <p>이메일: contact@sungsim.care</p>
                    <p>주소: (업데이트 예정)</p>
                    <p>사업자등록번호: (업데이트 예정)</p>
                </div>
            </div>
            <div className={`${styles.rights} container`}>
                <p>Copyright © 2026 성심동행케어(주) All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
