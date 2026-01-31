import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-2xl font-bold tracking-wide font-serif">Sliq</div>

    
      <div className="hidden md:flex gap-6 font-semibold text-lg">
        <a href="/" className="hover:text-red-900">
          Home
        </a>
        <a href="/store" className="hover:text-red-900">
          Store
        </a>
        <a href="/blog" className="hover:text-red-900">
          Blog
        </a>
        <a href="/sales" className="hover:text-red-900">
          Sales
        </a>
      </div>

      
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-2">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 ml-2 outline-none w-32"
          />
        </div>
        <User size={24} className="cursor-pointer" />
        <ShoppingCart size={24} className="cursor-pointer" />
      </div>

      
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

     
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
          <div className="flex flex-col gap-4 p-4">
            <a href="/" className="hover:text-red-900">
              Home
            </a>
            <a href="/store" className="hover:text-red-900">
              Store
            </a>
            <a href="/blog" className="hover:text-red-900">
              Blog
            </a>
            <a href="/sales" className="hover:text-red-900">
              Sales
            </a>
            <User size={24} className="cursor-pointer" />
            <ShoppingCart size={24} className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
