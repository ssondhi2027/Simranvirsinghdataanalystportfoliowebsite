import { ExternalLink, Calendar, Tag } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: 'Analize-360: Predictive Fleet Analytics',
      description: 'Analyzed and cleaned 100,000+ aviation maintenance records to identify operational inefficiencies. Built forecasting models for predictive maintenance and designed visual dashboards to communicate insights, enabling data-driven fleet optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODg4NDgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'EDA', 'Forecasting', 'Data Cleaning'],
      date: '2025',
      impact: '100K+ records analyzed',
      link: 'https://github.com/ssondhi2027/Analize-360---Predictive-Fleet-Analytics-For-Commercial-Aviation',
    },
    {
      title: 'Walmart Weekly Sales Forecasting',
      description: 'Analyzed historical retail sales data across 45+ stores to forecast weekly performance. Performed seasonality and trend analysis using Python and Excel, automating data preparation and generating predictive insights for inventory planning.',
      image: 'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3Njg4Mzk4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Forecasting', 'Excel', 'Statistical Analysis'],
      date: '2025',
      impact: '45+ stores analyzed',
      link: 'https://github.com/ssondhi2027/Walmart-Weekly-Sales-Forecasting',
    },
    {
      title: 'Canada Quality of Life Dashboard',
      description: 'Designed an interactive Power BI dashboard analyzing quality-of-life indicators across Canadian provinces. Integrated multiple datasets covering income, housing, healthcare, and education with dynamic KPIs and drill-downs for executive reporting.',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2ODkyMzQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Power BI', 'Data Visualization', 'KPI Reporting', 'Dashboards'],
      date: '2024',
      impact: 'Multi-dataset integration',
      link: 'https://github.com/ssondhi2027/Canada-quality-of-life-Power-BI-dashboard',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world data analysis projects demonstrating end-to-end analytical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {project.date}
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    {project.impact}
                  </span>
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-colors"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}