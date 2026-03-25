import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="SWAP Store"
            className="w-10 h-10 object-contain"
          />

          <span className="text-xl font-bold text-blue-700">
            SWAP Store
          </span>

        </div>


        {/* MENU */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700">

          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#products" className="hover:text-blue-600">
  Products
</a>


          <a href="#" className="hover:text-blue-600">
            Offers
          </a>
<a href="#contact" className="hover:text-blue-600">
  Contact
</a>

        </div>


     {/* WHATSAPP BUTTON */}
<a
  href="https://wa.me/91628252551"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
>
  WhatsApp
</a>

      </div>

    </nav>
  );
}