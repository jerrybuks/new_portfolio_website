'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element || hasAnimated) return;

        const checkIfInView = () => {
            if (hasAnimated) return;

            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isInView = rect.top <= windowHeight * 0.85 && rect.bottom >= 0;

            if (isInView) {
                setHasAnimated(true);
            }
        };

        // Check on mount
        checkIfInView();

        // Check on scroll with throttling
        let ticking = false;
        const handleScroll = () => {
            if (!ticking && !hasAnimated) {
                window.requestAnimationFrame(() => {
                    checkIfInView();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAnimated]);

    // Return hasAnimated - once true, always true (persists through re-renders)
    return { elementRef, isVisible: hasAnimated };
};
