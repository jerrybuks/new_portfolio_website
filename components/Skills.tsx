'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
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

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
        >
            <div className={styles.category}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillList}>
                    {category.skills.map((skill, i) => (
                        <span key={i} className={styles.skill}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`${styles.heading} scroll-reveal-scale ${titleVisible ? 'revealed' : ''}`}
                >
                    Technical & Soft Skills
                </h2>
                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
