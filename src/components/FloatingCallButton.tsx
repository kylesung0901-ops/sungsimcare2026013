'use client';

import React from 'react';
import styles from './FloatingCallButton.module.css';

const FloatingCallButton = () => {
    return (
        <a href="tel:010-9478-9857" className={styles.floatingBtn}>
            <img
                src="/5585856.png"
                alt="전화하기"
                className={styles.icon}
            />
        </a>
    );
};

export default FloatingCallButton;
