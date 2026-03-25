import Navbar from "../sections/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import inauguration from "../assets/customers/inauguration.mp4";
import store1 from "../assets/gallery/store1.jpg";
import store2 from "../assets/gallery/store2.jpg";
import store3 from "../assets/gallery/store3.jpg";
import store4 from "../assets/gallery/store4.jpg";
import store5 from "../assets/gallery/store5.jpg";
import store6 from "../assets/gallery/store6.jpg";
import store7 from "../assets/gallery/store7.jpg";
import store8 from "../assets/gallery/store8.jpg";
import storefront from "../assets/gallery/swapppp.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          font-family: 'DM Sans', sans-serif;
          color: #0f172a;
          background: #fff;
        }
        .about-root h1, .about-root h2, .about-root h3 {
          font-family: 'Syne', sans-serif;
        }

        /* Noise texture overlay */
        .noise::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .grid-dot-bg {
          background-image: radial-gradient(circle, #bfdbfe 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .diagonal-clip {
          clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -20%;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .location-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .location-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(59,130,246,0.15);
        }
        .location-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .location-card:hover::after {
          transform: scaleX(1);
        }

        .pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          background: rgba(219,234,254,0.6);
          border: 1px solid rgba(147,197,253,0.5);
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #1d4ed8;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .section-label {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 1rem;
        }

        .mv-card {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 2px 24px rgba(0,0,0,0.06);
          border: 1px solid rgba(219,234,254,0.8);
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .mv-card:hover {
          box-shadow: 0 8px 40px rgba(59,130,246,0.12);
        }
        .mv-card .icon-bg {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .map-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          padding: 10px 20px;
          border: 1.5px solid #bfdbfe;
          border-radius: 10px;
          transition: all 0.25s ease;
          background: white;
        }
        .map-btn:hover {
          background: #eff6ff;
          border-color: #2563eb;
          color: #1d4ed8;
        }

        .gallery-placeholder {
          border: 2px dashed #bfdbfe;
          border-radius: 16px;
          padding: 4rem;
          text-align: center;
          color: #93c5fd;
          font-size: 0.9rem;
        }
      `}</style>

      <div className="about-root">
        <Navbar />

        {/* ── HERO / INTRO ── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden diagonal-clip noise"
          style={{
            background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 60%, #dbeafe 100%)",
            paddingBottom: "3rem",
            paddingTop: "1rem",
          }}
        >
          {/* Background grid dots */}
          <div
            className="grid-dot-bg"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.5,
              zIndex: 0,
            }}
          />

          {/* Large decorative circle */}
          <motion.div
            style={{ y: yBg }}
            className="absolute"
            initial={false}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            aria-hidden
          >
            <div
              style={{
                width: 500,
                height: 500,
                border: "1.5px solid rgba(147,197,253,0.3)",
                borderRadius: "50%",
                position: "absolute",
                top: -180,
                right: -120,
              }}
            />
            <div
              style={{
                width: 340,
                height: 340,
                border: "1.5px solid rgba(147,197,253,0.25)",
                borderRadius: "50%",
                position: "absolute",
                top: -100,
                right: -40,
              }}
            />
          </motion.div>

          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-label">About SWAP Store</span>

              <h1
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                  color: "#0f172a",
                }}
              >
                Your Destination for{" "}
                <span style={{ color: "#2563eb" }}>Premium Smartphones</span>
              </h1>

              <p
                style={{
                  color: "#475569",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
marginBottom: "0.6rem",
                  maxWidth: 480,
                }}
              >
                SWAP Store specializes in premium smartphones — iPhone, Samsung
                flagships, MacBooks, iPads and accessories — both brand-new and
                verified pre-owned, with trusted quality guaranteed.
              </p>

              <p
                style={{
                  color: "#475569",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: 480,
                  marginBottom: "2rem",
                }}
              >
                With branches in{" "}
                <strong style={{ color: "#1d4ed8" }}>Koduvally</strong> and{" "}
                <strong style={{ color: "#1d4ed8" }}>Mukkam</strong>, we help
                you upgrade confidently with fair pricing and transparent
                exchange support.
              </p>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span className="pill-tag">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="#2563eb">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                  iPhone & Samsung
                </span>
                <span className="pill-tag">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="#2563eb">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                  MacBooks & iPads
                </span>
                <span className="pill-tag">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="#2563eb">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                  Exchange Support
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {/* Glow behind logo */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-30px",
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(20px)",
                  }}
                />
                <motion.img
  src={storefront}
  alt="SWAP Store Front"
  style={{
    width: "100%",
    maxWidth: 650,
    borderRadius: 20,
    position: "relative",
    zIndex: 1,
    boxShadow: "0 30px 80px rgba(37,99,235,0.18)",
    objectFit: "cover"
  }}
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              maxWidth: 1200,
              margin: "2rem auto 0",
              padding: "0 2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            {[
              { number: "2", label: "Branches", sub: "Koduvally & Mukkam" },
              { number: "1000+", label: "Happy Customers", sub: "And counting" },
              { number: "100%", label: "Verified Devices", sub: "Every single one" },
            ].map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="stat-card"
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "1.75rem 2rem",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(219,234,254,0.9)",
                }}
              >
                <div
                  style={{
                    fontSize: "2.4rem",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    color: "#2563eb",
                    lineHeight: 1,
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#0f172a",
                    margin: "0.4rem 0 0.2rem",
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── INAUGURATION VIDEO ── */}
        <section
          style={{
            padding: "7rem 0",
            background: "white",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="section-label">Our Journey</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                }}
              >
                Grand Opening of{" "}
                <span style={{ color: "#2563eb" }}>SWAP Store</span>
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                  fontSize: "1.05rem",
                }}
              >
                SWAP Store officially opened its doors to bring premium
                smartphones — iPhone, Samsung flagships, MacBooks and iPads —
                closer to customers across Koduvally and Mukkam.
              </p>

              <p
                style={{
                  color: "#475569",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  fontSize: "1.05rem",
                }}
              >
                From day one, our goal has been to deliver trusted products,
                fair exchange values and a premium upgrade experience for every
                customer who walks through our doors.
              </p>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <span className="pill-tag">Koduvally Branch</span>
                <span className="pill-tag">Mukkam Branch</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow:
                    "0 30px 80px rgba(37,99,235,0.18), 0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(219,234,254,0.7)",
                  position: "relative",
                }}
              >
                {/* Blue accent corner */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 60,
                    height: 60,
                    background: "linear-gradient(135deg, #2563eb 0%, transparent 100%)",
                    zIndex: 1,
                    borderRadius: "0 0 60px 0",
                    opacity: 0.7,
                  }}
                />
                <video
                  src={inauguration}
                  controls
                  style={{ width: "100%", aspectRatio: "16/9", display: "block" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MISSION + VISION ── */}
        <section
          style={{
            padding: "7rem 0",
            background: "linear-gradient(180deg, #eff6ff 0%, #f8faff 100%)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 2rem",
            }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <span className="section-label">Who We Are</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 800,
                }}
              >
                Purpose That Drives Us
              </h2>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  ),
                  title: "Our Mission",
                  body:
                    "To make premium smartphones — iPhone, Samsung flagships, MacBooks and iPads — accessible to everyone with trusted quality, transparent pricing and reliable customer support at every step.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="12" y1="2" x2="12" y2="5" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="5" y2="12" />
                      <line x1="19" y1="12" x2="22" y2="12" />
                    </svg>
                  ),
                  title: "Our Vision",
                  body:
                    "To become Kerala's most trusted premium smartphone destination — known for genuine devices, honest exchanges and a modern customer-first retail experience that people recommend to everyone they know.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mv-card"
                >
                  <div className="icon-bg">{card.icon}</div>
                  <h3
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      color: "#0f172a",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "1rem" }}>
                    {card.body}
                  </p>
                  {/* Subtle decorative accent */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -30,
                      right: -30,
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(219,234,254,0.8) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATIONS ── */}
        <section style={{ padding: "7rem 0", background: "white" }}>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 2rem",
            }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <span className="section-label">Our Locations</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 800,
                }}
              >
                Visit SWAP Store Near You
              </h2>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
  {
    branch: "Koduvally Branch",
    desc: "Premium smartphones, exchange support and full accessories lineup available.",
    tag: "Branch 01",
    map: "https://www.google.com/maps/search/TVS+Tower+MPC+Junction+Koduvally/@11.3562457,75.9035018,16z?entry=ttu",
  },
  {
    branch: "Mukkam Branch",
    desc: "Trusted destination for iPhones, MacBooks, Samsung flagships and accessories.",
    tag: "Branch 02",
    map: "https://www.google.com/maps/dir//Swap+Digital+Store+Mukkam,+MUROOJ+BUILDING,+MALL+JUNCTION,+Calicut+Rd,+Mukkam,+Kerala+673602",
  },
].map((loc, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="location-card"
                  style={{
                    background: "linear-gradient(145deg, #f0f7ff 0%, #ffffff 100%)",
                    border: "1px solid rgba(219,234,254,0.9)",
                    borderRadius: 20,
                    padding: "2.5rem",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "#0f172a",
                      }}
                    >
                      {loc.branch}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#93c5fd",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {loc.tag}
                    </span>
                  </div>

                  <p
                    style={{
                      color: "#475569",
                      lineHeight: 1.7,
                      marginBottom: "1.75rem",
                      fontSize: "0.975rem",
                    }}
                  >
                    {loc.desc}
                  </p>

                  <a
  href={loc.map}
  target="_blank"
  rel="noopener noreferrer"
  className="map-btn"
>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Open in Google Maps
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY PLACEHOLDER ── */}
        <section
  style={{
    padding: "7rem 0",
    background: "linear-gradient(180deg, #f8faff 0%, #eff6ff 100%)",
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 2rem",
    }}
  >
    {/* TITLE */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ textAlign: "center", marginBottom: "3rem" }}
    >
      <span className="section-label">Gallery</span>

      <h2
        style={{
          fontSize: "clamp(2rem, 3vw, 2.8rem)",
          fontWeight: 800,
        }}
      >
        Inside SWAP Store
      </h2>
    </motion.div>


    {/* FLOWING IMAGE ROWS */}
    <div style={{ overflow: "hidden" }}>

      {/* ROW 1 → RIGHT */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear"
        }}
        style={{
          display: "flex",
          gap: "1.25rem",
          marginBottom: "1.25rem"
        }}
      >
        {[
          store1,
          store2,
          store3,
          store4,
          store5,
          store6,
          store7,
          store8,

          // duplicate for seamless loop
          store1,
          store2,
          store3,
          store4,
          store5,
          store6,
          store7,
          store8
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Store ${i}`}
            style={{
              height: "clamp(160px, 28vw, 320px)",
              borderRadius: 16,
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            }}
          />
        ))}
      </motion.div>


      {/* ROW 2 → LEFT */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear"
        }}
        style={{
          display: "flex",
          gap: "1.25rem"
        }}
      >
        {[
          store8,
          store7,
          store6,
          store5,
          store4,
          store3,
          store2,
          store1,

          // duplicate for seamless loop
          store8,
          store7,
          store6,
          store5,
          store4,
          store3,
          store2,
          store1
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Store ${i}`}
            style={{
              height: "clamp(160px, 28vw, 320px)",
              borderRadius: 16,
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            }}
          />
        ))}
      </motion.div>

    </div>


    {/* FOOTNOTE TEXT */}
    <p
      style={{
        textAlign: "center",
        color: "#94a3b8",
        fontSize: "0.85rem",
        marginTop: "1.5rem",
      }}
    >
      Real moments from SWAP Store customers and events.
    </p>

  </div>
</section>
      </div>
    </>
  );
}