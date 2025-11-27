'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Community.module.css';

const activities = [
    {
        organization: "Genesys Tech Hub Mentor",
        period: "2022 - Present",
        description: "Mentoring aspiring developers in front-end and back-end development, guiding them through their learning journey.",
        images: ["/genesys-1.jpg", "/genesys-2.jpg", "/genesys-3.jpg"]
    },
    {
        organization: "Andela Learning Facilitator",
        period: "2019 - 2020",
        description: "Facilitated tech meetups and learning sessions, helping developers grow their skills and connect with the community.",
        images: ["/andela-1.jpg", "/andela-2.jpg", "/andela-3.jpg"]
    }
];

export default function Community() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
    };

    return (
        <section id="community" className="section">
            <div className="container">
                <h2 className={styles.heading}>Community Involvement</h2>

                <div className={styles.carouselContainer}>
                    <button onClick={prevSlide} className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Previous slide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className={styles.carouselTrack}>
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                                style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
                            >
                                <div className={styles.card}>
                                    <div className={styles.content}>
                                        <span className={styles.period}>{activity.period}</span>
                                        <h3 className={styles.organization}>{activity.organization}</h3>
                                        <p className={styles.description}>{activity.description}</p>
                                    </div>

                                    <div className={styles.visual}>
                                        <div className={`${styles.collage} ${styles['collage-' + index]}`}>
                                            {activity.images.map((image, imgIndex) => (
                                                <div key={imgIndex} className={`${styles.imageWrapper} ${styles['img-' + imgIndex]}`}>
                                                    <Image
                                                        src={image}
                                                        alt={`${activity.organization} ${imgIndex + 1}`}
                                                        fill
                                                        className={styles.image}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={nextSlide} className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Next slide">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    <div className={styles.indicators}>
                        {activities.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
