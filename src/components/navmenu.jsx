import React, { useState } from "react";
import { Menu }  from "lucide-react";
import { Link } from "react-router-dom";

export default function NavbarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav >
      
      <div className="">
        <button
          className="p-2 rounded-md text-gray-700 transition-colors hover:bg-gray-200"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 mt-12 w-64 bg-gray-100 shadow-lg rounded-md z-20">
            <div className="flex flex-col p-4 space-y-4">
            <Link to="/shop" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200" >
              SHOP
              </Link>
              <Link to="/" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200" >
                NEW ARRIVALS
              </Link>
              <Link to="/" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200" >
               BEST SELLING
              </Link>
              <Link to="/" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200" >
               BVM LUXURE
              </Link>
             
              <Link to="/order" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200" >
                TRACK ORDER
              </Link>
              <Link to="/" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200" >
               CUSTOMER SUPPORT
              </Link>
              <Link to="/store" className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200" >
               VISIT STORE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
