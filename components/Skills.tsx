import styles from './Skills.module.css';

const skillCategories = [
    {
        title: "Languages",
        skills: ["TypeScript", "JavaScript", "Rust", "Solidity", "Python", "Cairo", "HTML/CSS", "SQL"]
    },
    {
        title: "Frameworks & Libs",
        skills: ["React", "Next.js", "Node.js", "Nestjs", "Redux", "MobX", "Angular"]
    },
    {
        title: "Infrastructure",
        skills: ["AWS", "Docker", "Kubernetes", "Google Cloud", "CI/CD"]
    },
    {
        title: "Databases",
        skills: ["Postgresql", "MongoDB", "Neo4j"]
    },
    {
        title: "Blockchain",
        skills: ["Smart Contracts", "Concordium", "EVM", "StarkNet", "Web3.js", "Ethers.js"]
    },
    {
        title: "AI Engineering",
        skills: ["RAG (Retrieval-Augmented Generation)", "LangChain", "Agentic AI", "Vector Databases", "Prompt Engineering", "LLM Fine-tuning"]
    },
    {
        title: "Soft Skills",
        skills: ["Strategic Leadership", "Team Building", "Product Vision", "Stakeholder Management", "Technical Communication", "Mentorship"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className={styles.heading}>
                    Technical & Soft Skills
                </h2>
                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={styles.category}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} className={styles.skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
