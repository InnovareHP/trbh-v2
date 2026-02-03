import { linksOurFocus } from "../../lib/constant";
import Breadcrumb from "../sub-layout/sub-layout";

const OurFocus = () => {
  return (
    <div className="min-h-screen h-full">
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src="/background/Our_Focus_Banner.jpg"
          alt="Our Focus Banner"
          className="w-full h-full md:h-[450px] object-cover"
        />
        <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      </div>

      <Breadcrumb pathname="/our-focus" title="Our Focus" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="lg:col-span-2">
          <p className="text-4xl font-bold text-[#0097b2] mb-6">Our Focus</p>

          <div className="flex gap-10">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                Three Rivers Behavioral Health/Three Rivers Residential Health
                (TRBH/TRRH) is committed to providing quality, patient-focused
                care to individuals with primary psychiatric diagnoses.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Recognizing the critical role of environment in patient
                progress, our inpatient hospital, residential services, and
                intensive outpatient program are intentionally designed to
                create a safe and pleasant atmosphere conducive to effective and
                successful treatment.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Each patient receives a tailored treatment plan put together
                specifically for the individual by our multidisciplinary team.
              </p>

              <p className="font-semibold mb-2">
                We specialize in treating conditions such as:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                <li>Anxiety</li>
                <li>Psychosis</li>
                <li>Schizophrenia</li>
                <li>Behavior disturbances</li>
                <li>Depression</li>
                <li>
                  Secondary diagnoses including Alzheimer’s disease, dementia,
                  and mental disorders resulting from brain injury, stroke, or
                  other neuropsychiatric conditions
                </li>
                <li>
                  Post traumatic Stress Disorder, Acute Stress Disorder, and
                  Adjustment Disorders
                </li>
              </ul>
            </div>
            <aside className="space-y-4 hidden md:block">
              {linksOurFocus.map((item, idx) => (
                <div
                  key={idx}
                  className="border-t border-cyan-500 pt-2 w-full flex justify-start"
                >
                  <a
                    href={item.href}
                    className="text-md font-bold text-[#0097b2] w-2xs px-10 hover:underline cursor-pointer"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {linksOurFocus.map((btn, idx) => (
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
  );
};

export default OurFocus;
