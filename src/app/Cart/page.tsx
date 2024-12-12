import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";


export default function Cart() {
  return (
    <>
      <div className="relative">
        <Image src="/Images/Rectangle 1 (1).png" width={1400} height={50} alt="Picture of the author" />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center text-center">
          <h3 className="font-bold text-[1.5rem]">Cart</h3>
          <div className="flex items-center gap-2">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Cart</h3>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20">
        <div className="producDetails flex justify-between items-center p-4 bg-[#F9F1E7]">
          <h2 className="w-1/4 text-center">Product</h2>
          <h2 className="w-1/4 text-center">Price</h2>
          <h2 className="w-1/4 text-center">Quantity</h2>
          <h2 className="w-1/4 text-center">Subtotal</h2>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between">
            <Image src="/Images/sofaaa.png" width={100} height={20} alt="Sofa Image" className="w-1/5" />
            <p className="mt-4 w-1/5 text-center">Comfortable sofa Set</p>
            <p className="mt-4 w-1/5 text-center">Rs. 350,000.00</p>
            <p className="mt-4 w-1/5 text-center">1</p>
            <p className="mt-4 w-1/5 text-center">Rs. 350,000.00</p>
          </div>

          <div className="cartTotal bg-[#F9F1E7] text-center mt-8 mx-auto w-full md:w-[20rem] p-6 rounded-lg shadow-md">
            <h2 className="font-bold text-[1.5rem] mb-4">Cart Totals</h2>
            <p><span className="font-bold">Subtotal: </span>Rs. 350,000.00</p>
            <p><span className="font-bold">Total: </span>Rs. 350,000.00</p>
            <button className="mt-5 rounded-md border-gray-900 border-2 p-2 px-6 bg-gray-100 hover:bg-gray-200 transition">Check Out</button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-evenly items-center gap-6 bg-[#F9F1E7] p-6">
        <div className="text-center w-1/2 md:w-auto">
          <Image src="/Images/Group.png" width={40} height={40} alt="High Quality" />
          <h4 className="font-bold mt-2">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div className="text-center w-1/2 md:w-auto">
          <Image src="/Images/warr.png" width={40} height={40} alt="Warranty Protection" />
          <h4 className="font-bold mt-2">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div className="text-center w-1/2 md:w-auto">
          <Image src="/Images/vecter1.png" width={40} height={40} alt="Free Shipping" />
          <h4 className="font-bold mt-2">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div className="text-center w-1/2 md:w-auto">
          <Image src="/Images/customer.png" width={40} height={40} alt="24 / 7 Support" />
          <h4 className="font-bold mt-2">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}