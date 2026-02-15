import React from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Get in <span className={styles.highlight}>Touch</span></h1>
                <p className={styles.subtitle}>
                    Connect with our leadership to explore strategic collaborations and global opportunities. We are ready to serve your business needs with excellence.
                </p>
            </header>

            <div className={styles.contentGrid}>
                {/* Contact Information */}
                <div>
                    <div className={styles.infoCard}>
                        <h2 className={styles.infoTitle}>Contact Information</h2>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>📍</div>
                            <div className={styles.infoText}>
                                <h4>Head Office</h4>
                                <p>Global Future Links Enterprises<br />Islamabad, Pakistan</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>📞</div>
                            <div className={styles.infoText}>
                                <h4>Phone</h4>
                                <p>+92 333 8258372<br />+92 321 2526112</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>✉️</div>
                            <div className={styles.infoText}>
                                <h4>Email</h4>
                                <p>globalfuturelinks86@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.icon}>🌍</div>
                            <div className={styles.infoText}>
                                <h4>Global Presence</h4>
                                <p>Serving 20+ Countries across<br />Asia, Europe, and Middle East</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formCard}>
                    <h2 className={styles.infoTitle}>Send us a Message</h2>
                    <form>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input type="text" className={styles.input} placeholder="John" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input type="text" className={styles.input} placeholder="Doe" />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input type="email" className={styles.input} placeholder="john@company.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Subject</label>
                            <select className={styles.input}>
                                <option>General Inquiry</option>
                                <option>Scrap Consultancy</option>
                                <option>Government Supply</option>
                                <option>Import / Export</option>
                                <option>Partnership Proposal</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
