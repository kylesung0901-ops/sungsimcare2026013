"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, logout } = useAuth();

  const mainMenuItems = [
    { name: '병원동행 서비스', href: '/service' },
    { name: '따뜻한 동행', href: '/story' },
    { name: '서비스 요금', href: '/price' },
  ];

  const secondaryMenuItems = [
    ...(user ? [] : [
      { name: '로그인', href: '/login' },
      { name: '회원가입', href: '/signup' },
    ]),
    { name: 'FAQ', href: '/faq' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`${styles.container} container`}>
          <div className={styles.topInfo}>
          </div>
          <div className={styles.topContact}>
            <span><i className="fas fa-phone"></i> 010-5756-9857</span>
            <span><i className="fas fa-envelope"></i> contact@sungsim.care</span>
          </div>
        </div>
      </div>

      <nav id="sticktop" className={styles.mainNavContainer}>
        <div className={`${styles.container} container`}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/logo.png" alt="주식회사 안녕 로고" className={styles.logoImage} />
            </Link>
          </div>

          <div className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
            <div className={styles.navGroups}>
              <ul className={styles.mainNav}>
                {mainMenuItems.map((item) => (
                  <li key={item.name} className={styles.navItem}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.secondaryNav}>
                {secondaryMenuItems.map((item) => (
                  <li key={item.name} className={styles.navItem}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
                {user && (
                  <>
                    {isAdmin && (
                      <li className={styles.navItem}>
                        <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                          관리자
                        </Link>
                      </li>
                    )}
                    <li className={styles.navItem}>
                      <button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', textTransform: 'uppercase' }}>
                        로그아웃
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/contact" className="btn-clinix">
              문의하기
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
