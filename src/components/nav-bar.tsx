const NavBar = () => {
  const navLinks = [
    { name: "Our Focus", href: "/our-focus" },
    { name: "Residential Treatment", href: "/residential-treatment" },
    { name: "Patient & Visitor Guide", href: "/patient-visitor-guide" },
    { name: "Referral Process", href: "/referral-process" },
    { name: "Location & Contact", href: "/location-contact" },
  ];

  return (
    <nav className="w-full ">
      <div className="bg-cyan-600 hidden md:block">
        <div className="flex justify-end text-white text-sm font-semibold max-w-7xl mx-auto">
          <a
            href="#"
            className="px-6 py-2 border-l border-cyan-700 hover:bg-cyan-700 transition"
          >
            About Us
          </a>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap border-black items-center justify-between py-6 w-full max-w-7xl mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="/logo/trbh-logo.png"
            alt="Logo"
            className="h-28 w-auto object-contain"
          />
        </a>

        <ul className="hidden sm:flex space-x-8  md:border-none border-t justify-center items-center md:px-0 px-6 md:py-0 pt-4">
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
      </div>
    </nav>
  );
};

export default NavBar;
