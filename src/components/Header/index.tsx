import React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.png';

export default function Header() {
    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={Logo}
                alt="Logo"
                height={40}
                width={40}
            />
            <span className={styles.headerText}>Blood pressure monitor</span>
        </div>
    );
}
