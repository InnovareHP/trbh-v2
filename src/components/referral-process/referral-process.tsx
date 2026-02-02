import Breadcrumb from "../sub-layout/sub-layout";

const ReferralProcess = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-8">
        <img
          src="/background/referral_process_2000x375.jpg"
          alt="Referral process banner showing pathway to Three Rivers Behavioral Health admission"
          width={2000}
          height={375}
          fetchPriority="high"
          className="w-full h-[150px] md:h-[350px] object-cover"
        />
        <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      </header>
      <Breadcrumb pathname="/referral-process" title="Referral Process" />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1
          id="referral-process-heading"
          className="text-4xl font-bold text-[#0097b2] mb-6"
        >
          Referral Process
        </h1>

        <section
          aria-labelledby="referral-process-heading"
          className="space-y-6 text-sm max-w-4xl"
        >
          {/* Information Gathering */}
          <div className="space-y-4">
            <h2
              id="information-gathering-heading"
              className="text-lg font-semibold text-[#0097b2] mb-2"
            >
              Information Gathering
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Prior to a potential admission to one of our three levels of care,
              our clinical team will gather relevant and pertinent information
              related to you or your loved one's psychiatric symptoms as well as
              gather a complete health status to ensure we are prepared to care
              for your loved one. This process also involves reviewing relevant
              records. This thorough data collection ensures that the Three
              River Behavioral Health’s multidisciplinary treatment team
              receives the most up-to-date information on the patient’s symptoms
              in order to initiate treatment from the outset
            </p>

            <p>
              Please call our{" "}
              <strong>
                Intake Line at{" "}
                <a
                  href="tel:1-888-391-2655"
                  aria-label="Call Three Rivers Behavioral Health Intake Line at 1-888-391-2655"
                  className="text-[#0097b2] hover:underline"
                >
                  1-888-391-2655
                </a>
                .
              </strong>
            </p>
          </div>

          {/* Assessment and Admission */}
          <div className="space-y-4">
            <h2
              id="assessment-admission-heading"
              className="text-lg font-semibold text-[#0097b2] mb-2"
            >
              Assessment and Admission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Once the clinical information is reviewed by a practitioner, our
              clinical team manages all document copying and faxing, compiles
              necessary paperwork, and completes the required consent packet
              with the patient, guardian or power of attorney.
            </p>
          </div>

          {/* Onsite Assessment */}
          <div className="space-y-4">
            <h2
              id="onsite-assessment-heading"
              className="text-lg font-semibold text-[#0097b2] mb-2"
            >
              Onsite Assessment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our specially trained staff will be waiting for your arrival, from
              there we will conduct an Intake Assessment as well as a Nursing
              Assessment. You will be given a tour of the facility and receive
              relevant information to start your treatment program successfully.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ReferralProcess;
