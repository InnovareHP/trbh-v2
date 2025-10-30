import { linksInPatientVisitorGuide } from "../../lib/constant";
import Breadcrumb from "./sub-layout";

import React from "react";

const InPatientVisitorLayout = ({
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
      {title === "preparing-for-your-stay" ? (
        <div className="flex flex-col items-center justify-center mb-8">
          <img
            src="/background/referral-process.jpg"
            alt="Our Focus Banner"
            className="w-full h-[150px] md:h-[350px] object-cover"
          />
          <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
        </div>
      ) : (
        <div className="bg-gradient-to-tr from-cyan-600 to-cyan-300 h-4 w-full"></div>
      )}

      <Breadcrumb pathname={pathname} title={title} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="lg:col-span-2">
          <div className="flex gap-10">
            {children}
            <aside className="space-y-4 hidden md:block">
              {linksInPatientVisitorGuide.map((item, idx) => (
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

export default InPatientVisitorLayout;
