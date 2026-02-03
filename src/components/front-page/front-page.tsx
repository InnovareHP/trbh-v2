import ButtonCTA from "../button";

const IntroductionPage = () => {
  return (
    <div className="min-h-screen h-full">
      <div className="flex flex-col items-center justify-center mb-16">
        <img
          src="/image/ourMission.jpg"
          alt="Welcome"
          className="w-full h-[200px] md:h-[550px] object-cover object-center"
        />
        <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      </div>

      <section className="bg-[#f3f3f3] w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div>
            <img
              src="/image/Mission.jpg"
              alt="Doctor with patient"
              className="w-[350px] md:w-[450px] h-[250px] md:h-[400px] object-cover "
            />
          </div>

          <div className="flex flex-col max-w-xs md:max-w-3xl">
            <p className="text-2xl md:text-4xl font-semibold text-[#0097b2] mb-4">
              Our Mission
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-lg">
              Three Rivers Behavioral Health Hospital is a dedicated, and
              trusted psychiatric facility. Three Rivers brings you the
              comprehensive services that include Inpatient Older Adult
              Psychiatric Hospitalization, Adult Residential Mental Health
              Services and Intensive Outpatient Programming. We strive to
              provide short term care and treatment to Adult patients with
              psychiatric diagnoses. Providing our patients with compassionate
              and comprehensive treatment for all their psychological,
              behavioral, physical, and socialization needs.
            </p>
            <ButtonCTA
              text="LEARN MORE ABOUT THREE RIVERS BEHAVIORAL HEALTH"
              href="/about-us"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] w-full my-10">
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="">
            <img
              src="/image/our-vision.jpg"
              alt="Doctor with patient"
              className="w-[350px] md:w-[450px] h-[250px] md:h-[400px] object-cover "
            />
          </div>

          {/* Text */}
          <div className="flex flex-col max-w-xs md:max-w-3xl pb-6">
            <p className="text-2xl md:text-4xl font-semibold text-[#0097b2] mb-4">
              Our Vision
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-lg">
              To be recognized as a leading psychiatric health organization,
              differentiated by discovery, innovation, compassionate, and
              excellent patient and family-centered care.
            </p>
            <ButtonCTA
              text="WHY THREE RIVERS BEHAVIORAL HEALTH?"
              href="/our-focus/psychiatric-inpatient-treatment-program"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] w-full my-10 pb-10">
        <div className="max-w-xs md:max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="">
            <img
              src="/image/contact-us.jpg"
              alt="Doctor with patient"
              className="w-full md:w-[450px] h-[200px] md:h-[400px] object-cover "
            />
          </div>

          <div className="text-[#0097b2] px-2">
            <p className="text-2xl md:text-4xl font-semibold mb-6 tracking-wide">
              Contact Us
            </p>

            <p className="text-lg font-medium mb-4">
              Three Rivers Behavioral Health
            </p>

            <p className="text-[#0097b2] font-bold underline mb-4">
              <a
                href="https://www.google.com/maps/place/Three+Rivers+Behavioral+Health/@40.389874,-79.8779095,17z/data=!3m1!4b1!4m6!3m5!1s0x8834ef507fa8d655:0x63ad62d7af0e6219!8m2!3d40.389874!4d-79.8779095!16s%2Fg%2F11x0_20gs3?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                4043 Irene St
                <br />
                West Mifflin, PA 15122
                <br />
              </a>
            </p>

            <div className="space-y-2 text-lg">
              <p>
                Main Hospital Toll Free Phone:{" "}
                <a
                  href="tel:18883910229"
                  className="text-[#0097b2] font-bold underline"
                >
                  1-888-391-0229
                </a>
              </p>
              <p>
                Intake Toll Free Phone:{" "}
                <a
                  href="tel:18883912655"
                  className="text-[#0097b2] font-bold underline"
                >
                  1-888-391-2655
                </a>
              </p>
              <p>
                Main Hospital Local Phone:{" "}
                <a
                  href="tel:4127069201"
                  className="text-[#0097b2] font-bold underline"
                >
                  412-706-9201
                </a>
              </p>
              <p>
                Fax:{" "}
                <a
                  href="tel:4127069202"
                  className="text-[#0097b2] font-bold underline"
                >
                  412-706-9202
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionPage;
