import { defaultLinks } from "../../lib/constant";
import Breadcrumb from "../sub-layout/sub-layout";

const Notice = () => {
  return (
    <div className="min-h-fit">
      <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>

      <Breadcrumb
        pathname="/notice-of-nondiscrimination"
        title="Notice of Nondiscrimination"
      />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Notice of Nondiscrimination
          </h2>

          <div className="flex gap-10">
            <div className="flex-1">
              <section>
                <p className="text-gray-700 leading-relaxed">
                  Three Behavioral Health complies with applicable federal civil
                  rights laws and does not discriminate in the provision of
                  services to an individual based on the individual’s race,
                  color, national origin, age, disability, creed, religion,
                  ethnicity, handicap, sex, gender identity, and sexual
                  orientation.
                </p>
              </section>
            </div>
            <aside className="space-y-4 hidden md:block">
              {defaultLinks.map((item, idx) => (
                <div
                  key={idx}
                  className="border-t border-cyan-500 pt-2 w-full flex justify-center"
                >
                  <a
                    href={item.href}
                    className="text-base font-medium text-[#0097b2] w-52 text-start px-4 cursor-pointer"
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

export default Notice;
