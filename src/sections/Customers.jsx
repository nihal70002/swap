import c1 from "../assets/customers/customer1.jpg";
import c2 from "../assets/customers/customer2.jpg";
import c3 from "../assets/customers/customer3.jpg";
import c4 from "../assets/customers/customer4.jpg";

export default function Customers() {

  const images = [c1, c2, c3, c4, c1, c2, c3, c4]; 
  // duplicated for smooth infinite scrolling

  return (
    <section className="py-20 bg-white overflow-hidden">

     <div className="text-center mb-12">

  <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-2">
    Our Customers
  </p>

  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
    Happy Customers at SWAP Store
  </h2>

  <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

</div>

      {/* SLIDER CONTAINER */}
      <div className="relative">

        <div className="flex gap-6 animate-scroll px-6">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="SWAP customer"
              className="w-[45%] sm:w-[30%] md:w-[22%] rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          ))}

        </div>

      </div>

      {/* CUSTOM ANIMATION */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 18s linear infinite;
          }
        `}
      </style>

    </section>
  );
}