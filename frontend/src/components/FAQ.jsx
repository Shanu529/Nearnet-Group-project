import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the Sign Up button and complete the registration process.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Credit/Debit Cards, PayPal, and Bank Transfers for annual plans.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime. You will retain access until the billing period ends.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on Forgot Password on the login page and follow the email instructions.",
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our app is available on both iOS and Android platforms.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <i
                className={`fas fa-chevron-down text-indigo-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
