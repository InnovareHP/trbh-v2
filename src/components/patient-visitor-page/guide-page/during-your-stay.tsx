const DuringYourStay = () => {
  return (
    <div className="space-y-2 text-sm">
      <h1 className="text-3xl font-bold text-[#0097b2] mb-6">
        During Your Stay
      </h1>

      <img
        src="/image/during-your-stay.webp"
        alt="Patient and nurse during orientation"
        className="w-full md:w-96 h-auto object-cover md:float-right md:ml-6 mb-4"
      />
      <div className="gap-6 items-start">
        <div className="md:col-span-5 space-y-4 text-sm">
          <h2 className="text-xl font-semibold text-[#0097b2]">
            Psychiatric Inpatient Orientation
          </h2>
          <p>
            At Three Rivers Behavioral Health Psychiatric Inpatient Program, we
            value each individual and are committed to understanding your story
            and helping you achieve wellness. We understand that being admitted
            to a hospital can be daunting and scary. Our staff empathize with
            this and strive to ensure you feel comfortable throughout your stay.
            For safety reasons, our doors remain locked, particularly to
            safeguard patients experiencing confusion or wandering tendencies.
          </p>
          <p>
            Our unit specializes in providing acute psychiatric care for adults
            and older adults. We believe our patients deserve individualized
            care, which is why our secure environment is staffed by a dedicated
            team including psychiatrists, mental health technicians, nurses,
            nurse practitioners, nursing assistants,
          </p>
        </div>
      </div>

      <p>
        We operate under the belief that aging does not prohibit learning and
        growth. Our goal is to help you feel valued and engaged within our
        community, empowering you to make the most of each day. As each patient
        is unique, your treatment program will be tailored to match your unique
        strengths, challenges, abilities and needs.
      </p>

      <p>
        In our commitment to meeting your needs, we strive to create a
        comfortable atmosphere for all our patients. We encourage you to wear
        your own clothing and join fellow patients during meals, fostering a
        sense of camaraderie and offering opportunities for mutual support and
        learning. You have the right to participate in decisions about your
        treatment, free from any bias or influence from the hospital. Whether or
        not you have an advanced directive will not affect your access to
        treatment, services or care.
      </p>

      <p className="text-xl font-semibold text-[#0097b2] mt-6">
        Inpatient Visitation Guidelines
      </p>
      <p>
        Visitors must be approved by you or your POA/Guardian to be added to
        your visitor list. Without prior approval, we will not confirm your
        status as a patient, even over the phone. Visitors are expected to
        uphold the patient confidentiality of those they see or meet.
      </p>

      {/* Visitation Hours */}
      <p className="text-lg font-semibold text-[#0097b2] mt-4">
        Inpatient Visitation Hours:
      </p>

      <p className="font-bold">Tuesday and Thursday: 2:00 PM – 4:00 PM</p>
      <p className="font-bold">
        Saturday, Sunday and Holidays: 1:00 PM – 3:00 PM
      </p>

      <p>ADDITIONAL ARRANGEMENTS MAY BE MADE UPON REQUEST</p>
      <p>
        Note: Visiting hours are subject to change in relation to safety
        precautions related to illness. Please see postings on unit for the most
        up-to-date information.
      </p>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <p className="text-lg font-semibold text-[#0097b2] mb-2">
            Inpatient Visitation Procedure:
          </p>

          <div className="space-y-3">
            <p>
              All visits must take place in designated visiting areas where they
              can be supervised by staff.
            </p>
            <p>
              Visitors are required to empty their pockets and lock up all
              belongings prior to entering the unit including purses, bags, cell
              phones, wallet, keys, smart watches (anything that can compromise
              the privacy and wellbeing of our patients), etc.
            </p>
            <p>
              Any item brought by visitors must be searched and inventoried
              before they are given to the patient.
            </p>
            <p>
              Any visitor bringing or providing contraband on the unit may be
              restricted from future visits.
            </p>
            <p>
              Patients and visitors must demonstrate appropriate boundaries and
              be respectful of others.
            </p>
            <p>
              Mission Behavioral Health Hospital values the care partners of our
              clients. Visitors are asked to arrive 15 minutes prior to the
              visitation to check in. We respect patient’s privacy, so we
              restrict visitation to those listed on the patient’s visitor/phone
              list.
            </p>
            <p>
              Patient safety is our primary concern. Please do not give
              patients: medication, cigarettes, lighting materials, sharp
              objects, glass items, plastic bags, or safety razors.
            </p>
            <p>
              The number of visitors allowed is two but may be subject to change
              based on any illness status of unit milieu.
            </p>
            <p>Visitors must be at least 18 years old.</p>
            <p>
              Clergy, court representatives and attorneys have unrestricted
              visiting hours and may visit at any time.
            </p>
          </div>
        </section>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <p className="text-lg font-semibold text-[#0097b2] mb-2">
            Phone Call Guidelines
          </p>
          <p>
            You are permitted to make and receive phone calls during specified
            hours. Calls from your guardian, POA, attorney or clergy are allowed
            at any time. Please note that staff may request you to conclude your
            call if it is deemed inappropriate.
          </p>
          <p>
            Scheduled video conference calls with significant others may also be
            arranged, when appropriate, in coordination with clinical staff.
            This option can be especially helpful for older adults who may
            benefit from visual connection, or for patients wishing to connect
            with loved ones under the age of 18.
          </p>
        </section>

        <section>
          <p className="text-lg font-semibold text-[#0097b2] mb-2">
            Mail Guidelines
          </p>
          <p>
            The duration of your stay may not allow for sending or receiving
            mail. Nonetheless, incoming mail is distributed daily. To ensure
            safety, all mail will be opened in our staff’s presence to screen
            for dangerous or prohibited items. Outgoing letters are collected
            for mailing from the Nurses’ Station every day.
          </p>
        </section>

        {/* Laundry Guidelines */}
        <section>
          <p className="text-lg font-semibold text-[#0097b2] mb-2">
            Laundry Guidelines
          </p>
          <p>
            Please inform the nursing staff for assistance if clothing requires
            laundering.
          </p>
        </section>

        {/* Relaxation Time Guidelines */}
        <section>
          <p className="text-lg font-semibold text-[#0097b2] mb-2">
            Relaxation Time Guidelines
          </p>
          <p>
            Three Rivers Behavioral Health understands the importance of
            downtime for patients. To facilitate this, please adhere to the
            following guidelines:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Television may be used during leisure hours.</li>
            <li>
              Staff will select television programs. Patients may watch movies
              rated “G,” “PG” and “PG-13” only (no “R” rated movies are
              allowed), and TV shows rated anything except TV-MA.
            </li>
            <li>
              Mission Behavioral Health will provide the movies available for
              patient viewing.
            </li>
            <li>
              Patients and their families are not allowed to bring MP3 players,
              tablets or hand-held game systems.
            </li>
          </ul>
        </section>

        {/* Post-Discharge Care */}
        <section>
          <p className="text-lg font-semibold text-[#0097b2] mb-2">
            Post-Discharge Care
          </p>
          <p>
            A hospital visit can be overwhelming and intimidating for patients
            and their families. As a caretaker, your primary focus is on your
            family member’s medical care, and the hospital staff shares this
            commitment. While it may not be top-of-mind now, it is important to
            consider what happens after you or your relative is discharged.
            Patients, family caretakers and healthcare providers all have roles
            in ensuring the patient’s ongoing health post-discharge.
          </p>
        </section>

        {/* Discharge Planning */}
        <section>
          <p className="text-lg font-semibold text-[#0097b2] mb-2">
            Discharge Planning
          </p>
          <p>
            According to Medicare, discharge planning is "a process used to
            determine what a patient needs for a smooth transition from one
            level of care to another." While only a doctor can authorize a
            patient’s release from the hospital, discharge planning itself can
            be carried out by a social worker, case manager, nurse or another
            qualified individual. Especially for complex medical conditions, an
            ideal approach to discharge planning involves a team effort.
          </p>

          <p className="mt-4 font-semibold">
            In essence, a discharge plan typically includes:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">
                Evaluation of the patient by trained personnel
              </span>
            </li>
            <li>
              <span className="font-semibold">
                Consultation with the patient or their representative
              </span>
            </li>
            <li>
              <span className="font-semibold">
                Preparation for returning home or transfer of care to another
                facility
              </span>
            </li>
            <li>
              <span className="font-semibold">
                Assessment of the need for caretaker training or other support
              </span>
            </li>
            <li>
              <span className="font-semibold">
                Referrals to relevant community support organizations or home
                care agencies
              </span>
            </li>
            <li>
              <span className="font-semibold">
                Coordination of follow-up appointments or tests
              </span>
            </li>
          </ul>
        </section>
        <p>
          The discussion should cover the patient's health status and physical
          condition both before and after hospitalization, specifics regarding
          required care, and whether discharge will be to home or another
          facility.
        </p>
      </div>
    </div>
  );
};

export default DuringYourStay;
