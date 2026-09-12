import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="hidden items-center gap-2 md:flex">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-auto w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="nav-link">
            Home
          </a>

          <a href="#technologies" className="nav-link">
            Technologies
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button className="text-[#334155] font-medium">
            Sign In
          </button>

          <button className="rounded-full bg-[#d92b83] px-5 py-2 text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile */}
        <div className="relative flex w-full items-center md:hidden">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-gray-700"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Logo */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2 -ml-5"
          >
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-auto w-auto"
            />
          </a>

          {/* Mobile Auth */}
         <div className="ml-auto flex items-center gap-2">
           <button className="text-xs font-medium">
             Sign In
         </button>

        <button className="rounded-full bg-[#d92b83] px-3 py-1.5 text-xs text-white">
            Sign Up
        </button>
         </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;