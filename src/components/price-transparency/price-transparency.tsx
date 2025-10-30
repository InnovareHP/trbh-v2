import Breadcrumb from "../sub-layout/sub-layout";

const PriceTransparency = () => {
  return (
    <div className="min-h-fit">
      <div className="h-4 w-full bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600"></div>
      <Breadcrumb pathname="/price-transparency" title="Price Transparency" />

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-primary mb-4">
          Price Transparency
        </h2>

        {/* Description */}
        <p className="mb-4">
          We support price transparency for the patients and families we serve.
          Click on a link below to view our standard pricing and shoppable
          services pricing. You may contact
          <a
            href="tel:4127069201"
            className="font-semibold text-primary hover:underline"
          >
            412-706-9201
          </a>{" "}
          with questions regarding your bill.
        </p>

        {/* Links */}
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="/Three-Behavioral-Health-West Mifflin-2025-Shoppable-Services-Pricing.xlsx"
              className="font-semibold text-cyan-700 hover:underline"
            >
              VIEW STANDARD PRICING
            </a>
          </li>
          <li>
            <a
              href="/Three-Behavioral-Health-West Mifflin-2025-Standard-Pricing.xlsx"
              className="font-semibold text-cyan-700 hover:underline"
            >
              VIEW SHOPPABLE SERVICES PRICING
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceTransparency;
