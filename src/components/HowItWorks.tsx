import { Database, BarChart3, Target, Presentation } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <Database size={40} />,
      title: 'Data Gathering',
      description: 'Collect and consolidate data from multiple sources, ensuring data quality and integrity.',
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Analysis & Modeling',
      description: 'Apply statistical methods and machine learning techniques to uncover patterns and trends.',
    },
    {
      icon: <Target size={40} />,
      title: 'Insights Generation',
      description: 'Transform findings into clear, actionable insights aligned with business objectives.',
    },
    {
      icon: <Presentation size={40} />,
      title: 'Recommendations',
      description: 'Present data-driven recommendations through compelling visualizations and reports.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A concise overview of my data analysis process, from data gathering to actionable business recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="text-blue-600 mb-4 mt-4">{step.icon}</div>
                <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
