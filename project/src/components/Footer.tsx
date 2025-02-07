import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +1 234 567 890</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> contact@healthconnect.com</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> 123 Medical Center Dr.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-green-400">Our Services</a></li>
              <li><a href="/doctors" className="hover:text-green-400">Our Doctors</a></li>
              <li><a href="/appointment" className="hover:text-green-400">Book Appointment</a></li>
              <li><a href="/faq" className="hover:text-green-400">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: 10:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;