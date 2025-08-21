import Breadcrumb from "../sub-layout/sub-layout";

const LocationContact = () => {
  return (
    <div className="min-h-fit">
      <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      <Breadcrumb pathname="/location-contact" title="Location & Contact" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-4xl font-bold text-[#0097b2] mb-8">
          Location / Contact
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-[#f0f8fb] h-[350px] p-8 rounded-md shadow-sm text-center flex flex-col justify-center">
            <p className="text-lg mb-2 text-[#0097b2]">
              Three Rivers Behavioral Health
            </p>
            <p className="text-[#0097b2] font-medium mb-6">
              4043 Irene St, West Mifflin, PA 15122
            </p>

            <div className="space-y-3 text-[#0097b2]">
              <p>
                Main Hospital Toll Free Phone:{" "}
                <a
                  href="tel:1-888-391-0229"
                  className="text-[#0097b2] hover:underline font-bold"
                >
                  1-888-391-0229
                </a>
              </p>
              <p>
                Intake Toll Free Phone:{" "}
                <a
                  href="tel:1-888-391-2655"
                  className="text-[#0097b2] hover:underline font-bold"
                >
                  1-888-391-2655
                </a>
              </p>
              <p>
                Main Hospital Local Phone:{" "}
                <a
                  href="tel:412-706-9201"
                  className="text-[#0097b2] hover:underline font-bold"
                >
                  412-706-9201
                </a>
              </p>
              <p>
                Fax: <span className="text-[#0097b2]">412-706-9202</span>
              </p>
            </div>
          </div>

          <div className="w-full h-[350px] border rounded-md overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.2920480376474!2d-79.8736111846088!3d40.36241397936924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ee7e24a2b8af%3A0x4bb17d1c0c14e28f!2sThree%20Rivers%20Behavioral%20Health!5e0!3m2!1sen!2sus!4v1670000000000!5m2!1sen!2sus"
              title="Three Rivers Behavioral Health"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContact;
