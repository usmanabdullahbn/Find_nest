import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Search, ShoppingCart, Twitter } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="w-full bg-black text-white py-5 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <span>findnest@gmail.com</span>
            <span>49 Russell Square, London, UK</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-gray-300">
              <Facebook size={16} />
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <Instagram size={16} />
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <Linkedin size={16} />
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <Twitter size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Find_nest
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/pages" className="hover:text-gray-600">
              Pages
            </Link>
            <Link to="/properties" className="hover:text-gray-600">
              Properties
            </Link>
            <Link to="/agent" className="hover:text-gray-600">
              Agent
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input type="search" placeholder="Search" className="w-[200px] pl-8" />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            </div>
            <button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
