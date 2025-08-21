import { linksPatientVisitorGuide } from "../../lib/constant";
import Breadcrumb from "./sub-layout";

import React from "react";

const PatientVisitorLayout = ({
  children,
  title,
  pathname,
}: {
  children: React.ReactNode;
  title: string;
  pathname: string;
}) => {
  return (
    <div className="min-h-fit">
      <div className="bg-gradient-to-tr from-cyan-600 to-cyan-300 h-4 w-full"></div>

      <Breadcrumb pathname={pathname} title={title} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="lg:col-span-2">
          <div className="flex gap-10">
            {children}
            <aside className="space-y-4 hidden md:block">
              {linksPatientVisitorGuide.map((item, idx) => (
                <div
                  key={idx}
                  className="border-t border-cyan-500 pt-2 w-full flex justify-center"
                >
                  <a
                    href={item.href}
                    className="text-base font-bold text-primary w-60 text-start px-4 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientVisitorLayout;
