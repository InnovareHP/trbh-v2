export default function GettingHelpAtHome() {
  return (
    <div className="min-h-fit max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Discharge to a Facility
      </h2>

      {/* Floated Image */}
      <img
        src="/image/Discharge-to-facility.avif"
        alt="Nurse helping patient in hospital bed"
        className="w-full md:w-96 h-auto object-cover md:float-right md:ml-6 mb-4 rounded"
      />

      <p className="text-gray-700 py-4">
      When transitioning from inpatient psychiatric treatment to a lower level of mental health care, rehabilitation facility, or nursing home, thorough transition planning is essential to ensure continuity of care. This process includes clarifying the patient's current mental and physical health status, reviewing medications, and assisting in selecting the most appropriate facility for ongoing support.
      </p>

      <p className="text-gray-700">
      Deciding on a facility can be a stressful process for families. Our social workers and discharge planners are available to provide essential advice and guidance, helping patients and their loved ones make informed choices and feel supported throughout the transition.
      </p>
    </div>
  );
}
