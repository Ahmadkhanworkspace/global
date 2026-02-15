import Hero from "@/components/Hero";
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />

      {/* Featured Services Strip */}
      <div className={styles.partnersStrip}>
        <div className={styles.partnersTrack}>
          {/* Repeated for infinite scroll effect */}
          {[
            "General Trading", "Global Supply Chain", "Import & Export",
            "General Order Supplies", "Raw Materials", "Scrap Consultancy", "Indenting Services"
          ].concat([
            "General Trading", "Global Supply Chain", "Import & Export",
            "General Order Supplies", "Raw Materials", "Scrap Consultancy", "Indenting Services"
          ]).map((service, index) => (
            <span key={index} className={styles.partnerLogo}>{service}</span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className={styles.sectionTitle}>
            About <span className={styles.highlight}>Global Future Links</span>
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
            Global Future Links Enterprises (SMC-Private) Limited is a premier entity dedicated to facilitating permissible business services, general trading, and global supply chain solutions. We specialize in import/export, general order supplies of products, commodities, and raw materials, catering to government, semi-government, and private sectors with absolute integrity and professionalism.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>25+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>20+</h3>
              <p>Countries Served</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className={styles.featuredServices}>
        <h2 className={styles.sectionTitle}>Featured <span className={styles.highlight}>Services</span></h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏗️</div>
            <h3 className={styles.serviceTitle}>Scrap Consultancy</h3>
            <p className={styles.serviceDesc}>Expert guidance on grading, processing, and maximizing value from ferrous and non-ferrous scrap metals.</p>
            <Link href="/services" className={styles.learnMore}>Learn More →</Link>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏛️</div>
            <h3 className={styles.serviceTitle}>Government Supply</h3>
            <p className={styles.serviceDesc}>Authorized supplier for government and semi-government bodies, ensuring strict compliance.</p>
            <Link href="/services" className={styles.learnMore}>Learn More →</Link>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🚢</div>
            <h3 className={styles.serviceTitle}>Import & Export</h3>
            <p className={styles.serviceDesc}>Seamless global trade facilitation, handling all aspects of documentation and logistics.</p>
            <Link href="/services" className={styles.learnMore}>Learn More →</Link>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Process</span></h2>
        <p className={styles.sectionSubtitle}>A streamlined approach ensuring efficiency and value at every step of the supply chain.</p>

        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>01</span>
            <div className={styles.stepIcon}>🤝</div>
            <h3 className={styles.stepTitle}>Consultation</h3>
            <p className={styles.stepDesc}>Understanding your specific requirements, grade specifications, and volume needs.</p>
          </div>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>02</span>
            <div className={styles.stepIcon}>📋</div>
            <h3 className={styles.stepTitle}>Sourcing & Strategy</h3>
            <p className={styles.stepDesc}>Leveraging our global network to identify the best materials and logistical routes.</p>
          </div>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>03</span>
            <div className={styles.stepIcon}>🚢</div>
            <h3 className={styles.stepTitle}>Execution</h3>
            <p className={styles.stepDesc}>End-to-end management of documentation, quality checks, and shipping.</p>
          </div>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>04</span>
            <div className={styles.stepIcon}>✅</div>
            <h3 className={styles.stepTitle}>Delivery & Support</h3>
            <p className={styles.stepDesc}>Ensuring timely arrival and providing post-delivery support for complete satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className={styles.sectionTitle} style={{ color: 'white', marginBottom: '1rem' }}>Trusted by Industry <span style={{ color: '#ffcc00' }}>Leaders</span></h2>
          <p style={{ opacity: 0.9 }}>What our global partners say about us.</p>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"Global Future Links has transformed our supply chain efficiency. Their scrap consultancy saved us millions in lost revenue."</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4>John Henderson</h4>
                  <p>CEO, SteelWorks Intl.</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"A reliable partner for government procurement. Their adherence to compliance and timelines is unmatched."</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4>Sarah Miller</h4>
                  <p>Director, Public Infrastructure</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"The level of professionalism and global market insight they bring to the table is truly world-class."</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4>Robert Chang</h4>
                  <p>MD, Asian Trade Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '8rem 2rem', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
            Why Choose <span className={styles.highlight}>Us</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700' }}>Strategic Expertise</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Leveraging over 25 years of multi-dimensional experience to translate complex requirements into commercial success.</p>
            </div>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700' }}>Global Reach</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>A trusted brand presence across 20+ countries, connecting you to international markets effectively.</p>
            </div>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700' }}>Quality Assurance</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Adhering to the highest international standards of service delivery and "zero-failure" methodology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className={styles.featuredServices} id="experiences" style={{ background: 'var(--off-white)' }}>
        <h2 className={styles.sectionTitle}>Global <span className={styles.highlight}>Experiences</span></h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard} style={{ textAlign: 'left' }}>
            <h3 className={styles.serviceTitle} style={{ fontSize: '1.2rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Case Study</h3>
            <h4 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>Aviation Fleet Modernization</h4>
            <p className={styles.serviceDesc}>Providing strategic oversight for a mid-sized commercial fleet, optimizing maintenance schedules and reducing operational costs by 18%.</p>
            <Link href="/experiences" className={styles.learnMore}>Read Success Story →</Link>
          </div>
          <div className={styles.serviceCard} style={{ textAlign: 'left' }}>
            <h3 className={styles.serviceTitle} style={{ fontSize: '1.2rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Project Highlight</h3>
            <h4 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>Secure Comms Deployment</h4>
            <p className={styles.serviceDesc}>Implemented a defence-grade secure communication framework for a multi-national consortium, ensuring zero data leakage.</p>
            <Link href="/" className={styles.learnMore}>View Project Details →</Link>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className={styles.globalSection}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Global <span className={styles.highlight}>Reach</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#aaa' }}>Connecting markets across continents with seamless efficiency.</p>

          <div className={styles.mapContainer}>
            {/* Visual placeholder for Map - In a real app, this would be an SVG map */}
            <div className={styles.mapText}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>20+ Countries</div>
              <div style={{ fontSize: '1.2rem', color: '#888' }}>North America • Europe • Asia • Middle East</div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.9rem' }}>🇺🇸 USA</span>
                <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.9rem' }}>🇨🇳 China</span>
                <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.9rem' }}>🇦🇪 UAE</span>
                <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.9rem' }}>🇬🇧 UK</span>
                <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.9rem' }}>🇩🇪 Germany</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" style={{ padding: '8rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Corporate <span className={styles.highlight}>Insights</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <article>
              <div style={{ height: '200px', background: '#eee', borderRadius: '10px', marginBottom: '1.5rem' }}></div>
              <span style={{ color: 'var(--primary-orange)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem' }}>Market Trends</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0', lineHeight: '1.3' }}>The Future of Sustainable Scrap Trading in 2026</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Analyzing the shift towards green recycling and its impact on global supply chains...</p>
            </article>
            <article>
              <div style={{ height: '200px', background: '#eee', borderRadius: '10px', marginBottom: '1.5rem' }}></div>
              <span style={{ color: 'var(--primary-orange)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem' }}>Technology</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0', lineHeight: '1.3' }}>AI in Aviation: Predictive Maintenance Revolution</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>How artificial intelligence is reshaping safety and efficiency in the aerospace sector...</p>
            </article>
            <article>
              <div style={{ height: '200px', background: '#eee', borderRadius: '10px', marginBottom: '1.5rem' }}></div>
              <span style={{ color: 'var(--primary-orange)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.9rem' }}>Compliance</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.5rem 0', lineHeight: '1.3' }}>Navigating International Trade Regulations</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Essential guide to compliance for government and public sector suppliers...</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Elevate Your Business?</h2>
        <p className={styles.ctaText}>Connect with our expert team for world-class consultancy and supply solutions.</p>
        <Link href="#contact" className={styles.ctaBtn}>
          Contact Us Today
        </Link>
      </section>
    </main>
  );
}
