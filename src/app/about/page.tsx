"use client";
import React from 'react';
import styles from './about.module.css';

const AboutPage = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className={styles.aboutHero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Pioneering <span className={styles.highlight}>Global Synergy</span> <br />
                        Through Excellence
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                        Global Future Links Enterprises (SMC-Private) Limited stands as a beacon of professional integrity in the global trade and consultancy landscape.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className={styles.visionMission}>
                <div className={styles.container}>
                    <div className={styles.vmGrid}>
                        <div className={styles.vmCard}>
                            <h2>Our Vision</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
                                To be the world's most trusted partner in global supply chain solutions, fostering sustainable business ecosystems that bridge the gap between resources and industrial needs through innovation and unwavering ethical standards.
                            </p>
                        </div>
                        <div className={styles.vmCard}>
                            <h2>Our Mission</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9 }}>
                                To deliver world-class business services, trading excellence, and strategic consultancy. We empower our clients by ensuring efficiency, reliability, and precision at every link of the global value chain, from government procurement to private sector modernization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2 style={{ fontSize: '3rem', textAlign: 'center', fontFamily: 'var(--font-serif)' }}>
                        Our Core <span className={styles.highlight}>Values</span>
                    </h2>

                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🛡️</span>
                            <h3>Integrity</h3>
                            <p>We believe in absolute transparency and ethical conduct in every transaction, building foundations of trust with our global partners.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🚀</span>
                            <h3>Innovation</h3>
                            <p>Constantly evolving our methodologies to leverage the latest technology in logistics, aviation, and defense sectors.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🌍</span>
                            <h3>Sustainability</h3>
                            <p>Committed to eco-friendly recycling and supply practices that ensure a better future for the next generation.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>💎</span>
                            <h3>Excellence</h3>
                            <p>A "zero-failure" commitment to delivering quality that exceeds international benchmarks and expectations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company History / Narrative */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.textBlock}>
                            <h2>Over Two Decades of <span className={styles.highlight}>Proven Impact</span></h2>
                            <p>
                                With over 25 years of multi-dimensional experience, Global Future Links has evolved from a specialized trading house into a diversified global consultancy powerhouse.
                            </p>
                            <p>
                                Our footprint spans 20+ countries, where we facilitate the flow of essential commodities and defense-grade technologies. We take pride in being authorized suppliers for government and semi-government bodies, maintaining a reputation for reliability that precedes us in every market we enter.
                            </p>
                        </div>
                        <div style={{ background: '#f5f5f5', borderRadius: '30px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#888' }}>
                            [Global Network Visualization]
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
