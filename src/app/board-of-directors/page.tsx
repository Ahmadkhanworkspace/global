import React from 'react';
import styles from './directors.module.css';

const directors = [
    {
        name: "Malik Ahsan Ullah Awan",
        position: "Chief Executive Officer",
        bio: "A visionary leader steering Global Future Links Enterprises towards the zenith of international trade and services. With astute strategic oversight, he champions a culture of excellence and innovation.",
        image: "https://ui-avatars.com/api/?name=Malik+Ahsan+Ullah+Awan&background=111&color=fff&size=200"
    },
    {
        prefix: "Brigadier",
        name: "Dildar Ahmed Khan Bangash, R",
        position: "Senior Director",
        postNominals: "Sitara-e-Imtiaz-(M), CMILT (UK)",
        bio: "A distinguished veteran bringing disciplined strategic leadership and high-level marketing expertise. His illustrious career is marked by precision in global operations and stakeholder management.",
        image: "https://ui-avatars.com/api/?name=Dildar+Ahmed+Khan&background=FF6600&color=fff&size=200"
    },
    {
        prefix: "Wing Commander",
        name: "Syed Shahbaz Mushtaq, R",
        position: "Director Sales & Marketing",
        bio: "Leveraging a high-caliber aviation background and sophisticated technical governance to drive global revenue. His multi-disciplinary expertise bridges the gap between complex engineering and market realization.",
        image: "https://ui-avatars.com/api/?name=Syed+Shahbaz+Mushtaq&background=111&color=fff&size=200"
    },
    {
        name: "Sultan Khan Naeem",
        position: "Managing Director",
        postNominals: "Director (R) PTV",
        bio: "A seasoned media and management executive ensuring operational efficiency and corporate governance at the highest standards.",
        image: "https://ui-avatars.com/api/?name=Sultan+Khan+Naeem&background=333&color=fff&size=200"
    },
    {
        name: "Sheikh Gohar Rehman",
        position: "Deputy Director",
        postNominals: "Officer (R) PTV",
        bio: "Dedicated to streamlining operations and effective administration, driving seamless execution across all organizational sectors.",
        image: "https://ui-avatars.com/api/?name=Sheikh+Gohar+Rehman&background=333&color=fff&size=200"
    },
    {
        name: "Ahmad Hammad",
        position: "Chief Technology Officer",
        bio: "Leading the technological frontier, orchestrating digital transformation and secure communications infrastructure for a modern, tech-driven enterprise.",
        image: "https://ui-avatars.com/api/?name=Ahmad+Hammad&background=FF8C00&color=fff&size=200"
    },
    {
        name: "Shahid Hussain",
        position: "Finance Manager",
        bio: "Ensuring fiscal responsibility and financial health, overseeing strategic resource allocation and comprehensive financial planning.",
        image: "https://ui-avatars.com/api/?name=Shahid+Hussain&background=333&color=fff&size=200"
    },
    {
        name: "Syed Farhan Shah",
        position: "Company Legal Advisor",
        bio: "Providing expert legal counsel and ensuring rigorous compliance, safeguarding the company's integrity and corporate interests.",
        image: "https://ui-avatars.com/api/?name=Syed+Farhan+Shah&background=111&color=fff&size=200"
    }
];

export default function BoardOfDirectors() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Board of <span className={styles.highlight}>Directors</span></h1>
                <p className={styles.subtitle}>
                    The distinguished leadership team steering Global Future Links Enterprises towards a future of innovation and global excellence.
                </p>
            </header>

            <div className={styles.grid}>
                {directors.map((director, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={director.image} alt={director.name} className={styles.image} />
                        </div>
                        <div className={styles.cardContent}>
                            {director.prefix && <span className={styles.prefix}>{director.prefix}</span>}
                            <h3 className={styles.name}>{director.name}</h3>
                            <p className={styles.postNominals}>{director.postNominals}</p>
                            <h4 className={styles.position}>{director.position}</h4>
                            <p className={styles.bio}>{director.bio}</p>
                        </div>
                    </div>
                ))}
            </div>

            <section className={styles.contactSection}>
                <h2 className={styles.contactTitle}>Partner with Excellence</h2>
                <p className={styles.contactText}>
                    Connect with our leadership to explore strategic collaborations and global opportunities.
                </p>
                <a href="#contact" className={styles.contactButton}>Contact Our Board</a>
            </section>
        </div>
    );
}
