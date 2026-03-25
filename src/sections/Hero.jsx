import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Thermometer } from "lucide-react";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[70vh] flex items-center justify-center overflow-visible bg-[#F8F9FA]">

      {/* BACKGROUND GIANT TEXT */}
      <div className="absolute top-[-22%] md:top-[-14%] left-1/2 -translate-x-1/2 w-full pointer-events-none select-none opacity-[0.04] flex flex-col items-center">
        <h1 className="text-[40vw] md:text-[40vw] md:text-[22vw] font-black tracking-tight leading-none whitespace-nowrap" style={{ fontFamily: "'Syne', sans-serif" }}>
          THINK PREMIUM
        </h1>
        <h1 className="text-[40vw] md:text-[40vw] md:text-[22vw] font-black tracking-tight leading-none whitespace-nowrap text-blue-700" style={{ fontFamily: "'Syne', sans-serif" }}>
          THINK SWAP
        </h1>
      </div>

      {/* HERO CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-12">

        {/* LEFT TEXT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pr-6 lg:pr-10 -translate-y-10 lg:-translate-y-14">
          <h1 className="text-6xl lg:text-7xl font-extrabold uppercase leading-none tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
            THINK<br />
            <span className="shimmer-text">ELITE.</span>
          </h1>
        </div>

        {/* CENTER PHONE */}
        <div className="flex flex-col items-center">

          <style>{`
            @keyframes floatPhone {
              0%, 100% { transform: translateY(0px) rotateX(2deg) rotateY(-2deg); }
              50% { transform: translateY(-16px) rotateX(2deg) rotateY(2deg); }
            }
            @keyframes shimmerScreen {
              0% { transform: translateX(-100%) skewX(-15deg); }
              100% { transform: translateX(300%) skewX(-15deg); }
            }
            @keyframes pulseRing {
              0%, 100% { opacity: 0.5; transform: scale(1); }
              50% { opacity: 0.15; transform: scale(1.12); }
            }
            @keyframes rotateOrbit {
              from { transform: rotate(0deg) translateX(58px) rotate(0deg); }
              to   { transform: rotate(360deg) translateX(58px) rotate(-360deg); }
            }
            @keyframes rotateOrbit2 {
              from { transform: rotate(180deg) translateX(80px) rotate(-180deg); }
              to   { transform: rotate(540deg) translateX(80px) rotate(-540deg); }
            }
            @keyframes statusBlink {
              0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
            }

            .phone-shell {
              animation: floatPhone 5s ease-in-out infinite;
              transform-style: preserve-3d;
            }

            .screen-shimmer {
              animation: shimmerScreen 3.5s ease-in-out infinite;
              animation-delay: 1s;
            }

            .orbit-dot-1 {
              position: absolute;
              width: 9px; height: 9px;
              background: #60a5fa;
              border-radius: 50%;
              box-shadow: 0 0 10px #3b82f6, 0 0 4px #93c5fd;
              animation: rotateOrbit 4s linear infinite;
            }

            .orbit-dot-2 {
              position: absolute;
              width: 6px; height: 6px;
              background: #e0f2fe;
              border-radius: 50%;
              box-shadow: 0 0 8px #bae6fd;
              animation: rotateOrbit2 6s linear infinite;
            }

            .status-dot {
              animation: statusBlink 2s ease-in-out infinite;
            }
          `}</style>

          {/* PHONE WRAPPER — orbits need absolute positioning relative to this */}
          <div style={{ position: "relative", display: "inline-block" }}>

            {/* Orbit ring 1 */}
            <div style={{
              position: "absolute",
              inset: "-4vw",
              borderRadius: "50%",
              border: "1px dashed rgba(147,197,253,0.35)",
              pointerEvents: "none",
            }}>
              <div className="orbit-dot-1" style={{ top: "50%", left: "50%", marginTop: -4, marginLeft: -4 }} />
            </div>

            {/* Orbit ring 2 */}
            <div style={{
              position: "absolute",
              inset: "-16px",
              borderRadius: "50%",
              border: "1px dashed rgba(147,197,253,0.18)",
              pointerEvents: "none",
            }}>
              <div className="orbit-dot-2" style={{ top: "50%", left: "50%", marginTop: -3, marginLeft: -3 }} />
            </div>

            {/* PHONE SHELL */}
            <div
              className="phone-shell"
              style={{
                width: "min(42vw, 200px)",
height: "min(85vw, 360px)",
                borderRadius: "3.2rem",
                background: "linear-gradient(145deg, #1e293b 0%, #0f172a 60%, #1e3a5f 100%)",
                padding: 3,
                boxShadow: `
                  0 60px 100px rgba(0,0,0,0.45),
                  0 20px 40px rgba(37,99,235,0.25),
                  0 0 0 1px rgba(255,255,255,0.08),
                  inset 0 1px 0 rgba(255,255,255,0.12)
                `,
                position: "relative",
              }}
            >
              {/* Side button left */}
              <div style={{
                position: "absolute",
                left: -4,
                top: 100,
                width: 4,
                height: 32,
                background: "linear-gradient(180deg, #334155, #1e293b)",
                borderRadius: "2px 0 0 2px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
              }} />
              <div style={{
                position: "absolute",
                left: -4,
                top: 148,
                width: 4,
                height: 32,
                background: "linear-gradient(180deg, #334155, #1e293b)",
                borderRadius: "2px 0 0 2px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
              }} />
              {/* Side button right (power) */}
              <div style={{
                position: "absolute",
                right: -4,
                top: 120,
                width: 4,
                height: 48,
                background: "linear-gradient(180deg, #334155, #1e293b)",
                borderRadius: "0 2px 2px 0",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
              }} />

              {/* INNER SCREEN */}
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "3rem",
                overflow: "hidden",
                background: "#060d1a",
                position: "relative",
              }}>

                {/* Screen base gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(155deg, #1e40af 0%, #1d4ed8 30%, #0ea5e9 65%, #0369a1 100%)",
                  opacity: 0.92,
                }} />

                {/* Mesh / noise texture feel */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(14,165,233,0.25) 0%, transparent 55%)",
                }} />

                {/* Shimmer sweep */}
                <div
                  className="screen-shimmer"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Glass top reflection */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "45%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                  borderRadius: "3rem 3rem 0 0",
                }} />

                {/* Dynamic Island (notch) */}
                <div style={{
                  position: "absolute",
                  top: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 100,
                  height: 28,
                  background: "#000",
                  borderRadius: 999,
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 10,
                  gap: 6,
                }}>
                  {/* Camera dot */}
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1a1a2e", border: "1.5px solid #334155", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 2, borderRadius: "50%", background: "#1e3a5f" }} />
                  </div>
                  {/* Mic dot */}
                  <div className="status-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee" }} />
                </div>

                {/* Screen content */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 20,
                }}>

                  {/* Time */}
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                  }}>
                    9:41
                  </div>
                  <div style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: 4,
                    marginBottom: 28,
                  }}>
                    Wednesday
                  </div>

                  {/* SWAP logo card on screen */}
                  <div style={{
                    width: 140,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 16,
                    padding: "14px 18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  }}>
                    <img src={logo} alt="SWAP" style={{ width: 36, filter: "brightness(0) invert(1)", opacity: 0.9 }} />
                    <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", fontWeight: 600 }}>
                      SWAP Store
                    </span>
                  </div>

                  {/* Bottom bar */}
                  <div style={{
                    position: "absolute",
                    bottom: 18,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 100,
                    height: 4,
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.35)",
                  }} />
                </div>

              </div>

              {/* Phone edge highlight */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "3.2rem",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                pointerEvents: "none",
              }} />

            </div>

            {/* Ground shadow */}
            <div style={{
              position: "absolute",
              bottom: -24,
              left: "50%",
              transform: "translateX(-50%)",
              width: 160,
              height: 20,
              background: "radial-gradient(ellipse, rgba(37,99,235,0.3) 0%, transparent 70%)",
              filter: "blur(8px)",
              pointerEvents: "none",
            }} />
          </div>

          {/* FEATURE BADGES */}
          <div className="flex flex-row justify-center gap-4 mt-10">
            {[
              { icon: Thermometer, label: "Aerospace Grade" },
              { icon: Cpu, label: "Neural Processing" },
              { icon: ShieldCheck, label: "Encrypted Trust" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-gray-200 px-3 py-2 md:px-6 md:py-3 rounded-full shadow-sm"
                >
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase text-gray-600">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pl-6 lg:pl-10 -translate-y-10 lg:-translate-y-14">
          <h1 className="text-6xl lg:text-7xl font-extrabold uppercase leading-none tracking-tight text-slate-900" style={{ fontFamily: "'Syne', sans-serif" }}>
            Think <br />
            <span className="shimmer-text">SWAP.</span>
          </h1>
        </div>

      </div>

    </section>
  );
}