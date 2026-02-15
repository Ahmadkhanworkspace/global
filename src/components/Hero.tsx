"use client";
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

const services = [
    "General Trading",
    "Global Supply Chain",
    "Import & Export",
    "General Order Supplies",
    "Raw Materials",
    "Scrap Consultancy",
    "Indenting Services"
];

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Configuration
        const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
        const width = 600;
        const height = 600;

        // Initialize once for stability
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        let animationFrameId: number;
        let rotation = 0;
        const particles: { x: number; y: number; z: number; size: number }[] = [];
        const particleCount = 2000;
        const radius = 220;

        // Initialize particles in a sphere
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos((Math.random() * 2) - 1);
            particles.push({
                x: radius * Math.sin(phi) * Math.cos(theta),
                y: radius * Math.sin(phi) * Math.sin(theta),
                z: radius * Math.cos(phi),
                size: Math.random() * 2.0 + 1.2
            });
        }

        const render = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            const rotationSpeed = 0.0025;
            const tilt = 0.45; // 25 degrees

            rotation += rotationSpeed;

            // 1. Draw Grid Lines
            ctx.strokeStyle = 'rgba(255, 102, 0, 0.22)';
            ctx.lineWidth = 1;

            // Latitudes
            for (let lat = -3; lat <= 3; lat++) {
                const yPos = lat * 55;
                const latRadius = Math.sqrt(Math.max(0, radius * radius - yPos * yPos));

                ctx.beginPath();
                for (let i = 0; i <= 60; i++) {
                    const angle = (i / 60) * Math.PI * 2;
                    const px = latRadius * Math.cos(angle);
                    const pz = latRadius * Math.sin(angle);

                    const rx = px * Math.cos(rotation) - pz * Math.sin(rotation);
                    const rz = pz * Math.cos(rotation) + px * Math.sin(rotation);
                    const ry = yPos * Math.cos(tilt) - rz * Math.sin(tilt);
                    const fZ = rz * Math.cos(tilt) + yPos * Math.sin(tilt);

                    const p = 800 / (800 + fZ);
                    const sx = centerX + rx * p;
                    const sy = centerY + ry * p;

                    if (i === 0) ctx.moveTo(sx, sy);
                    else ctx.lineTo(sx, sy);
                }
                ctx.stroke();
            }

            // Longitudes
            for (let lon = 0; lon < 8; lon++) {
                const lonAngle = (lon / 8) * Math.PI;
                ctx.beginPath();
                for (let i = 0; i <= 60; i++) {
                    const angle = (i / 60) * Math.PI * 2;
                    const px = radius * Math.sin(angle) * Math.cos(lonAngle);
                    const py = radius * Math.cos(angle);
                    const pz = radius * Math.sin(angle) * Math.sin(lonAngle);

                    const rx = px * Math.cos(rotation) - pz * Math.sin(rotation);
                    const rz = pz * Math.cos(rotation) + px * Math.sin(rotation);
                    const ry = py * Math.cos(tilt) - rz * Math.sin(tilt);
                    const fZ = rz * Math.cos(tilt) + py * Math.sin(tilt);

                    const p = 800 / (800 + fZ);
                    const sx = centerX + rx * p;
                    const sy = centerY + ry * p;

                    if (i === 0) ctx.moveTo(sx, sy);
                    else ctx.lineTo(sx, sy);
                }
                ctx.stroke();
            }

            // 2. Draw Particles
            particles.forEach((p) => {
                const rx = p.x * Math.cos(rotation) - p.z * Math.sin(rotation);
                const rz = p.z * Math.cos(rotation) + p.x * Math.sin(rotation);
                const ry = p.y * Math.cos(tilt) - rz * Math.sin(tilt);
                const fZ = rz * Math.cos(tilt) + p.y * Math.sin(tilt);

                const psp = 800 / (800 + fZ);
                const sx = centerX + rx * psp;
                const sy = centerY + ry * psp;

                const opacity = (fZ + radius) / (2 * radius) * 0.8 + 0.3;
                const sz = p.size * psp;

                ctx.beginPath();
                ctx.arc(sx, sy, sz, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 102, 0, ${opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        GLOBAL <br />
                        <span className={styles.highlight}>FUTURE LINKS</span>
                    </h1>
                    <p className={styles.subtitle}>
                        CONNECTING TOMORROW, <span style={{ color: 'var(--primary-orange)', fontWeight: '600' }}>TODAY</span>.
                        <br />
                        Redefining <span key={textIndex} style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{services[textIndex]}</span>
                    </p>
                    <div className={styles.actions}>
                        <Link href="/services" className={styles.primaryBtn}>Explore Possibilities</Link>
                        <Link href="/about" className={styles.secondaryBtn}>Watch The Vision</Link>
                    </div>
                </div>

                <div className={styles.globeContainer}>
                    <div className={styles.globe}>
                        <div className={styles.core}></div>
                        <canvas
                            ref={canvasRef}
                            style={{ width: '100%', height: '100%' }}
                            className={styles.canvas}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
