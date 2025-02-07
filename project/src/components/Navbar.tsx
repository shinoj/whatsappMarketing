import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">HealthConnect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-green-600">Services</Link>
            <Link to="/doctors" className="text-gray-600 hover:text-green-600">Doctors</Link>
            <Link to="/appointment" className="text-gray-600 hover:text-green-600">Book Appointment</Link>
            <Link to="/faq" className="text-gray-600 hover:text-green-600">FAQ</Link>
            <a href="https://wa.me/1234567890" 
               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Chat on WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-gray-600">Services</Link>
            <Link to="/doctors" className="block px-3 py-2 text-gray-600">Doctors</Link>
            <Link to="/appointment" className="block px-3 py-2 text-gray-600">Book Appointment</Link>
            <Link to="/faq" className="block px-3 py-2 text-gray-600">FAQ</Link>
            <a href="https://wa.me/1234567890" 
               className="block px-3 py-2 text-green-600">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;