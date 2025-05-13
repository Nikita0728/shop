import Navbar from '@/components/Navbar';
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-6 md:px-20">
        <Navbar/>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side: Info Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-pink-100 to-white p-10">
          <h2 className="text-3xl font-bold mb-4 text-pink-600">Get in Touch</h2>
          <p className="mb-6 text-gray-600">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you.
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Email:</span> support@yourfashionstore.com
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +977-9800000000
            </li>
            <li>
              <span className="font-semibold">Address:</span> Kathmandu, Nepal
            </li>
          </ul>
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-pink-700 transition">Facebook</a>
              <a href="#" className="text-pink-500 hover:text-pink-700 transition">Instagram</a>
              <a href="#" className="text-pink-500 hover:text-pink-700 transition">TikTok</a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2 bg-white p-10">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
