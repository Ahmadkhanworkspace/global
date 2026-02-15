"use client";
import React from 'react';
import styles from './experiences.module.css';

const experiences = [
    {
        category: "Information Technology",
        title: "E-Procurement Infrastructure",
        location: "Islamabad, Pakistan",
        desc: "Redesigned the secure procurement framework for semi-government entities, enhancing transparency and bidding efficiency."
    },
    {
        category: "Scrap Consultancy",
        title: "Industrial Plant Decommissioning",
        location: "Karachi, Pakistan",
        desc: "Managed the technical dismantling and value recovery of a 5000+ ton ferrous asset, ensuring zero-waste grading."
    },
    {
        category: "Import & Export",
        title: "Pharma Raw Material Induction",
        location: "Lahore, Pakistan",
        desc: "Facilitated seamless indenting and logistics for specialized European active pharmaceutical ingredients for local manufacturers."
    },
    {
        category: "Information Technology",
        title: "Defence Communication Mesh",
        location: "Pakistan - UAE Axis",
        desc: "Deployed a military-grade secure communication layer for cross-border logistics consortia."
    },
    {
        category: "Scrap Consultancy",
        title: "Railway Track Assessment",
        location: "National Railway Grid",
        desc: "Provided detailed grading and commercial valuation for redundant national railway infrastructure assets."
    },
    {
        category: "Import & Export",
        title: "Heavy Machinery Supply for CPEC",
        location: "Balochistan, Pakistan",
        desc: "Coordinated the import and on-site assembly of specialized earth-moving equipment for corridor projects."
    },
    {
        category: "Information Technology",
        title: "Lifecycle Tracking ERP",
        location: "Proprietary Development",
        desc: "Developed a custom SAP-integrated module for tracking the lifecycle of high-value industrial scrap materials."
    },
    {
        category: "Scrap Consultancy",
        title: "Ship Breaking Optimization",
        location: "Gadani, Pakistan",
        desc: "Commercial oversight and grading consultancy for major international vessels recycled in Pakistani shipyards."
    },
    {
        category: "Import & Export",
        title: "Global Commodity Bridge",
        location: "Dubai - Karachi",
        desc: "Facilitated bulk commodity trade (Rice & Sugar) between UAE markets and Pakistani supply networks."
    },
    {
        category: "Information Technology",
        title: "Biometric Logistics Integration",
        location: "Nationwide Hubs",
        desc: "Implemented fingerprint and retina-based verification systems for authorized personnel at supply chain nodes."
    },
    {
        category: "Scrap Consultancy",
        title: "Non-Ferrous Export Sorting",
        location: "Faisalabad, Pakistan",
        desc: "Established a specialized sorting and grading facility for non-ferrous aluminum and copper scrap for international export."
    },
    {
        category: "Import & Export",
        title: "Authorized Defence Logistics",
        location: "Strategic Locations",
        desc: "End-to-end management of sensitive equipment shipments for authorized government procurement departments."
    }
];

export default function ExperiencesPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Experiences <span className={styles.highlight}>Tree</span></h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', fontSize: '1.2rem' }}>
                    Over two decades of delivering complex, multi-sector projects with a localized focus on Pakistani industry and international trade routes.
                </p>
            </header>

            <div className={styles.treeContainer}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.treeItem}>
                        <div className={styles.treeDot}></div>
                        <div className={styles.treeCard}>
                            <span className={styles.category}>{exp.category}</span>
                            <h3>{exp.title}</h3>
                            <p style={{ fontWeight: '600', color: '#333', marginBottom: '0.5rem' }}>{exp.location}</p>
                            <p>{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CSR Section */}
            <section className={styles.csrSection}>
                <h2 className={styles.csrTitle}>CSR <span className={styles.highlight}>Initiatives</span></h2>
                <div className={styles.csrGrid}>
                    <div className={styles.csrCard}>
                        <span className={styles.csrIcon}>🎓</span>
                        <h3>Education Foundation</h3>
                        <p>Providing technical scholarships and vocational training for underprivileged youth in industrial zones.</p>
                    </div>
                    <div className={styles.csrCard}>
                        <span className={styles.csrIcon}>🌳</span>
                        <h3>Green Vision</h3>
                        <p>Committed to neutralizing our industrial footprint through nationwide tree plantation drives in collaboration with local authorities.</p>
                    </div>
                    <div className={styles.csrCard}>
                        <span className={styles.csrIcon}>💧</span>
                        <h3>Water for Life</h3>
                        <p>Installing high-capacity water filtration plants in remote regions of Sindh and Balochistan to ensure clean drinking water.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
