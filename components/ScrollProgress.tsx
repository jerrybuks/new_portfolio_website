'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './ScrollProgress.module.css';

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <div className={styles.progressBar}>
            <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
