import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What tools and technologies are you proficient in?',
      answer: 'I am proficient in Power BI, Tableau, Excel (Pivot Tables, VLOOKUP, Power Query), SQL, Python (Pandas, NumPy, Matplotlib), MySQL, GitHub, and Jupyter Notebook. I also have strong skills in data cleaning, EDA, forecasting, trend analysis, and KPI reporting.',
    },
    {
      question: 'What kind of projects have you worked on?',
      answer: 'I have worked on predictive analytics for commercial aviation (100,000+ records), retail sales forecasting for major retailers, and interactive Power BI dashboards for quality-of-life analysis. All projects involve real-world datasets with full code and documentation available on GitHub.',
    },
    {
      question: 'What is your educational background?',
      answer: 'I hold a Graduate Certificate in Data Analytics from Humber Polytechnic College (GPA: 88.8%, Honours), a Graduate Certificate in Information Technology from Algoma University (GPA: 83%), and a Bachelor of Computer Applications from Guru Nanak Dev University College.',
    },
    {
      question: 'Do you have any industry experience?',
      answer: 'Yes, I have completed industry-recognized virtual internships at Tata Consultancy Services (Data Visualization) and Deloitte Australia (Data Analytics & Forensic Technology) through Forage, where I worked on real-world business scenarios and consulting-style simulations.',
    },
    {
      question: 'What makes you different as a data analyst?',
      answer: 'I combine strong technical skills with business storytelling and stakeholder communication. My experience spans from data cleaning and EDA to building executive-ready dashboards, with a proven ability to translate complex findings into actionable business insights.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Common questions about my skills, experience, and background
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-lg text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="flex-shrink-0 text-blue-600" size={24} />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-400" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}