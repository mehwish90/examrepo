import Image from "next/image";

export default function SlideSection() {
  return (
    <div className="slideSection bg-[#FCF8F3] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Text Section */}
      <div className="slideText md:w-1/2 text-center md:text-left">
        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-800 mb-4">
          50+ Beautiful Rooms Inspiration
        </h4>
        <p className="text-gray-600 mb-6">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-4 rounded-md">
          Explore More
        </button>
      </div>

      {/* Images Section */}
      <div className="slideImages flex flex-col gap-4 md:flex-row">
        <Image
          src="/Images/inner.png"
          width={250}
          height={250}
          alt="Inner Peace Room Inspiration"
          className="rounded-lg shadow-md"
        />
        <Image
          src="/Images/SideInner.png"
          width={250}
          height={250}
          alt="Side Inner Room Inspiration"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
