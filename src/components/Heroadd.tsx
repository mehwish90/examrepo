import Image from "next/image";


export default function Heroadd() {
  return (
    <div className=" w-full h-16 bg-[#F9F1E7] flex items-center justify-between px-4 md:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Filter Icon */}
        <div className="flex items-center gap-2">
          <Image src="/Images/Rectangle 1(1).png"width={30} height={30} alt="Filter Icon" />
          <p className="text-sm font-medium">Filter</p>
        </div>
        <p className="text-sm font-medium hidden md:block">| Showing 1–16 of 32 results</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Show</p>
          <input
            className="w-10 h-10 bg-black text-white text-center rounded-md"
            type="text"
            placeholder="16"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Sort by</p>
          <input
            className="w-32 h-10 bg-black text-white text-center rounded-md"
            type="text"
            placeholder="Option"
          />
        </div>
      </div>
    </div>
  );
}
