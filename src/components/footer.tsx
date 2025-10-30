const Footer = () => {
  const quickLinks = [
    { label: "Patients and Visitors", href: "/patient-visitor-guide" },
  ];
  const resources = [
    { label: "Our Brochure", href: "/our-focus/brochure" },
    { label: "Referral Process", href: "/referral-process" },
  ];
  const policies = [
    {
      label: "Notice of Nondiscrimination",
      href: "/notice-of-nondiscrimination",
    },
    { label: "Price Transparency", href: "/price-transparency" },
    {
      label: "Notice of Privacy Practices (HIPAA)",
      href: "/notice-of-privacy-practices-hipaa",
    },
  ];

  return (
    <footer className="bg-[#343434] text-white py-12 w-full relative bottom-0 left-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Logo */}
        <div className="mb-6 flex justify-center md:justify-start">
          <img
            src="/logo/trbh-logo-white.png"
            alt="Three Rivers Behavioral Health"
            className="h-36"
          />
        </div>

        {/* Sections */}
        <div
          className="flex flex-col items-center justify-center text-center gap-12
                        lg:flex-row lg:justify-evenly lg:items-start lg:text-left"
        >
          {/* Address */}
          <a
            href="https://www.google.com/maps/@38.3117107,-86.9643974,17z?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="space-y-4"
          >
            <h2 className="font-bold">THREE RIVERS BEHAVIORAL HEALTH</h2>
            <h3 className="mt-3 text-sm leading-6">
              4043 Irene St
              <br />
              West Mifflin, PA 15122
              <br />
              412-706-9201
            </h3>
          </a>

          {/* Quick Links */}
          <div className="space-y-2">
            <h2 className="font-bold mb-3">QUICKLINKS</h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-white font-semibold hover:font-bold transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-bold mb-3">RESOURCES FOR YOU</h2>
            <ul className="space-y-2 text-sm">
              {resources.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-white font-semibold hover:font-bold transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Policies */}
      <div className="mt-10 text-md font-semibold pt-6 text-center flex flex-col space-y-2 text-sm md:flex-row md:justify-center md:space-y-0 md:space-x-3">
        {policies.map((link, i) => (
          <a key={i} href={link.href} className="hover:underline">
            {link.label}
            {i !== policies.length - 1 && (
              <span className="text-neutral-400"> |</span>
            )}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <h3 className="mt-6 text-center text-neutral-300 text-sm">
        © 2025 Three Rivers Behavioral Health. All Rights Reserved
      </h3>
    </footer>
  );
};

export default Footer;
