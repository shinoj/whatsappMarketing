import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    department: '',
    doctor: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For demo, we'll create a WhatsApp message
    const message = `New Appointment Request:
Name: ${formData.name}
Date: ${formData.date}
Time: ${formData.time}
Department: ${formData.department}
Doctor: ${formData.doctor}
Message: ${formData.message}`;

    window.location.href = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Book an Appointment</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline-block h-5 w-5 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline-block h-5 w-5 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline-block h-5 w-5 mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline-block h-5 w-5 mr-2" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select
                  name="department"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Dental">Dental</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Doctor
                </label>
                <select
                  name="doctor"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                  value={formData.doctor}
                  onChange={handleChange}
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                  <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                  <option value="Dr. Emily Williams">Dr. Emily Williams</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline-block h-5 w-5 mr-2" />
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
            >
              Book Appointment via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;