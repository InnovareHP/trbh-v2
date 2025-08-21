import React from "react";
import { linksOurFocus, linksPatientVisitorGuide } from "../../lib/constant";

interface BreadcrumbProps {
  pathname: string;
  title?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathname }) => {
  const paths = pathname.split("/").filter(Boolean);

  const findLabel = (href: string) => {
    const match = linksPatientVisitorGuide.find((link) => link.href === href);
    const matchOurFocus = linksOurFocus.find((link) => link.href === href);
    return match
      ? match.label
      : matchOurFocus
      ? matchOurFocus.label
      : href.split("/").pop()?.replace(/-/g, " ");
  };

  return (
    <div className="px-6 pt-10 max-w-7xl mx-auto">
      <nav className="flex items-center space-x-2 font-semibold text-xs flex-wrap gap-y-4">
        <a
          href="/"
          className="font-semibold text-black hover:text-[#0097b2] transition-all duration-300 cursor-pointer"
        >
          HOME
        </a>
        {paths.map((segment, idx) => {
          let href = "/" + paths.slice(0, idx + 1).join("/");
          const isLast = idx === paths.length - 1;
          const singleSegment = paths.length === 1;

          let label = findLabel(href)?.toUpperCase() || segment.toUpperCase();

          if (segment === "patient-visitor-guide") {
            label = "PATIENT & VISITOR GUIDE"; // ✅ only display
          }

          if (href === "/patient & visitor guide") {
            href = "/patient-visitor-guide";
          }

          return (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-gray-400">|</span>
              {isLast && !singleSegment ? (
                <span className="text-gray-500 tracking-wide uppercase">
                  {label}
                </span>
              ) : (
                <a
                  href={href}
                  className={` hover:text-[#0097b2] uppercase transition-all duration-300 cursor-pointer ${
                    isLast ? "text-gray-500" : "font-semibold"
                  }`}
                >
                  {label}
                </a>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;
