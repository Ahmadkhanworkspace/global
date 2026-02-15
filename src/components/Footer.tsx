import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo.png"
                            alt="Global Futurelinks"
                            width={220}
                            height={60}
                            className={styles.footerLogo}
                        />
                    </div>
                    <p className={styles.description}>
                        GLOBAL FUTURE LINKS ENTERPRISES (SMC-Private) Limited
                    </p>
                    <p className={styles.subtext}>
                        NTN: 0614272 | SECP Reg: 0243998
                    </p>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul className={styles.list}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/board-of-directors">Board of Directors</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Contact Us</h4>
                    <ul className={styles.contactInfo}>
                        <li>Office # F-50A, 1st Floor Gold Point Plaza</li>
                        <li>Old Naz Cinema, Murree Road, Rawalpindi</li>
                        <li><a href="tel:+923338258372">+92 333 8258372</a></li>
                        <li><a href="tel:+923212526112">+92 321 2526112</a></li>
                        <li><a href="mailto:globalfuturelinks86@gmail.com">globalfuturelinks86@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Global Future Links Enterprises. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
