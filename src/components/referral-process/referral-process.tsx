import Breadcrumb from "../sub-layout/sub-layout";

const ReferralProcess = () => {
  return (
    <div className="min-h-fit">
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src="/background/referral_process_2000x375.png"
          alt="Referral Process Banner"
          loading="lazy"
          className="w-full h-[200px] md:h-[550px] object-cover object-top"
        />
        <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      </div>
      <Breadcrumb pathname="/referral-process" title="Referral Process" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-4xl font-bold text-[#0097b2] mb-6">
          Referral Process
        </p>

        <div className="space-y-6 text-sm max-w-4xl">
          {/* Information Gathering */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#0097b2] mb-2">
              Information Gathering
            </p>
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
              Please call our <strong>Intake Line at 1-888-391-2655.</strong>
            </p>
          </div>

          {/* Assessment and Admission */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#0097b2] mb-2">
              Assessment and Admission
            </p>
            <p className="text-gray-700 leading-relaxed">
              Once the clinical information is reviewed by a practitioner, our
              clinical team manages all document copying and faxing, compiles
              necessary paperwork, and completes the required consent packet
              with the patient, guardian or power of attorney.
            </p>
          </div>

          {/* Onsite Assessment */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#0097b2] mb-2">
              Onsite Assessment
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our specially trained staff will be waiting for your arrival, from
              there we will conduct an Intake Assessment as well as a Nursing
              Assessment. You will be given a tour of the facility and receive
              relevant information to start your treatment program successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProcess;
