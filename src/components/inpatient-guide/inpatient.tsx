import Breadcrumb from "../sub-layout/sub-layout";

const IntensiveOutpatient = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-cyan-600 to-cyan-300 h-4 w-full"></div>
      <Breadcrumb
        pathname="/inpatient-guide"
        title="Intensive Outpatient Program"
      />
      <main className="min-h-fit max-w-7xl mx-auto px-6 py-10">
        <h1 id="iop-heading" className="text-3xl font-bold text-primary mb-2">
          Intensive Outpatient Program
        </h1>

        <section
          aria-labelledby="iop-heading"
          className="flex-1 space-y-3 text-sm leading-relaxed"
        >
          <p>
            Three Rivers Behavioral Health Intensive Outpatient Program (IOP) is
            provided for adults, ages 18 and older. The goals of our IOP are to
            stabilize symptoms through regulation of the nervous system using
            trauma informed interventions, build skills while engaging in a wise
            mind, develop a positive support system, and promote client
            autonomy. TRBH IOP is dedicated to being a trusted psychiatric
            treatment program that provides intensive outpatient treatment to
            clients with acute psychiatric diagnoses that do not require
            inpatient hospitalization or residential services but need
            comprehensive programming not offered in traditional outpatient
            treatment.
          </p>

          <p>
            Therapeutic services provided in TRBH IOP focus on healing the body
            and nervous system to improve emotional and psychological
            well-being. The IOP encourages clients to use newly learned coping
            strategies, emotional regulation skills, psychoeducation, and
            mindfulness in their own living environments throughout treatment.
          </p>

          <h2
            id="conditions-heading"
            className="text-xl font-semibold text-primary mt-6"
          >
            Mental Health Conditions We Treat
          </h2>
          <ul
            className="list-disc list-inside space-y-1"
            aria-labelledby="conditions-heading"
          >
            <li>Depression</li>
            <li>Mood disorders</li>
            <li>Anxiety disorders</li>
            <li>Trauma history</li>
            <li>Personality disorders</li>
            <li>Self-harm behaviors</li>
          </ul>

          <p>
            TRBH IOP provides group therapy and
            individual/family/significant-other therapy using evidenced-based
            treatment modalities and holistic, trauma-informed interventions.
            Therapy services are strengths-based, person-centered, and
            trauma-informed. Evidenced-based treatment modalities include, but
            are not limited to, Cognitive Behavioral Therapy (CBT), Dialectical
            Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT),
            Motivational Interviewing (MI), Phases 1 and 2 of Eye Movement
            Desensitization and Reprocessing Therapy (EMDR), and Person-Centered
            Therapy. Other individual treatment modalities can include
            Experiential Therapies, Holistic Therapies, Recreational and
            Activity-based Therapies, Art Therapy and interventions, and Social
            Skills Training.
          </p>

          <p>
            Our IOP bridges the gap between acute care and individual therapy,
            can be an alternative for inpatient treatment, or serve as a
            step-down from residential or acute mental health treatment.
          </p>

          <h2
            id="schedule-heading"
            className="text-xl font-semibold text-primary mt-6"
          >
            Intensive Outpatient Program Schedule
          </h2>
          <p aria-labelledby="schedule-heading">
            Group therapy is provided 3 days per week for 3 hours per day by
            therapists, social services staff, medical staff, and independent
            contractors. All clients in our IOP meet with the physician once a
            week for medication management and treatment planning.
          </p>

          <p>
            Our current schedule is 3.5 hours of programming on Monday,
            Wednesday, and Thursday. Treatment is broken into the following
            mini-group sessions:
          </p>

          <ul
            className="list-disc list-inside space-y-1"
            aria-labelledby="schedule-heading"
          >
            <li>15 minutes of Goal and Intention Setting</li>
            <li>15 minutes of Mindfulness Interventions</li>
            <li>60 minutes of Psychoeducation and Skill Building</li>
            <li>15-minute Break</li>
            <li>75 minutes of Psychotherapy Processing</li>
            <li>15-minute Break</li>
            <li>30 minutes of Closing and Mindfulness Interventions</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default IntensiveOutpatient;
