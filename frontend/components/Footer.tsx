import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              ShopMe Fashion
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Explore the latest trends in fashion with ShopMe. Your style, our priority.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FaFacebookF, FaInstagram, FaTwitter, FaPinterestP].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Shop', 'About Us', 'Contact', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1 h-1 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-400 mb-6">Customer Service</h3>
            <ul className="space-y-3">
              {['Shipping Policy', 'Returns & Exchanges', 'FAQ', 'Size Guide', 'Track Order'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-400 mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe for exclusive offers and updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-4 py-2 rounded-r-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ShopMe Fashion. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;