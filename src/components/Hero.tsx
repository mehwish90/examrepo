import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative w-full">
        <Image
          src="/image1.png"
          layout="responsive"
          width={1440}
          height={600}
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute top-[10%] right-[5%] sm:top-[15%] sm:right-[10] w-[90$] max-w-[643px] bg-[#FFF3E3] gird tiem.center rounded-[10px] p-4 sm:p1-[20px] sm:pt-[40px] sm:pb-[20px] md:pl-[39px] md:pt-[62px] md:pb-[26px]
      ">
  <h6 className="font-bold text-lg text-gray-700 mb-4">New Arrival</h6>
  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#b88e2f] mb-6">
    Discover Our <br /> New Collection
  </h3>
  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    dolore.
  </p>
  <button className="bg-[#b88e2f] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#a77e28] transition">
    BUY NOW
  </button>
</div>

    </section>
  );
}
