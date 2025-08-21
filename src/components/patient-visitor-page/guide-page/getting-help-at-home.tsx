const GettingHelpAtHome = () => {
  return (
    <div className="min-h-fit space-y-4 text-sm leading-relaxed">
      <h2 className="text-3xl font-bold text-primary mb-4">
        Getting Help at Home
      </h2>

      {/* Floated Image */}
      <img
        src="/image/getting_help_at_home_400x280.jpg"
        alt="Caregiver helping elderly woman in a grocery store"
        className="w-full md:w-96 h-auto object-cover md:float-right md:ml-6 mb-4 rounded"
      />

      <p>
        Below are common caregiving responsibilities you may undertake for your
        family member upon their return home:
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Personal care: bathing, toileting, dressing, eating</li>
        <li>Household tasks: shopping, cooking, laundry, cleaning</li>
        <li>
          Healthcare management: medication oversight, appointments, physical
          therapy, wound care, injections, technical use of medical equipment
        </li>
        <li>
          Emotional support: engaging activities, companionship, conversation
        </li>
      </ul>

      <p>
        Community organizations can provide assistance with services such as
        meals, transportation, support groups, counseling, and respite care to
        give you a break and attend to your own needs. Locating these services
        may require some time and multiple phone calls. Our social workers and
        discharge planners can provide valuable guidance and support.
      </p>
    </div>
  );
};

export default GettingHelpAtHome;
