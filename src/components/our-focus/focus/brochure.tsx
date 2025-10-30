export default function BrochureSection() {
  return (
    <div className="min-h-fit">
      <h2 className="text-3xl font-bold text-[#0097b2] mb-2">
        View Our Brochure
      </h2>

      <a
        href="https://www.trbhcares.com/Mission-Behavioral-Health-Brochure_M4049.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#0097b2] hover:underline block mb-8 text-center font-semibold"
      >
        Click to download full brochure
      </a>

      <div className="w-full max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <img
          src="/public/image/Mission-Behavioral-Health-Brochure_M4049_EMAIL_1.jpg"
          alt="Three Rivers Behavioral Health Brochure"
          className="w-full h-auto object-cover"
        />

        <img
          src="/image/brochure-2.png"
          alt="Three Rivers Behavioral Health Brochure"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
