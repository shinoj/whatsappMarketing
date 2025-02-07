import React from 'react';
import { Heart, Brain, Stethoscope, Baby, Eye, Bluetooth as Tooth, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care services including diagnostics and treatment.',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for neurological conditions and disorders.',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Primary healthcare services for all age groups.',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services and treatments.',
  },
  {
    icon: Tooth,
    title: 'Dental Care',
    description: 'Comprehensive dental services for the whole family.',
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive healthcare solutions for you and your family</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a 
                href={`https://wa.me/1234567890?text=I'm interested in ${service.title} services`}
                className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
              >
                Enquire via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;