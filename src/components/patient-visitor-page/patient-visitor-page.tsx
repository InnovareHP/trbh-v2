import { linksPatientVisitorGuide } from "../../lib/constant";
import Breadcrumb from "../sub-layout/sub-layout";

const PatientVisitorPage = () => {
  return (
    <div className="min-h-fit">
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src="/background/patients_and_visitors2000x375.jpg"
          alt="Our Focus Banner"
          className="w-full h-[350px] object-cover"
        />
        <div className="bg-gradient-to-tr from-cyan-600 to-cyan-300 h-4 w-full"></div>
      </div>

      <Breadcrumb
        pathname="/patient-visitor-guide"
        title="Patient & Visitor Guide"
      />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="lg:col-span-2">
          <p className="text-4xl font-bold text-[#0097b2] mb-6">
            Patient & Visitor Guide
          </p>

          <div className="flex gap-10">
            <div className="flex-1">
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
            </div>
            <aside className="space-y-4 hidden md:block">
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
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientVisitorPage;
