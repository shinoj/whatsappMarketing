import React, { useState } from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website by visiting the Appointments page, or directly through WhatsApp. Simply select your preferred doctor, date, and time."
  },
  {
    question: "What are your working hours?",
    answer: "We are open Monday to Friday from 8:00 AM to 8:00 PM, Saturday from 9:00 AM to 6:00 PM, and Sunday from 10:00 AM to 4:00 PM."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we offer 24/7 emergency services. In case of an emergency, please contact our emergency hotline or send a message through WhatsApp."
  },
  {
    question: "How do I get my test results?",
    answer: "Test results can be accessed through our WhatsApp system. You'll receive a notification once your results are ready."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans. Please contact our administrative staff through WhatsApp for specific insurance-related queries."
  },
  {
    question: "How can I cancel or reschedule my appointment?",
    answer: "You can cancel or reschedule your appointment through WhatsApp or by calling our reception. Please give at least 24 hours notice."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find quick answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-green-600" />
                ) : (
                  <Plus className="h-5 w-5 text-green-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <a 
            href="https://wa.me/1234567890?text=I have a question about your services"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;