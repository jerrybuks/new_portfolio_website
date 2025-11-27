import styles from './Projects.module.css';

const projects = [
    {
        title: "Panenka FC",
        description: "Web3 sports platform with 200K+ users, featuring blockchain-powered fan rewards, interactive game modes, and multi-chain integration.",
        tech: ["Nestjs", "Rust", "Solidity", "StarkNet", "Postgresql"],
        link: "https://panenkafc.gg/"
    },
    {
        title: "Crowdr",
        description: "Nigeria's first combined crowdfunding and volunteering platform, raising ₦50M+ in its first year.",
        tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Paystack"],
        link: "https://www.oncrowdr.com/"
    },
    {
        title: "RAG Chatbot",
        description: "AI-powered chatbot using Retrieval-Augmented Generation for context-aware responses and intelligent document search.",
        tech: ["React", "Python", "LangChain", "OpenAI", "Vector DB"],
        link: "https://rag-chatbot-fe-self.vercel.app"
    },
    {
        title: "Accord Project",
        description: "Open source contributions to smart legal contracts tools, adding features to Cicero UI.",
        tech: ["Open Source", "Smart Contracts"],
        link: "https://accordproject.org/"
    },
    {
        title: "Bcoins",
        description: "Library for communicating with BuyCoins Graphql API, integrating with vanilla JS and frameworks.",
        tech: ["JavaScript", "GraphQL"],
        link: "https://github.com/jerrybuks/Bcoins"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className={styles.heading}>
                    Featured Projects
                </h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.content}>
                                <div className={styles.titleRow}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <span className={styles.linkIcon}>↗</span>
                                </div>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
