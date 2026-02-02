import Breadcrumb from "../sub-layout/sub-layout";

const Residential = () => {
  return (
    <div className="min-h-screen h-full">
      <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>

      <Breadcrumb
        pathname="/residential-treatment"
        title="Residential Treatment"
      />

      <div className="max-w-7xl mx-auto px-6 py-10 text-sm">
        <p className="text-4xl font-bold text-[#0097b2] mb-6">
          Residential Treatment
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Three Rivers Residential Treatment Program provides comprehensive
          residential care for adults with behavioral, emotional, or psychiatric
          challenges. The program is designed for adults aged 18 and older and
          offers a variety of evidence-based therapies tailored to each
          individual's needs.
        </p>

        <h2 className="text-xl font-bold text-[#0097b2] mb-2">
          Key Components of the Program:
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            Comprehensive Assessments: Each individual's history and symptoms
            are thoroughly assessed to understand their unique experiences and
            challenges.
          </li>
          <li>
            Individualized Treatment Plans: Customized treatment plans are
            developed based on the assessment, incorporating various therapeutic
            modalities and interventions.
          </li>
          <li>
            Flexible Therapies: A range of evidence-based therapies, such as
            Dialectical Behavior Therapy
            (DBT) and Eye Movement Desensitization and Reprocessing Therapy (EMDR) Phases 1 and 2 interventions, are employed to address specific needs.
          </li>
          <li>
            Trauma-Focused Therapy: Therapists trained in trauma informed care
            and trauma-focused therapy techniques, such as Trauma-Focused
            Cognitive Behavioral Therapy (TF-CBT), work with individuals to help
            them process and heal from traumatic experiences.
          </li>
          <li>
            Holistic Approach: The program considers the individual's overall
            well-being, incorporating elements like self-care, life skills
            training, and recreational therapy to support healing and recovery.
          </li>
          <li>
            Ongoing Evaluation and Adjustment: Treatment plans are regularly
            reviewed and adjusted based on the individual's progress and
            evolving needs, ensuring the approach remains effective and
            relevant.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-[#0097b2] mb-2">
          Areas of Specialty:
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Mood disorders, including depression and bipolar symptoms</li>
          <li>Psychotic symptoms</li>
          <li>Difficulties with impulse control and emotional regulation</li>
          <li>Trauma symptoms</li>
          <li>Co-occurring substance abuse disorders</li>
        </ul>

        <h2 className="text-xl font-bold text-[#0097b2] mb-2">
          Treatment Modalities:
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Psychosocial evaluations</li>
          <li>Individualized treatment and teaching support plans</li>
          <li>Substance abuse group therapy and AA/NA groups</li>
          <li>Self-care, life, and social skills training</li>
          <li>Family therapy and education</li>
          <li>Recreational therapy</li>
          <li>Individual and group treatment modalities</li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          The goal of the program is to help individuals develop to their
          fullest potential by offering a safe and supportive environment to engage in the regulation of the nervous system in a trauma-focused treatment program to promote mind-body integration. By focusing on personalized and adaptable strategies,
          the program aims to offer effective and supportive care for
          individuals with diverse experiences.
        </p>
      </div>
    </div>
  );
};

export default Residential;
