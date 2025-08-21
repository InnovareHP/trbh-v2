export default function GettingHelpAtHome() {
  return (
    <div className="min-h-fit max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Discharge to a Facility
      </h2>

      {/* Floated Image */}
      <img
        src="/image/discharge_to_facility_400x280.jpg"
        alt="Nurse helping patient in hospital bed"
        className="w-full md:w-96 h-auto object-cover md:float-right md:ml-6 mb-4 rounded"
      />

      <p className="text-gray-700">
        When transitioning to a rehabilitation facility or nursing home,
        thorough transition planning ensures continuity of care. This includes
        clarifying the patient&apos;s current health status and abilities,
        reviewing medications, and assisting in selecting the appropriate
        facility for your needs.
      </p>

      <p className="text-gray-700">
        Deciding on a facility can be a stressful process for families. Our
        social workers and discharge planners are available to provide essential
        advice and support.
      </p>
    </div>
  );
}
