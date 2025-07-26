import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
            <h2 className="text-xl font-bold text-white mb-2">
            MOSS<span className="text-emerald-600">X</span>
            </h2>
          <p className="text-sm text-gray-400">
            Bringing nature closer to your home with curated plants and decor.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} MOSSX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;