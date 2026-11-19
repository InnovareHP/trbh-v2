export default function BrochureSection() {
  return (
    <div className="min-h-fit">
      <h1 className="text-3xl font-bold text-[#0097b2] mb-2">
        View Our Brochure
      </h1>

      <a
        href="/three-rivers-behavioral-health-brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#0097b2] hover:underline block mb-8 text-center font-semibold"
      >
        Click to download full brochure
      </a>

      <div className="w-full max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <img
          src="/image/Mission-Behavioral-Health-Brochure_M4049_EMAIL_1-1536.webp"
          width={1536}
          height={1187}
          alt="Three Rivers Behavioral Health Brochure"
          className="w-full h-auto object-cover"
        />

        <img
          src="/image/brochure-2-1536.webp"
          width={1536}
          height={1187}
          alt="Three Rivers Behavioral Health Brochure"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
