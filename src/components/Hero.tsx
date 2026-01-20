import { ArrowRight, Download } from 'lucide-react';
import profileImage from 'figma:asset/8297c68ac7c81a35c2f93c04361a02923d0088c0.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium">Data Analyst</p>
              <h1 className="text-5xl lg:text-6xl text-gray-900">
                Simranvir Singh Sondhi
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Data Analyst graduate transforming complex datasets into actionable business insights through advanced analytics, visualization, and forecasting. Experienced in Power BI, Tableau, SQL, Python, and real-world data storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <a 
                href="https://github.com/ssondhi2027" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                View GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={profileImage}
                alt="Simranvir Singh Sondhi - Graduation Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}