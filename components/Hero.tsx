'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function Hero() {
    const scrollProgress = useScrollProgress();
    const primaryBtnRef = useRef<HTMLAnchorElement>(null);
    const secondaryBtnRef = useRef<HTMLAnchorElement>(null);
    const [primaryBtnPos, setPrimaryBtnPos] = useState({ x: 0, y: 0 });
    const [secondaryBtnPos, setSecondaryBtnPos] = useState({ x: 0, y: 0 });

    //  Magnetic button effect
    const handleMouseMove = (e: React.MouseEvent, btnRef: React.RefObject<HTMLAnchorElement | null>, setPos: (pos: { x: number, y: number }) => void) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPos({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = (setPos: (pos: { x: number, y: number }) => void) => {
        setPos({ x: 0, y: 0 });
    };

    // Parallax effect - background moves slower than content
    const parallaxOffset = scrollProgress * 0.5;

    return (
        <section className={styles.hero}>
            {/* Animated grid background */}
            <div className={styles.gridBackground} style={{ transform: `translateY(${parallaxOffset}px)` }}>
                <div className={styles.gridPattern}></div>
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={`${styles.greeting} animate-fade-up delay-100`}>Hello, I'm</h2>
                    <h1 className={`${styles.name} animate-fade-up delay-200`}>Jerry Chibuokem</h1>
                    <h3 className={`${styles.title} animate-fade-up delay-300`}>Software & Blockchain Architect</h3>
                    <p className={`${styles.description} animate-fade-up delay-400`}>
                        Software Engineer & Architect with 7 years of experience building and scaling web and blockchain applications.
                    </p>
                    <div className={`${styles.actions} animate-fade-up delay-500`}>
                        <a
                            href="#projects"
                            ref={primaryBtnRef}
                            className={styles.primaryBtn}
                            onMouseMove={(e) => handleMouseMove(e, primaryBtnRef, setPrimaryBtnPos)}
                            onMouseLeave={() => handleMouseLeave(setPrimaryBtnPos)}
                            style={{
                                transform: `translate(${primaryBtnPos.x}px, ${primaryBtnPos.y}px)`
                            }}
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            ref={secondaryBtnRef}
                            className={styles.secondaryBtn}
                            onMouseMove={(e) => handleMouseMove(e, secondaryBtnRef, setSecondaryBtnPos)}
                            onMouseLeave={() => handleMouseLeave(setSecondaryBtnPos)}
                            style={{
                                transform: `translate(${secondaryBtnPos.x}px, ${secondaryBtnPos.y}px)`
                            }}
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className={`${styles.visual} animate-scale-in delay-300`}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.glow}></div>
                        <Image
                            src="/profile-v2.jpg"
                            alt="Jerry Chibuokem"
                            width={300}
                            height={300}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
