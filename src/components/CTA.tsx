import { Mail, Linkedin, Github, FileText, MapPin, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-4">Let's Work Together</h2>
        <p className="text-xl text-blue-100 mb-8">
          Open to data analyst opportunities in Canada. Let's discuss how I can help transform your data into actionable insights.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="mailto:simranvirsondhi2708@gmail.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a 
            href="https://github.com/ssondhi2027" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2 font-medium"
          >
            <FileText size={20} />
            View GitHub Portfolio
          </a>
        </div>

        <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
            <div className="flex items-center justify-center gap-2">
              <MapPin size={18} />
              <span>Brampton, ON</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={18} />
              <a href="tel:+14376601404" className="hover:text-blue-100">+1 (437) 660-1404</a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={18} />
              <a href="mailto:simranvirsondhi2708@gmail.com" className="hover:text-blue-100">simranvirsondhi2708@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/simranvir-singh-s-300254136/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/ssondhi2027"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:simranvirsondhi2708@gmail.com"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}