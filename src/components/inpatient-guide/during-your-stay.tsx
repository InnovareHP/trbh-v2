const DuringYourStay = () => {
  return (
    <div className="space-y-2 text-sm">
      <h1 className="text-3xl font-bold text-[#0097b2] mb-6">
        During Your Stay
      </h1>

      <img
        src="/image/during-your-stay.webp"
        alt="Patient and nurse during orientation"
        className="w-full md:w-96 h-auto object-cover md:float-right md:ml-6 mb-4 rounded"
      />

      <div className="gap-6 items-start">
        <div className="md:col-span-5 space-y-4 text-sm">
          <h2 className="text-xl font-semibold text-[#0097b2]">
            Psychiatric Inpatient Orientation
          </h2>
          <p>
            At Three Rivers Behavioral Health, we value every individual and are
            committed to understanding your story and helping you achieve
            wellness. We recognize that being admitted to a hospital can feel
            intimidating or overwhelming. Our compassionate staff strives to
            ensure that you feel supported and comfortable throughout your stay.
            For safety reasons, our doors remain locked to help protect patients
            who may be experiencing confusion or wandering tendencies.
          </p>
          <p>
            Our inpatient unit provides specialized acute psychiatric care for
            adults and older adults. We believe every patient deserves
            individualized attention, which is why our secure environment is
            staffed by a multidisciplinary team that includes psychiatrists,
            nurses, nurse practitioners, nursing assistants, mental health
            technicians, social workers, and recreational therapists. Upon
            arrival, our team will welcome you and guide you through your stay,
            ensuring that your unique needs and goals are supported.
          </p>
        </div>
      </div>

      <p>
        We believe that aging does not limit the ability to learn and grow. Our
        goal is to help you feel valued and engaged in our community, empowering
        you to make the most of each day. Each patient’s treatment plan is
        tailored to reflect their individual strengths, challenges, abilities,
        and goals.
      </p>

      <p>
        To promote comfort and dignity, we encourage you to wear your own
        clothing and to join fellow patients for meals, fostering connection,
        mutual support, and shared learning. You have the right to actively
        participate in decisions about your treatment, free from bias or
        influence. Whether or not you have an advance directive will not affect
        your access to treatment, services, or care.
      </p>

      {/* Inpatient Visitation Guidelines */}
      <h2 className="text-xl font-semibold text-[#0097b2] mt-6">
        Inpatient Visitation Guidelines
      </h2>
      <p>
        Visitors must be approved by you or your POA/Guardian to be added to
        your visitor list. Without prior approval, we cannot confirm your
        patient status, even over the phone. Visitors are expected to uphold the
        confidentiality of all patients.
      </p>

      <h3 className="text-lg font-semibold text-[#0097b2] mt-4">
        Inpatient Visitation Hours
      </h3>
      <p className="font-bold">Tuesday and Thursday: 2:00 PM – 4:00 PM</p>
      <p className="font-bold">
        Saturday, Sunday, and Holidays: 1:00 PM – 3:00 PM
      </p>
      <p>Additional arrangements may be made upon request.</p>
      <p>
        Note: Visiting hours are subject to change due to safety precautions
        related to illness. Please refer to unit postings for the most current
        information.
      </p>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h3 className="text-lg font-semibold text-[#0097b2] mb-2">
            Visitation Procedure
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              All visits take place in designated visiting areas under staff
              supervision.
            </li>
            <li>
              Visitors must empty their pockets and secure all belongings
              (purses, bags, cell phones, wallets, keys, smartwatches, etc.)
              before entering the unit.
            </li>
            <li>
              All items brought by visitors must be searched and inventoried
              prior to being given to patients.
            </li>
            <li>
              Any visitor providing contraband may lose future visitation
              privileges.
            </li>
            <li>
              Visitors and patients are expected to maintain appropriate
              boundaries and show respect toward others.
            </li>
            <li>
              Visitors should arrive 15 minutes prior to their scheduled visit
              for check-in. Only individuals listed on the patient’s
              visitor/phone list may visit.
            </li>
            <li>
              For safety, please do not bring medication, cigarettes, lighting
              materials, sharp objects, glass items, plastic bags, or safety
              razors.
            </li>
            <li>
              A maximum of two visitors is permitted per patient, though this
              may change based on unit conditions.
            </li>
            <li>All visitors must be at least 18 years old.</li>
            <li>
              Clergy, court representatives, and attorneys may visit at any
              time.
            </li>
          </ul>
        </section>
      </div>

      {/* Phone Call Guidelines */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-[#0097b2]">
          Phone Call Guidelines
        </h3>
        <p>
          You may make and receive phone calls during designated hours. Calls
          from your guardian, POA, attorney, or clergy are permitted at any
          time. Staff may request that a call be ended if it becomes disruptive
          or inappropriate.
        </p>
        <p>
          When appropriate, scheduled video calls may also be arranged through
          clinical staff. This option can be especially meaningful for older
          adults or those wishing to connect with loved ones under the age of
          18.
        </p>
      </section>

      {/* Mail Guidelines */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-[#0097b2]">
          Mail Guidelines
        </h3>
        <p>
          While the length of your stay may limit the ability to send or receive
          mail, any incoming mail will be distributed daily. For safety reasons,
          all mail must be opened in the presence of staff to screen for
          prohibited items. Outgoing letters are collected daily from the
          Nurses’ Station.
        </p>
      </section>

      {/* Laundry Guidelines */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-[#0097b2]">
          Laundry Guidelines
        </h3>
        <p>
          If your clothing needs laundering, please inform the nursing staff for
          assistance.
        </p>
      </section>

      {/* Relaxation Time Guidelines */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-[#0097b2]">
          Relaxation Time Guidelines
        </h3>
        <p>
          We understand the importance of relaxation and leisure time in the
          healing process. To ensure a positive experience, please follow these
          guidelines:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Television may be used during designated leisure hours.</li>
          <li>
            Staff will select television programs. Only movies rated G, PG, or
            PG-13 are permitted. R-rated or TV-MA content is not allowed.
          </li>
          <li>
            Three Rivers Behavioral Health will provide approved movie options
            for viewing.
          </li>
          <li>
            Patients and their families may not bring MP3 players, tablets, or
            handheld gaming devices.
          </li>
        </ul>
      </section>

      {/* Post-Discharge Care */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-[#0097b2]">
          Post-Discharge Care
        </h3>
        <p>
          Leaving the hospital can feel both exciting and challenging. While the
          focus during your stay is stabilization and treatment, planning for
          life after discharge is an important part of recovery. Patients,
          caregivers, and healthcare providers all play key roles in supporting
          continued wellness after leaving the hospital.
        </p>
      </section>

      {/* Discharge Planning */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-[#0097b2]">
          Discharge Planning
        </h3>
        <p>
          According to Medicare, discharge planning is “a process used to
          determine what a patient needs for a smooth transition from one level
          of care to another.” While only a physician can authorize a patient’s
          release, discharge planning is typically coordinated by a social
          worker, nurse, case manager, or another qualified staff member. For
          patients with complex needs, this process involves a collaborative
          team approach.
        </p>
        <p className="mt-2 font-semibold">A discharge plan may include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Evaluation of the patient by trained personnel</li>
          <li>Consultation with the patient or their representative</li>
          <li>
            Preparation for returning home or transfer to another care facility
          </li>
          <li>Assessment of caretaker training or support needs</li>
          <li>Referrals to community resources or home health organizations</li>
          <li>Coordination of follow-up appointments or testing</li>
        </ul>
        <p>
          These discussions help clarify the patient’s condition before and
          after hospitalization, the type of care required, and whether
          discharge will be to home or another facility.
        </p>
      </section>
    </div>
  );
};

export default DuringYourStay;
