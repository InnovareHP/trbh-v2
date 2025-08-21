import ButtonCTA from "../button";

const IntroductionPage = () => {
  return (
    <div className="min-h-screen h-full">
      <div className="flex flex-col items-center justify-center mb-16">
        <img
          src="/background/MBH_Homepage_Hero_2000x375.png"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="bg-gradient-to-tr from-cyan-600 to-cyan-300 h-4 w-full"></div>
      </div>

      <section className="bg-[#f3f3f3] w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div>
            <img
              src="/background/OurMission_400x280.jpg"
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
              href="/"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] w-full my-10">
        <div className=" max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="">
            <img
              src="/background/Our_Vision_HCProviders_400x280.jpg"
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
            <ButtonCTA text="WHY THREE RIVERS BEHAVIORAL HEALTH?" href="/" />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] w-full my-10 pb-10">
        <div className="max-w-xs md:max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="">
            <img
              src="/background/homepage_contact_400x280.jpg"
              alt="Doctor with patient"
              className="w-[350px] md:w-[450px] h-[250px] md:h-[400px] object-cover "
            />
          </div>

          <div className="text-[#0097b2]">
            <p className="text-4xl font-semibold mb-6 tracking-wide">
              Contact Us
            </p>

            <p className="text-lg font-medium mb-4">
              Three Rivers Behavioral Health
            </p>

            <p className="text-[#0097b2] font-bold underline mb-4">
              <a href="https://maps.google.com" target="_blank">
                1880 Medical Arts Drive <br />
                West Mifflin, PA 15122
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
