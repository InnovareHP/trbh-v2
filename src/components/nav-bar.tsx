import { Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Our Focus", href: "/our-focus" },
    { name: "Residential Treatment", href: "/residential-treatment" },
    { name: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
    { name: "Referral Process", href: "/referral-process" },
    { name: "Location & Contact", href: "/location-contact" },
  ];

  return (
    <nav className="w-full relative">
      {/* Top Bar */}
      <div className="bg-cyan-600 hidden md:block">
        <div className="flex justify-end text-white text-sm font-semibold max-w-7xl mx-auto">
          <a
            href="/about-us"
            className="px-6 py-2 border-l border-cyan-700 hover:bg-cyan-700 transition"
          >
            About Us
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between py-6 w-full max-w-7xl mx-auto px-4 bg-white z-50">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo/trbh-logo.png"
            alt="Logo"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex space-x-8 justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-blue-900 hover:text-cyan-600 transition text-md font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-black focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={` ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-30 right-0 h-full w-full bg-neutral-900 shadow-lg z-50 p-6 flex flex-col space-y-6 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } ${!isOpen ? "pointer-events-none" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-white transition font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/about-us"
                className="block text-white transition font-semibold"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
