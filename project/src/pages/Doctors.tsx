import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: '15+ years',
    education: 'MD - Cardiology, FACC',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: '12+ years',
    education: 'MD - Neurology, PhD',
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: '10+ years',
    education: 'MD - Pediatrics, FAAP',
  },
];

const Doctors = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h1>
          <p className="text-xl text-gray-600">Meet our team of experienced healthcare professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-green-600 mb-4">{doctor.specialty}</p>
                <div className="mb-4">
                  <p className="text-gray-600"><strong>Experience:</strong> {doctor.experience}</p>
                  <p className="text-gray-600"><strong>Education:</strong> {doctor.education}</p>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-center hover:bg-green-700"
                  >
                    <Calendar className="inline-block h-5 w-5 mr-2" />
                    Book Appointment
                  </a>
                  <a 
                    href={`https://wa.me/1234567890?text=I'd like to consult with ${doctor.name}`}
                    className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-md text-center hover:bg-green-50"
                  >
                    <MessageCircle className="inline-block h-5 w-5 mr-2" />
                    Chat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;