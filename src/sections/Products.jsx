import { motion } from "framer-motion";
import workstationImg from "../assets/products/laptop.jpg";
import mobileImg from "../assets/products/mobile.jpg";
import tabletImg from "../assets/products/tablet.jpg";
import accessoriesImg from "../assets/products/accessories.jpg";

const products = [
  {
    id: "mobile",
    label: "Mobile Phones",
    sub: "iPhone & Samsung Flagships",
    img: mobileImg,
    span: "big",
    tag: "Best Seller",
  },
  {
    id: "laptops",
    label: "Laptops",
    sub: "MacBooks & Ultrabooks",
    img: workstationImg,
    span: "normal",
    tag: "New Arrivals",
  },
  {
    id: "tablets",
    label: "Tablets",
    sub: "iPads & Galaxy Tabs",
    img: tabletImg,
    span: "normal",
    tag: null,
  },
  {
    id: "accessories",
    label: "Accessories",
    sub: "Cases, Cables & More",
    img: accessoriesImg,
    span: "normal",
    tag: "Top Picks",
  },
  {
    id: "exchange",
    label: "Exchange & Upgrade",
    sub: "Fair Value, Zero Hassle",
    img: accessoriesImg,
    span: "wide",
    tag: "Special",
  },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {},
};

const cardAnim = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Products() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .products-section {
          font-family: 'DM Sans', sans-serif;
          padding: 6rem 0 7rem;
          background: #fff;
          position: relative;
          overflow: hidden;
        }

        /* Faint grid dot background */
        .products-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #dbeafe 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.45;
          pointer-events: none;
        }

        /* Soft radial glow top-right */
        .products-section::after {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .products-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* ── Header ── */
        .products-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.75rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .section-eyebrow {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          margin: 0;
        }

        .section-title span {
          color: #2563eb;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
          padding: 10px 22px;
          border: 1.5px solid #bfdbfe;
          border-radius: 999px;
          transition: all 0.25s ease;
          background: #f0f7ff;
          white-space: nowrap;
        }

        .view-all-btn:hover {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .view-all-btn svg {
          transition: transform 0.25s ease;
        }

        .view-all-btn:hover svg {
          transform: translateX(4px);
        }

        /* ── Bento Grid ── */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 260px 220px;
          gap: 1.25rem;
        }

        /* card positions */
        .bento-card:nth-child(1) { grid-column: span 5; grid-row: span 2; }
        .bento-card:nth-child(2) { grid-column: span 4; grid-row: span 1; }
        .bento-card:nth-child(3) { grid-column: span 3; grid-row: span 1; }
        .bento-card:nth-child(4) { grid-column: span 3; grid-row: span 1; }
        .bento-card:nth-child(5) { grid-column: span 4; grid-row: span 1; }

        /* ── Card base ── */
        .bento-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: #dbeafe;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }

        .bento-card:hover {
          box-shadow: 0 20px 60px rgba(37,99,235,0.2);
          transform: translateY(-5px) scale(1.01);
        }

        .bento-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }

        .bento-card:hover img {
          transform: scale(1.07);
        }

        /* Gradient overlay */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 17, 45, 0.75) 0%,
            rgba(7, 17, 45, 0.1) 55%,
            transparent 100%
          );
          transition: background 0.35s ease;
        }

        .bento-card:hover .card-overlay {
          background: linear-gradient(
            to top,
            rgba(29, 78, 216, 0.8) 0%,
            rgba(29, 78, 216, 0.15) 55%,
            transparent 100%
          );
        }

        /* Blue accent stripe on hover */
        .card-stripe {
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

        .bento-card:hover .card-stripe { transform: scaleX(1); }

        /* Card content */
        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.4rem 1.5rem;
        }

        .card-label {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          margin-bottom: 0.2rem;
        }

        .bento-card:nth-child(1) .card-label {
          font-size: 1.4rem;
        }

        .card-sub {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.75);
          font-weight: 400;
        }

        .card-arrow {
          position: absolute;
          bottom: 1.4rem;
          right: 1.4rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .bento-card:hover .card-arrow {
          opacity: 1;
          transform: scale(1);
        }

        /* Tag badge */
        .card-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .bento-card:nth-child(1) { grid-column: span 2; grid-row: span 1; height: 260px; }
          .bento-card:nth-child(2),
          .bento-card:nth-child(3),
          .bento-card:nth-child(4),
          .bento-card:nth-child(5) { grid-column: span 1; grid-row: span 1; height: 180px; }
        }

        @media (max-width: 520px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card { grid-column: span 1 !important; height: 200px !important; }
        }
      `}</style>

      <section id="products" className="products-section">
        <div className="products-inner">

          {/* Header */}
          <div className="products-header">
            <div>
              <p className="section-eyebrow">Categories</p>
              <h2 className="section-title">
                Explore Our <span>Products</span>
              </h2>
            </div>
            <a href="#" className="view-all-btn">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Bento Grid */}
          <motion.div
            className="bento-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                className="bento-card"
                variants={cardAnim}
              >
                <img src={p.img} alt={p.label} />
                <div className="card-overlay" />
                <div className="card-stripe" />

                {p.tag && <div className="card-tag">{p.tag}</div>}

                <div className="card-content">
                  <div className="card-label">{p.label}</div>
                  <div className="card-sub">{p.sub}</div>
                </div>

                {/* Arrow button */}
                <div className="card-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}