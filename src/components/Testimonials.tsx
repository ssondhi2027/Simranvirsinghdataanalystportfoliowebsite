import { Quote, Award } from 'lucide-react';

export function Testimonials() {
  const experiences = [
    {
      name: 'Tata Consultancy Services',
      role: 'Data Visualization Simulation',
      company: 'Forage Virtual Internship',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg4OTg4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'Developed executive-ready dashboards to support senior leadership decision-making. Translated business requirements into clear analytical visuals and delivered actionable, business-aligned insights.',
      link: 'https://www.theforage.com/simulations/tata/data-visualisation-p5xo',
    },
    {
      name: 'Deloitte Australia',
      role: 'Data Analytics & Forensic Technology',
      company: 'Forage Virtual Internship',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg4OTg4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'Completed consulting-style simulation focused on data analytics and forensic investigation. Built interactive Tableau dashboard for anomaly detection and applied analytical thinking to real-world business compliance scenarios.',
      link: 'https://www.theforage.com/simulations/deloitte-au/data-analytics-s5zy',
    },
    {
      name: 'Academic Achievement',
      role: 'Graduate Certificate in Data Analytics',
      company: 'Humber Polytechnic College',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg4OTg4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'Graduated with Honours (GPA: 88.8%) from a comprehensive data analytics program. Gained hands-on experience in data visualization, SQL querying, forecasting, and dashboard development.',
      link: null,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Industry Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Virtual internships and academic achievements demonstrating professional readiness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow"
            >
              <Award className="text-blue-600 opacity-20 absolute top-4 right-4" size={48} />
              <div className="relative">
                <p className="text-gray-700 mb-6">{experience.quote}</p>
                <div className="space-y-2">
                  <p className="text-gray-900">{experience.name}</p>
                  <p className="text-sm text-gray-600">{experience.role}</p>
                  <p className="text-sm text-blue-600">{experience.company}</p>
                  {experience.link && (
                    <a 
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mt-2"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}