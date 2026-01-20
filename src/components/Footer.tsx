export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl mb-3">Simranvir Singh Sondhi</h3>
            <p className="text-gray-400 mb-4">
              Data Analyst | Transforming data into actionable business insights
            </p>
            <p className="text-gray-400 text-sm">
              Brampton, ON | simranvirsondhi2708@gmail.com
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/in/simranvir-singh-sondhi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/ssondhi2027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:simranvirsondhi2708@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14376601404" 
                  className="hover:text-white transition-colors"
                >
                  +1 (437) 660-1404
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Simranvir Singh Sondhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}