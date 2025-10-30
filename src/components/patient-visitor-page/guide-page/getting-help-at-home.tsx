const GettingHelpAtHome = () => {
  return (
    <div className="min-h-fit space-y-4 text-sm leading-relaxed">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Getting Help at Home After Inpatient Treatment
      </h2>

      {/* Floated Image */}
      <img
        src="/image/getting_help_at_home_400x280.jpg"
        alt="Caregiver helping elderly woman in a grocery store"
        className="w-full md:w-96 h-auto object-cover md:float-right md:ml-6 mb-4 rounded"
      />

      <p>
        Three Rivers Behavioral Health understands that a well-structured
        discharge plan, combined with a robust support system, is essential for
        a successful transition from inpatient psychiatric care to a lower level
        of mental health treatment. Support from family members and significant
        others plays a pivotal role in this process, as a strong support system
        can enhance emotional stability, promote treatment adherence, and help
        patients reintegrate more smoothly into their daily lives.
      </p>

      <p>
        Below are some common ways to support your loved one after inpatient
        mental health treatment:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>
          {" "}
          Learn about their diagnosis, common symptoms, and potential challenges
          and engage in treatment when appropriate.
        </li>

        <li>Help to establish healthy daily routines.</li>
        <li>
          Encourage aftercare compliance, including attending appointments and
          medication management.
        </li>
        <li>
          Reduce stressors at home by creating a calm and stable atmosphere.
        </li>
        <li>
          Promote regular sleep, exercise, healthy nutrition, and social
          interaction.
        </li>
        <li>
          Offer assistance with daily tasks, transportation to appointments, and
          financial planning.
        </li>
      </ul>

      <p>
        Because Three Rivers Behavioral Inpatient mental health program
        specializes in the care of older adults, discharge planning and
        aftercare support might include assistance with activities of daily
        living, such as:
      </p>

      <ul>
        <li>Personal Care: Bathing, toileting, dressing, eating</li>
        <li>Household Tasks: Shopping, cooking, laundry, cleaning</li>
        <li>
          Healthcare Management: Medication oversight, making appointments,
          physical therapy, wound care, injections, technical use of equipment
        </li>
        <li>
          Emotional Support: Engaging activities, companionship, conversation
        </li>
      </ul>

      <p>
        Caring for a loved one following inpatient mental health treatment can
        be challenging. It is equally important to prioritize your own
        well-being during this time.
      </p>
    </div>
  );
};

export default GettingHelpAtHome;
