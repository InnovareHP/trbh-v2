export default function NutritionProgram() {
  return (
    <div className="min-h-fit">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#0097b2] mb-6">
        Nutrition Program
      </h2>

      {/* Image */}
      <div className="w-full mb-6">
        <img
          src="/image/nutrition_1000.jpg"
          alt="Fresh fruits, vegetables, and healthy food"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-gray-700 text-sm leading-relaxed space-y-4">
        <p>
          Three Rivers Behavioral Health prides itself on delivering exceptional
          service to every patient in our care, and our Nutritional Services
          program is no exception. Our facility’s size and personalized approach
          allow us to alter meals and precisely meet each patient’s dietary
          requirements. What sets our kitchen apart? We adopt a holistic
          culinary philosophy, believing that whole foods sourced ethically
          provide greater health benefits and accelerate physical recovery. Our
          nutritional staff understands its vital role in the healing journey.
        </p>

        <p>
          At Three Rivers Behavioral Health, our kitchens exclusively use fresh
          produce and never-frozen meats to prepare wholesome, homemade dishes
          designed to satisfy a diverse range of palates. We strive for 100%
          patient satisfaction, achieved through the use of premium ingredients.
          These ensure both visually appealing and delicious meals, regardless
          of dietary restrictions. In essence, we believe in{" "}
          <span className="italic">"cooking with love,"</span> thus transforming
          mealtime into a personalized dining experience.
        </p>
      </div>
    </div>
  );
}
