'use client';

import { useState, useEffect } from 'react';

export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
            setScrollProgress(progress);
        };

        updateScrollProgress();
        window.addEventListener('scroll', updateScrollProgress, { passive: true });

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return scrollProgress;
}
