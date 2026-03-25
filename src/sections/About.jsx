import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Genuine Products",
    desc: "Every device is verified and quality-checked before it reaches you.",
    color: "#2563eb",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    title: "Easy Exchange",
    desc: "Upgrade your device with fair exchange value and zero hassle.",
    color: "#2563eb",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Affordable Deals",
    desc: "Competitive pricing on premium mobiles and electronics.",
    color: "#2563eb",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Local Support",
    desc: "In-person support at our Koduvalli and Mukkam branches.",
    color: "#2563eb",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section {
          font-family: 'DM Sans', sans-serif;
          padding: 6.5rem 0 7rem;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* Subtle dot grid */
        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #dbeafe 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.4;
          pointer-events: none;
        }

        /* Glow blob bottom-right */
        .about-glow {
          position: absolute;
          bottom: -120px;
          right: -120px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 68%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 860px) {
          .about-inner { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* ── Left ── */
        .about-eyebrow {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 0.85rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .about-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: #2563eb;
          border-radius: 2px;
        }

        .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.12;
          margin-bottom: 1.5rem;
        }

        .about-title span { color: #2563eb; }

        .about-body {
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.85;
          margin-bottom: 0.85rem;
        }

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 2.25rem;
          background: #2563eb;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 13px 28px;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          box-shadow: 0 4px 20px rgba(37,99,235,0.3);
          letter-spacing: 0.01em;
        }

        .about-cta:hover {
          background: #1d4ed8;
          box-shadow: 0 8px 32px rgba(37,99,235,0.4);
          transform: translateY(-2px);
        }

        .about-cta svg {
          transition: transform 0.25s ease;
        }

        .about-cta:hover svg {
          transform: translateX(4px);
        }

        /* ── Feature cards ── */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.1rem;
        }

        .feat-card {
          background: white;
          border: 1px solid rgba(219,234,254,0.9);
          border-radius: 18px;
          padding: 1.6rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }

        .feat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(37,99,235,0.13);
          border-color: #93c5fd;
        }

        /* Hover blue sweep from bottom */
        .feat-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #60a5fa, #2563eb);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .feat-card:hover::after { transform: scaleX(1); }

        /* Faint radial glow per card */
        .feat-card::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 70%);
          pointer-events: none;
          transition: opacity 0.3s ease;
          opacity: 0;
        }

        .feat-card:hover::before { opacity: 1; }

        .feat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: #2563eb;
          transition: background 0.3s ease;
        }

        .feat-card:hover .feat-icon-wrap {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-color: transparent;
          color: white;
        }

        .feat-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .feat-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.65;
        }

        /* Decorative number watermark */
        .feat-number {
          position: absolute;
          top: 0.75rem;
          right: 1rem;
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: rgba(219,234,254,0.6);
          line-height: 1;
          pointer-events: none;
          transition: color 0.3s ease;
        }

        .feat-card:hover .feat-number {
          color: rgba(147,197,253,0.4);
        }
      `}</style>

      <section id="home" className="about-section scroll-mt-24">
        <div className="about-glow" />

        <div className="about-inner">

          {/* ── LEFT ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="about-eyebrow">About Us</p>

            <h2 className="about-title">
              Your Trusted<br />
              <span>Premium Device</span> Store
            </h2>

            <p className="about-body">
              SWAP Store is a trusted destination for buying, selling and
              exchanging premium smartphones — iPhone, Samsung flagship
              devices, MacBooks, iPads and accessories — across{" "}
              <strong style={{ color: "#1d4ed8", fontWeight: 600 }}>Koduvalli</strong> and{" "}
              <strong style={{ color: "#1d4ed8", fontWeight: 600 }}>Mukkam</strong>.
            </p>

            <p className="about-body">
              We provide both brand-new and verified pre-owned devices
              with fair pricing and reliable customer support every step
              of the way.
            </p>

            <Link to="/about" className="about-cta">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* ── RIGHT: Feature Cards ── */}
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((f, i) => (
              <motion.div key={i} className="feat-card" variants={fadeUp}>
                <span className="feat-number">0{i + 1}</span>
                <div className="feat-icon-wrap">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <p className="feat-desc">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}