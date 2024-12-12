export default function Footer() {
    return (
      <footer className="bg-white">
        
        <div className="container mx-auto py-8 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-gray-100">
          
          <div className="space-y-4">
            <h2 className="font-bold text-2xl">Funiro.</h2>
            <p className="text-gray-400">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
  
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-400">Links</h4>
            <ul className="space-y-2 text-black font-semibold">
              <li className="hover:text-purple-500">Home</li>
              <li className="hover:text-purple-500">Shop</li>
              <li className="hover:text-purple-500">About</li>
              <li className="hover:text-purple-500">Contact</li>
            </ul>
          </div>
  
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-400">Help</h4>
            <ul className="space-y-2 text-black">
              <li className="hover:text-purple-500">Payment Option</li>
              <li className="hover:text-purple-500">Returns</li>
              <li className="hover:text-purple-500">Privacy Policies</li>
            </ul>
          </div>
  
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-400">Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder=" Enter Your Email Address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white font-bold py-2 rounded-md hover:bg-purple-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
  
        
        <div className="bg-gray-white py-4">
          <div className="container mx-auto text-center text-gray-400">
            <hr className="mb-2" />
            <p>&copy; 2023 Funiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  