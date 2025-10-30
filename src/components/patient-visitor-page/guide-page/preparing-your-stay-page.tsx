export default function PreparingForYourStay() {
  return (
    <div className="min-h-fit">
      <div className="max-w-7xl mx-auto">
        {/* Text Content with Wrapping */}
        <div className="space-y-6 text-sm">
          <p className="text-3xl font-bold text-[#0097b2] mb-4">
            Preparing for Your Stay
          </p>

          {/* Image floated so text wraps */}
          <img
            src="/image/preparing-for-stay.jpg"
            alt="Elderly couple smiling"
            className="w-92 h-auto object-cover md:float-right mr-6 mb-4 md:mx-4"
          />

          <h2 className="text-xl font-semibold text-[#0097b2]">
            Personal Items
          </h2>

          <p className="text-gray-700">
            You will only need casual clothing during your residential stay.
            Please bring no more than five changes of clothing, as laundry
            services are available. We encourage you to wear your own
            comfortable attire. Consider a sweater if you tend to feel cold.
            Your days will be active, so avoid bringing expensive clothing or
            jewelry as it is prohibited and we cannot accept responsibility for
            loss or damage.
          </p>

          <p className="text-gray-700">
            Upon admission, our staff will inventory your personal belongings,
            including any items brought throughout the duration of your stay.
            Please consult the Contraband List in your handbook for guidance.
          </p>

          <div>
            <p className="font-bold">In summary, you will need:</p>
            <ul className="list-disc ml-6 text-gray-700 pl-2">
              <li>3 changes of comfortable clothing</li>
              <li>1 sweater</li>
              <li>2 pairs of pajamas</li>
              <li>1 pair of shoes</li>
              <li>(Note: toiletries are provided)</li>
              <li>Labeling your clothing is helpful for staff</li>
            </ul>
          </div>

          <div className="clear-both"></div>
        </div>
      </div>
    </div>
  );
}
