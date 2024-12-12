import React from 'react';
import Image from 'next/image';


const Contact = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute inset-0">
          <Image src="/Images/Rectangle 1 (1).png" width={1400} height={200} alt="Icon" />
        </div>
        <div className="relative z-10 text-center py-20">
          <h1 className="text-4xl font-bold text-black">Contact</h1>
          <p className="text-gray-500">Home &gt; Contact</p>
        </div>
      </div>
      <br />

      <section className="contact-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="relative h-96 mt-10 md:mt-20">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.369003201249!2d67.03304119999999!3d24.885391900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e4fbf9c9649%3A0x84b4faaf132f90a5!2sGarden%20East%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731004296057!5m2!1sen!2s"
                style={{ filter: "contrast(1.2) opacity(0.6)" }}
              />
              <div className="contact-info absolute top-0 left-0 p-4 bg-white bg-opacity-80">
                <div className="mb-4">
                  <h2 className="font-bold text-lg">ADDRESS</h2>
                  <p>Garden East, Karachi</p>
                </div>
                <div>
                  <h2 className="font-bold text-lg">EMAIL</h2>
                  <a href="mailto:k.qrt@gmail.com" className="text-blue-500">kashifmehwish861@gmail.com</a>
                  <h2 className="font-bold text-lg mt-4">PHONE</h2>
                  <p>0333234567</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg mt-10 md:mt-20">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-gray-600 mb-6">Feel free to contact us</p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
