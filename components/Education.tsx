'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Education.module.css';

const education = {
    degree: "Master of Science in Computer Science (Online)",
    specialization: "Specialization in Machine Learning",
    institution: "Georgia Institute of Technology",
    // program: "OMSCS (Online Master of Science in Computer Science)",
    period: "Starting Jan 2026",
    location: "Atlanta, Georgia"
};

const previousEducation = {
    degree: "Bachelor of Engineering - BE, Electronic Engineering",
    institution: "University Of Nigeria",
    period: "2015 – 2021",
    location: "Nsukka, Nigeria"
};

const certifications = [
    {
        title: "GCP Certified Professional Cloud Architect",
        issuer: "Google Cloud"
    },
    {
        title: "AWS Solutions Architect - Associate",
        issuer: "Amazon Web Services (AWS)"
    },
    {
        title: "Kubernetes and Cloud Native Associate",
        issuer: "The Linux Foundation"
    },
    {
        title: "Algorithmic Toolbox",
        issuer: "Coursera"
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

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
        >
            <div className={styles.certCard}>
                <h4 className={styles.certTitle}>{cert.title}</h4>
                <p className={styles.certIssuer}>{cert.issuer}</p>
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
                        <div className={styles.certGrid}>
                            {certifications.map((cert, index) => (
                                <CertCard key={index} cert={cert} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
