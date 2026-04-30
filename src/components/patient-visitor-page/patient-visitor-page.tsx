import { linksPatientVisitorGuide } from "../../lib/constant";
import Breadcrumb from "../sub-layout/sub-layout";

const PatientVisitorPage = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-8">
        <img
          src="/background/referral-process.jpg"
          alt="Patient and visitor guide banner for Three Rivers Behavioral Health"
          width={1200}
          height={350}
          fetchpriority="high"
          className="w-full h-[150px] md:h-[350px] object-cover"
        />
        <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      </header>

      <Breadcrumb
        pathname="/patient-visitor-guide"
        title="Patient & Visitor Guide"
      />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 id="patient-visitor-heading" className="text-4xl font-bold text-[#0097b2] mb-6">
          Patient & Visitor Guide
        </h1>

        <div className="flex gap-10">
          <section aria-labelledby="patient-visitor-heading" className="flex-1">
            <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {linksPatientVisitorGuide.map((btn, idx) => (
                <a
                  href={btn.href}
                  key={idx}
                  className="bg-[#c5daef] hover:bg-white transition-all duration-300 p-8 text-center font-bold text-lg text-gray-900 tracking-wide shadow-sm hover:shadow-md cursor-pointer"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </section>
          <aside className="space-y-4 hidden md:block">
            <nav aria-label="Patient Guide Navigation">
              {linksPatientVisitorGuide.map((item, idx) => (
                <div
                  key={idx}
                  className="border-t border-cyan-500 pt-2 w-full flex justify-center"
                >
                  <a
                    href={item.href}
                    className="text-base font-medium text-[#0097b2] w-52 text-start px-4 hover:underline cursor-pointer"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
          </aside>
        </div>
      </main>
    </>
  );
};

export default PatientVisitorPage;
