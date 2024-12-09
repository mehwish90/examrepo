import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image src="/Rectangle 1 (1).png" width={1400} height={200} alt="Filter Icon" />
        </div>
        <div className="relative z-10 text-center py-20">
          <h1 className="text-4xl font-bold text-black">Contact</h1>
          <p className="text-gray-500">Home &gt; Contact</p>
        </div>
      </div>
      <br />
      {/* Content Section */}
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl font-extrabold text-black mt-8">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          For more information about our product & services, please feel free
          to drop us an email. Our staff is always there to help you out. Do
          not hesitate!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
            id="message"
           name="message"
           rows={4} // Use a number instead of a string
           required
           className="mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>

          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
