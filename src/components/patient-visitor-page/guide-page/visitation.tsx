export default function GettingHelpAtHomeVisitation() {
  return (
    <div className="min-h-fit max-w-7xl mx-auto space-y-4">
      <div className="space-y-4 text-sm">
        <h2 className="text-3xl font-bold text-[#0097b2]">
          Getting Help at Home
        </h2>

        <div className="relative space-y-4">
          {/* Right floated image */}
          <img
            src="/image/visitation_400x280.jpg"
            alt="Visitors with elderly patient"
            className="float-right ml-6 mb-4 w-90 h-auto object-cover"
          />

          <h3 className="text-xl font-semibold text-[#0097b2]">
            Visitation Guidelines
          </h3>
          <p className="text-gray-700">
            Visitors must be approved by you or your POA/Guardian in order to be
            added to your visitor list. Without prior approval, we will not
            confirm your status as a patient, even over the phone. Visitors are
            expected to uphold the patient confidentiality of those they see or
            meet.
          </p>

          <h3 className="text-xl font-semibold text-[#0097b2]">
            Visitation Hours:
          </h3>
          <p className="font-bold">
            Tuesday and Thursday: 2:00 PM – 4:00 PM <br />
            Saturday, Sunday and Holidays: 1:00 PM – 3:00 PM
          </p>
          <p className="text-gray-600 text-sm">
            ADDITIONAL ARRANGEMENTS MAY BE MADE UPON REQUEST
          </p>
          <p className="text-gray-600 text-sm">
            Note: Visiting hours are subject to change in relation to safety
            precautions related to illness. Please see postings on unit for the
            most up-to-date information.
          </p>

          <h4 className="text-md font-bold">Visiting Holidays Include:</h4>
          <ul className="list-disc list-insidespace-y-1 pl-6">
            <li className="font-bold">New Year’s Day</li>
            <li className="font-bold">Memorial Day</li>
            <li className="font-bold">Independence Day</li>
            <li className="font-bold">Labor Day</li>
            <li className="font-bold">Thanksgiving Day</li>
            <li className="font-bold">Christmas Day</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0097b2]">
            Visitation Procedure:
          </h3>
          <div className="space-y-3 text-gray-700">
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
              Three Rivers Behavioral Health Hospital values the care partners
              of our clients. Visitors are asked to arrive 15 minutes prior to
              the visitation to check in. We respect patient’s privacy, so we
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
        </div>
      </div>
    </div>
  );
}
