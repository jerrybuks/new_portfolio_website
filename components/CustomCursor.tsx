'use client';

import { useEffect, useState } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        setIsMobile(window.innerWidth <= 768);

        // Add event listeners for hover states
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Don't render on mobile
    if (isMobile) return null;

    return (
        <>
            <div
                className={`${styles.cursor} ${isHovering ? styles.cursorHover : ''}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            />
            <div
                className={`${styles.cursorDot} ${isHovering ? styles.dotHover : ''}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            />
        </>
    );
}
