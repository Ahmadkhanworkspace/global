"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Force "scrolled" style (solid background, dark text) if not on home page
    const navbarClass = `${styles.navbar} ${scrolled || !isHomePage ? styles.scrolled : ""}`;

    return (
        <>
            {/* Main Navbar */}
            <nav className={navbarClass}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        Global<span className={styles.highlight}>Futurelinks</span>
                    </Link>

                    <div className={`${styles.links} ${mobileMenuOpen ? styles.active : ""}`}>
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                        <Link href="/#experiences" onClick={() => setMobileMenuOpen(false)}>Experiences</Link>
                        <Link href="/#insights" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
                        <Link href="/board-of-directors" onClick={() => setMobileMenuOpen(false)}>Board</Link>
                        <Link href="/contact" className={styles.cta} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </div>

                    <button className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
