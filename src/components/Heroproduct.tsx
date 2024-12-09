import Image from "next/image";


export default function Heroproduct() {
  return (
    <section className="py-8">
      {/* SubHero Text */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#292826]">Browse The Range</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Image Area */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Dining */}
        <div className="flex flex-col items-center">
          <Image src="/Images/dining.png" width="282" height="300" alt="Dining Image" />
          <h6 className="mt-4 font-bold text-gray-800">Dining</h6>
        </div>

        {/* Living */}
        <div className="flex flex-col items-center">
          <Image src="/Images/living.png" width="282" height="300" alt="Living Image" />
          <h6 className="mt-4 font-bold text-gray-800">Living</h6>
        </div>

        {/* Bedroom */}
        <div className="flex flex-col items-center">
          <Image src="/Images/bedroom.png" width="282" height="300" alt="Bedroom Image" />
          <h6 className="mt-4 font-bold text-gray-800">Bedroom</h6>
        </div>
      </div>
    </section>
  );
}
