import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  const navLinks = [
    {
      name: "Our Focus",
      href: "/our-focus",
    },
    {
      name: "Psychiatric Inpatient Treatment Program",
      href: "/our-focus/psychiatric-inpatient-treatment-program",
      subLinks: [
        {
          name: "Conditions and Therapy Program",
          href: "/patient-visitor-guide",
        },
        { name: "Nutrition Program", href: "/our-focus/nutrition-program" },
        {
          name: "Preparing for Your Psychiatric Inpatient Stay",
          href: "/patient-visitor-guide/preparing-for-your-stay",
        },
        {
          name: "During Your Psychiatric Inpatient Stay",
          href: "/patient-visitor-guide/during-your-stay",
        },
        {
          name: "Psychiatric Inpatient Discharge and Follow-up",
          href: "/patient-visitor-guide/discharge-and-follow-up",
        },
        {
          name: "Getting Help at Home After Psychiatric Inpatient",
          href: "/patient-visitor-guide/getting-help-at-home",
        },
        {
          name: "Discharge to a Facility After Psychiatric Inpatient",
          href: "/patient-visitor-guide/discharge-to-a-facility",
        },
      ],
    },
    {
      name: "Residential Treatment Program",
      href: "/residential-treatment",
      subLinks: [
        {
          name: "Preparing for Your Residential Stay",
          href: "/patient-visitor-guide/preparing-for-your-stay",
        },
        {
          name: "During Your Residential Stay",
          href: "/patient-visitor-guide/during-your-stay",
        },
      ],
    },
    {
      name: "Intensive Outpatient Program",
      href: "/inpatient-guide",
    },
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
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between py-6 w-full max-w-7xl mx-auto px-4 bg-white z-50 relative">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo/trbh-logo.png"
            alt="Logo"
            className="h-20 md:h-40 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center relative">
          {navLinks.map((link) => (
            <li key={link.name} className="group relative">
              <a
                href={link.href}
                className="text-blue-900 hover:text-cyan-600 transition text-md font-semibold flex items-center"
              >
                {link.name}
                {link.subLinks && (
                  <ChevronDown className="ml-1 w-4 h-4 text-blue-900 group-hover:text-cyan-600 transition" />
                )}
              </a>

              {link.subLinks && (
                <ul className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                  {link.subLinks.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href={sub.href}
                        className="block px-4 py-2 text-blue-900 hover:bg-cyan-50 hover:text-cyan-700 text-sm font-medium"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Burger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none z-50 absolute right-4 top-4"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 pt-42 w-full h-full bg-neutral-900/95 p-6 overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <div
                className="flex justify-between items-center text-white font-semibold cursor-pointer"
                onClick={() =>
                  setActiveSub(activeSub === link.name ? null : link.name)
                }
              >
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
                {link.subLinks && (
                  <ChevronDown
                    className={`ml-2 transform transition-transform ${
                      activeSub === link.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Mobile Submenu */}
              {activeSub === link.name && link.subLinks && (
                <ul className="mt-2 ml-4 space-y-2">
                  {link.subLinks.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href={sub.href}
                        className="block text-gray-300 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li>
            <a
              href="/about-us"
              className="block text-white font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
