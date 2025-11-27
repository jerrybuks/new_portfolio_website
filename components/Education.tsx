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

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className={styles.heading}>Education & Certifications</h2>

                <div className={styles.content}>
                    {/* Current Education */}
                    <div className={styles.educationSection}>
                        <h3 className={styles.sectionTitle}>Education</h3>
                        <div className={styles.educationCard}>
                            <div className={styles.educationHeader}>
                                <div>
                                    <h4 className={styles.degree}>{education.degree}</h4>
                                    <p className={styles.specialization}>{education.specialization}</p>
                                    <p className={styles.institution}>{education.institution}</p>
                                    {/* <p className={styles.program}>{education.program}</p> */}
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.period}>{education.period}</span>
                                    <span className={styles.location}>{education.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Previous Education */}
                        <div className={styles.educationCard}>
                            <div className={styles.educationHeader}>
                                <div>
                                    <h4 className={styles.degree}>{previousEducation.degree}</h4>
                                    <p className={styles.institution}>{previousEducation.institution}</p>
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.period}>{previousEducation.period}</span>
                                    <span className={styles.location}>{previousEducation.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className={styles.certificationsSection}>
                        <h3 className={styles.sectionTitle}>Certifications</h3>
                        <div className={styles.certGrid}>
                            {certifications.map((cert, index) => (
                                <div key={index} className={styles.certCard}>
                                    <h4 className={styles.certTitle}>{cert.title}</h4>
                                    <p className={styles.certIssuer}>{cert.issuer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
