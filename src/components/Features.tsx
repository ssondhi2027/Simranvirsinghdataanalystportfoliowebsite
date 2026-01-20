import { TrendingUp, Lightbulb, Target } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Advanced Analytics',
      description: 'Expert in data cleaning, exploratory data analysis (EDA), forecasting, and trend analysis. Proficient in Python (Pandas, NumPy, Matplotlib), SQL, and statistical techniques for extracting meaningful insights from complex datasets.',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Data Visualization & Storytelling',
      description: 'Skilled in creating executive-ready dashboards using Power BI and Tableau. Excel at translating technical findings into compelling business narratives that drive stakeholder decision-making and action.',
    },
    {
      icon: <Target size={32} />,
      title: 'Industry Experience',
      description: 'Hands-on experience through virtual internships at Tata Consultancy Services and Deloitte Australia. Applied analytics techniques to real-world business scenarios including forensic data analysis and executive reporting.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming data into strategic business outcomes through proven analytical skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-2xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}