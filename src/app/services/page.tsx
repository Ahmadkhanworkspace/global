import React from 'react';
import styles from './services.module.css';

const services = [
    {
        title: "Scrap Consultancy",
        description: "Expert guidance on grading, processing, and maximizing value from ferrous and non-ferrous scrap metals.",
        icon: "🏗️"
    },
    {
        title: "General Trading",
        description: "Comprehensive trading solutions for a wide range of commodities, ensuring quality and competitive pricing.",
        icon: "🌍"
    },
    {
        title: "Import & Export",
        description: "Seamless global trade facilitation, handling all aspects of documentation, logistics, and compliance.",
        icon: "🚢"
    },
    {
        title: "General Order Suppliers",
        description: "Reliable supply of products, commodities, and raw materials to government and private sectors.",
        icon: "📦"
    },
    {
        title: "Industrial Raw Materials",
        description: "Sourcing and supplying high-quality raw materials essential for various industrial manufacturing processes.",
        icon: "🏭"
    },
    {
        title: "Material Management",
        description: "End-to-end management of material flow, from procurement to disposal, optimizing efficiency and sustainability.",
        icon: "🔄"
    },
    {
        title: "Government & Public Sector Supply",
        description: "Authorized supplier for government and semi-government bodies, ensuring strict compliance and timely delivery.",
        icon: "🏛️"
    },
    {
        title: "Manufactured Goods",
        description: "Supply of high-quality manufactured and semi-manufactured goods tailored to specific industry requirements.",
        icon: "🛠️"
    },
    {
        title: "Aviation & Aerospace",
        description: "Specialized consultancy leveraging deep operational expertise for aviation fleet management and support.",
        icon: "✈️"
    },
    {
        title: "Defence Technology",
        description: "Integration of secure, defence-grade communication systems and technology frameworks.",
        icon: "🛡️"
    },
    {
        title: "IT & Security",
        description: "Scalable IT infrastructure and cybersecurity solutions for enterprise-level protection.",
        icon: "💻"
    },
    {
        title: "Global Logistics",
        description: "Strategic supply chain management ensuring zero-failure delivery across international borders.",
        icon: "🌐"
    }
];

export default function Services() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Our <span className={styles.highlight}>Services</span></h1>
                <p className={styles.subtitle}>
                    Delivering expert solutions in Trade, Supply, and Consultancy.
                </p>
            </header>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{service.icon}</div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
