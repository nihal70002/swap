import Navbar from "../sections/Navbar";
import Opening from "../sections/Opening";
import MissionVision from "../sections/MissionVision";
import Locations from "../sections/Locations";
import Gallery from "../sections/Gallery";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* INTRO SECTION */}
      <section className="py-24 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-blue-600 font-semibold uppercase tracking-[0.3em] text-xs mb-4">
              About SWAP Store
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Destination for
              <span className="text-blue-600"> Premium Smartphones</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              SWAP Store specializes in premium smartphones including iPhone,
              Samsung flagship devices, MacBooks, iPads, and accessories.
              We provide both brand-new and carefully verified pre-owned
              devices with trusted quality and fair pricing.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              With stores in Koduvalli and Mukkam, SWAP has become a trusted
              destination for customers looking to upgrade confidently to
              premium devices.
            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <img
              src={logo}
              alt="SWAP Store"
              className="w-40 drop-shadow-lg"
            />

          </motion.div>

        </div>

      </section>


      {/* OPENING VIDEO SECTION */}
      <Opening />


      {/* MISSION + VISION */}
      <MissionVision />


      {/* LOCATIONS */}
      <Locations />


      {/* GALLERY */}
      <Gallery />

    </>
  );
}