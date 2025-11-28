'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Education.module.css';

const education = {
    degree: "M.S. in Computer Science",
    specialization: "Specialization in Machine Learning",
    institution: "Georgia Institute of Technology",
    // program: "OMSCS (Online Master of Science in Computer Science)",
    period: "Starting Jan 2026",
    location: "Atlanta, Georgia"
};

const previousEducation = {
    degree: "B.Eng. in Electronic Engineering",
    institution: "University Of Nigeria",
    period: "2015 – 2021",
    location: "Nsukka, Nigeria"
};

const certifications = [
    {
        title: "GCP Certified Professional Cloud Architect",
        issuer: "Google Cloud",
        year: "2024"
    },
    {
        title: "AWS Solutions Architect - Associate",
        issuer: "Amazon Web Services (AWS)",
        year: "2023"
    },
    {
        title: "Kubernetes and Cloud Native Associate",
        issuer: "The Linux Foundation",
        year: "2023"
    },
    {
        title: "Algorithmic Toolbox",
        issuer: "Coursera",
        year: "2022"
    }
];

function EducationCard({ edu, index }: { edu: typeof education | typeof previousEducation; index: number }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`scroll-reveal-right ${isVisible ? 'revealed' : ''}`}
        >
            <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                    <div>
                        <h4 className={styles.degree}>{edu.degree}</h4>
                        {'specialization' in edu && (
                            <p className={styles.specialization}>{edu.specialization}</p>
                        )}
                        <p className={styles.institution}>{edu.institution}</p>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.period}>{edu.period}</span>
                        <span className={styles.location}>{edu.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CertItem({ cert, index }: { cert: typeof certifications[0]; index: number }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
        >
            <div className={styles.certItem}>
                <div className={styles.certIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <div className={styles.certContent}>
                    <h4 className={styles.certTitle}>{cert.title}</h4>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
                {/* <span className={styles.certYear}>{cert.year}</span> */}
            </div>
        </div>
    );
}

export default function Education() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

    return (
        <section id="education" className="section">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`${styles.heading} scroll-reveal-scale ${titleVisible ? 'revealed' : ''}`}
                >
                    Education & Certifications
                </h2>

                <div className={styles.content}>
                    {/* Current Education */}
                    <div className={styles.educationSection}>
                        <h3 className={styles.sectionTitle}>Education</h3>
                        <EducationCard edu={education} index={0} />
                        <EducationCard edu={previousEducation} index={1} />
                    </div>

                    {/* Certifications */}
                    <div className={styles.certificationsSection}>
                        <h3 className={styles.sectionTitle}>Certifications</h3>
                        <div className={styles.certList}>
                            {certifications.map((cert, index) => (
                                <CertItem key={index} cert={cert} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
