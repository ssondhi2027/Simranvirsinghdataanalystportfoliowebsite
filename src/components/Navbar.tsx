import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="wf-nav">
      <div className="wf-shell">
        <div className="wf-nav-inner">
          <button onClick={() => scrollToSection('home')} className="wf-nav-logo">
            Simranvir Sondhi
          </button>

          <div className="wf-nav-links">
            {links.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="wf-nav-link">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="wf-nav-cta">
              Contact
            </button>
          </div>

          <button className="wf-nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="wf-nav-mobile">
            {links.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="wf-nav-link">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="wf-nav-cta" style={{ width: 'fit-content' }}>
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
