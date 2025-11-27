import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <p className={styles.text}>
                        I love hearing about new projects, collaborations, and opportunities.
                        Whether you have a proposal or just want to connect, feel free to reach out!
                    </p>

                    <a href="mailto:profkiti@gmail.com" className={styles.emailBtn}>
                        Say Hello
                    </a>

                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/jerry-chibuokem/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/jerrybuks" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://drive.google.com/file/d/1f97_szO1BqMfAcKuEWYkuZ1shxaTsDUF/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
                    </div>

                    <footer className={styles.footer}>
                        <p>© {new Date().getFullYear()} Jerry Chibuokem. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </section>
    );
}
