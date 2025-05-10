
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-bakery-cream to-bakery-pink dark:from-gray-900 dark:to-gray-800 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif text-bakery-brown dark:text-bakery-cream">CrèmeCraft</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Handcrafted with love, our delectable cakes and pastries are made using the finest ingredients. Each bite is a celebration of sweetness and artisanal craftsmanship.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif text-bakery-brown dark:text-bakery-cream">Our Cakes</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/layer-cakes" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Layer Cakes</Link></li>
              <li><Link to="/category/cupcakes" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Cupcakes</Link></li>
              <li><Link to="/category/cheesecakes" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Cheesecakes</Link></li>
              <li><Link to="/category/cookies-macarons" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Cookies & Macarons</Link></li>
              <li><Link to="/category/specialty-desserts" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Specialty Desserts</Link></li>
              <li><Link to="/category/dietary" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Dietary Options</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif text-bakery-brown dark:text-bakery-cream">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">FAQ</Link></li>
              <li><Link to="/delivery" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Delivery Information</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-bakery-dark-pink dark:hover:text-bakery-pink">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif text-bakery-brown dark:text-bakery-cream">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-bakery-brown dark:bg-bakery-pink text-white">
                FB
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-bakery-brown dark:bg-bakery-pink text-white">
                IG
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-bakery-brown dark:bg-bakery-pink text-white">
                TW
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-bakery-brown dark:bg-bakery-pink text-white">
                YT
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Sign up for our newsletter to receive special offers
            </p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Enter your email" className="px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-bakery-pink" />
              <button className="bg-bakery-brown dark:bg-bakery-dark-pink text-white px-4 py-2 rounded-r-md text-sm">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} CrèmeCraft Bakery. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
            Proudly presented by B.P.Sulakhe Commerce College, Barshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
