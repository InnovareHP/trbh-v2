import Breadcrumb from "../sub-layout/sub-layout";

export default function AboutUs() {
  return (
    <div className="min-h-screen h-full">
      <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      <Breadcrumb pathname="/about-us" title="About Us" />

      <div className="max-w-7xl mx-auto py-12 text-sm leading-relaxed space-y-4 px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-primary">About Us</h1>

        {/* Intro */}
        <section>
          <h2 className="text-xl font-semibold text-primary">
            Behavioral Health Care for Seniors
          </h2>
          <p className="mt-2">
            Personalized Mental Health Services Tailored to Your Needs.
          </p>
        </section>

        {/* Who We Are */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">Who We Are</h2>

          <h3 className="font-semibold">
            Three Rivers Behavioral Health Inpatient
          </h3>
          <p>
            The dedicated, caring staff of Three Rivers Behavioral Health
            Inpatient services deliver patient- and family-centered care to
            Older Adults.
          </p>

          <h3 className="font-semibold">Three Rivers Residential</h3>
          <p>
            Three Rivers Residential delivers services for patients ages 18 and
            older. Specializing in Adult and Older Adult Inpatient/Residential
            unit services with primary psychiatric diagnoses, we provide
            comprehensive, individualized care to our patients based on their
            psychological and physical needs.
          </p>
          <p>
            Understanding that environment plays a significant role in a
            patient’s progress, our inpatient hospital is specifically designed
            to provide a safe, comfortable atmosphere for effective treatment.
            Each patient receives an individualized plan of care developed with
            the full participation of our multidisciplinary team.
          </p>
        </section>

        {/* Mental Health Focus */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">
            Focusing on the Mental Health Needs of Seniors
          </h2>
          <p>
            We offer specialized care for patients with conditions that include:
          </p>
          <ul className="list-disc list-inside">
            <li>Anxiety</li>
            <li>Psychosis</li>
            <li>Schizophrenia</li>
            <li>Behavior disturbances</li>
            <li>Depression</li>
            <li>Alzheimer’s and other types of dementia</li>
            <li>
              Mental disorders related to brain injury, stroke or other
              neuropsychiatric disorders
            </li>
          </ul>
        </section>

        {/* Expert Multidisciplinary Team */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">
            Expert Multidisciplinary Team
          </h2>
          <p>
            Our multidisciplinary treatment team works closely with patients and
            families to set individual goals addressing each patient’s specific
            needs. The team consists of:
          </p>
          <ul className="list-disc list-inside">
            <li>Board-Certified Geriatric Psychiatrists</li>
            <li>Psychologists</li>
            <li>Internal Medicine/Geriatric Physicians</li>
            <li>Nurse Practitioners</li>
            <li>Registered Nurses</li>
            <li>Social Workers</li>
            <li>Geriatric Activity Therapists</li>
            <li>Registered Dietitians</li>
            <li>Physical Therapists</li>
            <li>Occupational Therapists</li>
            <li>Speech Therapists</li>
            <li>Wound/Ostomy Consultant Nurses</li>
          </ul>
        </section>

        {/* Adult & Older Adults Care */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">
            Three Rivers Behavioral Health Focuses on the Needs of Adults and
            Older Adults
          </h2>
          <p>
            Our dedicated team is here to help. Our clinical team is available
            around the clock, 24 hours a day, 7 days a week, to assist with the
            admission process at your facility.
          </p>
          <p>
            Once a referral phone call is made, our clinical team will provide:
          </p>
          <ul className="list-disc list-inside">
            <li>Immediate assessment</li>
            <li>Paperwork/documentation copying or faxing</li>
            <li>Phone calls to family and/or power of attorney</li>
            <li>Transportation arrangements</li>
            <li>Post-discharge follow-up</li>
          </ul>
          <p>
            The goal of each nurse liaison is to streamline the process from
            admission to discharge.
          </p>
        </section>

        {/* Contact Info */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-primary">
            For More Information
          </h2>
          <p>
            If you have questions, please call us at{" "}
            <a href="tel:4127069201" className="text-primary font-semibold">
              412-706-9201
            </a>{" "}
            or toll-free at{" "}
            <a href="tel:18883910229" className="text-primary font-semibold">
              1-888-391-0229
            </a>
            .
          </p>
          <p>We’re here for all your behavioral health needs!</p>
        </section>
      </div>
    </div>
  );
}
