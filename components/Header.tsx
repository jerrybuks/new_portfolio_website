'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['experience', 'projects', 'skills', 'education', 'community', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={() => setActiveSection('')}>
                    JC.
                </Link>

                <div className={styles.mobileActions}>
                    <div className={styles.mobileThemeToggle}>
                        <ThemeToggle />
                    </div>
                    <button
                        className={styles.hamburger}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className={isMenuOpen ? styles.open : ''}></span>
                        <span className={isMenuOpen ? styles.open : ''}></span>
                        <span className={isMenuOpen ? styles.open : ''}></span>
                    </button>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        {['experience', 'projects', 'skills', 'education', 'community', 'contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={`#${item}`}
                                    onClick={closeMenu}
                                    className={`
                                        ${activeSection === item ? styles.active : ''}
                                        ${item === 'contact' ? styles.contactBtn : ''}
                                    `.trim()}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </li>
                        ))}
                        <li className={styles.desktopThemeToggle}><ThemeToggle /></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
