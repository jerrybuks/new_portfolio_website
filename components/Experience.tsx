'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Experience.module.css';

const experiences = [
    {
        role: "CTO, Co-founder",
        company: "Panenka FC",
        period: "2023/10 – Present",
        location: "Singapore",
        description: [
            "Led end-to-end technical strategy and product development, scaling to 200K+ registered users.",
            "Architected high-performance backend infrastructure for thousands of concurrent users.",
            "Implemented innovative fan engagement systems increasing retention by 25%.",
            "Delivered production-grade smart contracts on Concordium, XDC, CAMP, and StarkNet."
        ]
    },
    {
        role: "Engineering Lead",
        company: "Crowdr",
        period: "2023/04 – 2025/03",
        location: "Lagos, Nigeria",
        description: [
            "Co-founded & led the engineering team in launching Nigeria's first combined crowdfunding platform.",
            "Architected scalable payment system driving ₦50M+ in contributions.",
            "Built core platform features: campaign creation, donation tracking, and multi-device compatibility.",
            "Defined product roadmap and technical strategy aligned with Nigeria's regulatory requirements."
        ]
    },
    {
        role: "Software Engineer",
        company: "Andela — Placed at Coursera",
        period: "2021/10 – 2022/12",
        location: "California, United States (Remote)",
        description: [
            "Matched through Andela's talent network to work with Coursera's engineering team.",
            "Developed new features for educator's web app using React & TypeScript.",
            "Transformed rich text editing with accessibility improvements, boosting productivity by 15%.",
            "Improved workflows and accessibility in content creation tools."
        ]
    }
];

interface CardProps {
    experience: typeof experiences[0];
    index: number;
}

function ExperienceCard({ experience, index }: CardProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const { ref, isVisible } = useScrollReveal();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            className={`${styles.experienceWrapper} scroll-reveal-left ${isVisible ? 'revealed' : ''}`}
        >
            <div
                className={styles.item}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: isHovered
                        ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.02, 1.02, 1.02)`
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                    transition: isHovered ? 'none' : 'transform 0.3s ease-out'
                }}
            >
                <div className={styles.marker}></div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h3 className={styles.role}>{experience.role}</h3>
                        <span className={styles.company}>{experience.company}</span>
                    </div>
                    <div className={styles.meta}>
                        <span>{experience.period}</span>
                        <span>{experience.location}</span>
                    </div>
                    <ul className={styles.description}>
                        {experience.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`${styles.heading} scroll-reveal-scale ${titleVisible ? 'revealed' : ''}`}
                >
                    Recent Experience
                </h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
