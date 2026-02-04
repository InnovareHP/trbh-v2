import Breadcrumb from "../sub-layout/sub-layout";

const PriceTransparency = () => {
  return (
    <>
      <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      <Breadcrumb pathname="/price-transparency" title="Price Transparency" />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1
          id="price-transparency-heading"
          className="text-4xl font-bold text-primary mb-4"
        >
          Price Transparency
        </h1>

        <section aria-labelledby="price-transparency-heading">
          <p className="mb-4">
            We support price transparency for the patients and families we
            serve. Click on a link below to view our standard pricing and
            shoppable services pricing. You may contact{" "}
            <a
              href="tel:4127069201"
              aria-label="Call Three Rivers Behavioral Health billing at 412-706-9201"
              className="font-semibold text-primary hover:underline"
            >
              412-706-9201
            </a>{" "}
            with questions regarding your bill.
          </p>

          <nav aria-label="Price Transparency Documents">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href="/Three-Behavioral-Health-West Mifflin-2025-Shoppable-Services-Pricing.xlsx"
                  className="font-semibold text-cyan-700 hover:underline"
                  aria-label="Download standard pricing document for Three Rivers Behavioral Health"
                >
                  VIEW STANDARD PRICING
                </a>
              </li>
              <li>
                <a
                  href="/Three-Behavioral-Health-West Mifflin-2025-Standard-Pricing.xlsx"
                  className="font-semibold text-cyan-700 hover:underline"
                  aria-label="Download shoppable services pricing document for Three Rivers Behavioral Health"
                >
                  VIEW SHOPPABLE SERVICES PRICING
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
};

export default PriceTransparency;
