import { MapPin, Phone, Navigation } from "lucide-react";

export default function Contact() {
  return (
    <section
  id="contact"
  className="py-24 bg-gradient-to-b from-blue-700 to-blue-900 text-white"
>

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Visit Our Stores
        </h2>

        <p className="text-blue-100 mb-12">
          Experience premium smartphones, laptops & accessories near you
        </p>


        {/* Store Grid */}
        <div className="grid md:grid-cols-2 gap-10">


          {/* Koduvalli */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl hover:shadow-2xl transition">

            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={22} />
              <h3 className="text-2xl font-semibold">
                Koduvally Store
              </h3>
            </div>

            <p className="text-blue-100">
              TVS Tower, MPC Junction
            </p>

            <p className="text-blue-200">
              Koduvally, Kerala 673572
            </p>


            <div className="flex justify-center gap-4 mt-6">

              {/* Call button */}
              <a
                href="tel:+916282425551"
                className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100"
              >
                <Phone size={18} />
                Call
              </a>

              {/* Maps button */}
              <a
                href="https://www.google.com/maps/search/TVS+Tower+MPC+Junction+Koduvally/@11.3562457,75.9035018,16z?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                <Navigation size={18} />
                Directions
              </a>

            </div>

          </div>


          {/* Mukkam */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl hover:shadow-2xl transition">

            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={22} />
              <h3 className="text-2xl font-semibold">
                Mukkam Store
              </h3>
            </div>

            <p className="text-blue-100">
              Murooj Building Mall Junction
            </p>

            <p className="text-blue-200">
              Mukkam, Kerala 673602
            </p>


            <div className="flex justify-center gap-4 mt-6">

              {/* Call button */}
              <a
                href="tel:+916282425551"
                className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100"
              >
                <Phone size={18} />
                Call
              </a>

              {/* Maps button */}
              <a
                href="https://www.google.com/maps?daddr=MUROOJ+BUILDING,+MALL+JUNCTION,+Calicut+Rd,+Mukkam,+Kerala+673602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                <Navigation size={18} />
                Directions
              </a>

            </div>

          </div>

        </div>


        {/* Footer tagline */}
        <p className="mt-14 text-blue-200 text-sm">
          Come in and experience premium devices today • #GetSwapped
        </p>

      </div>

    </section>
  );
}



