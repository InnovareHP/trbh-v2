const DischargeFollowUp = () => {
  return (
    <div className="flex flex-col gap-2 items-start min-h-fit">
      {/* Content */}
      <div className="flex-1 space-y-2 text-sm leading-relaxed">
        <h2 className="text-3xl font-bold text-primary">
          Psychiatric Inpatient Discharge & Follow-up
        </h2>

        <h3 className="text-xl font-semibold text-primary mt-6">
          Post-Discharge Care
        </h3>
        <div className="relative">
          {/* Image floated to the right */}
          <img
            src="/image/discharge-follow-up.jpg"
            alt="Nurse with patient during discharge planning"
            className="md:float-right md:ml-4 mb-4 w-full md:w-1/3 rounded"
          />
          <p>
            A hospital visit can be overwhelming and intimidating for patients
            and their families. As a caretaker, your primary focus is on your
            family member's medical care, and the hospital staff shares this
            commitment. While the priority at admission is stabilization and
            treatment, it is important to consider what happens after you or
            your relative is discharged.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-primary mt-6">
          Discharge Planning
        </h3>
        <p>
          According to Medicare, discharge planning is "a process used to
          determine what a patient needs for a smooth transition from one level
          of care to another." While only a doctor can authorize a patient's
          release from the hospital, discharge planning itself can be carried
          out by a social worker, case manager, nurse or another qualified
          individual. Especially for complex medical conditions, an ideal
          approach to discharge planning involves a team effort.
        </p>
        <p>In essence, a discharge plan typically includes:</p>
        <ul className="list-disc list-inside">
          <li>Evaluation of the patient by trained personnel</li>
          <li>Consultation with the patient or their representative</li>
          <li>
            Preparation for returning home or transfer of care to another
            facility
          </li>
          <li>
            Assessment of the need for caretaker training or other support
          </li>
          <li>
            Referrals to relevant community support organizations or home care
            agencies
          </li>
          <li>Coordination of follow-up appointments or tests</li>
        </ul>
        <p>
          The discussion should cover the patient’s health status and physical
          condition both before and after hospitalization, specifics regarding
          required care, and whether discharge will be to home or another
          facility.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6">
          Three Rivers Behavioral Health Post-Discharge Follow-Up
        </h3>
        <p>
          Our two-week post-discharge follow-up is crucial for the overall
          success of patient treatment. It aims to identify and address the
          patient’s actions, misunderstandings, questions and any discrepancies
          in the discharge plan, as well as any concerns from caretakers or
          family members. The post-discharge follow-up is conducted relatively
          two weeks after discharge by a Three Rivers Behavioral Health nurse or
          social worker.
        </p>
        <p>
          The follow-up serves two main functions. Firstly, it ensures that the
          progress made during the patient’s stay at Three Rivers Behavioral
          Health transitions effectively to the home environment. Secondly, the
          nurse or social worker is available to answer questions, provide
          resources and offer recommendations if the patient or their loved ones
          encounter challenges.
        </p>
        <p>During the follow-up call, the nurse or social worker reviews:</p>
        <ul className="list-disc list-inside">
          <li>The patient’s current health status</li>
          <li>Medication details</li>
          <li>Scheduled appointments</li>
          <li>Home care services</li>
          <li>Plans for managing any potential issues that may arise</li>
        </ul>
      </div>
    </div>
  );
};

export default DischargeFollowUp;
