import React from 'react';
import { ArrowRight, Clock, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Your Health Is Our Priority</h1>
            <p className="text-xl mb-8">Connect with our healthcare professionals instantly via WhatsApp</p>
            <Link 
              to="/appointment"
              className="bg-green-600 text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-green-700"
            >
              Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get instant responses through our WhatsApp system anytime</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book appointments with just a few clicks</p>
            </div>
            <div className="text-center p-6">
              <MessageCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Chat Bot</h3>
              <p className="text-gray-600">Get quick answers to your questions through our FAQ bot</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white mb-8">Connect with us on WhatsApp for instant healthcare support</p>
          <a 
            href="https://wa.me/1234567890"
            className="bg-white text-green-600 px-8 py-3 rounded-md inline-flex items-center hover:bg-gray-100"
          >
            Chat Now <MessageCircle className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;