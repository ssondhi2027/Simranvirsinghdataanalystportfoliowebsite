export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="wf-footer">
      <div className="wf-shell">
        <div className="wf-footer-grid">
          <div>
            <p className="wf-footer-name">Simranvir Singh Sondhi</p>
            <p className="wf-footer-tagline">
              Data Analyst / Analytics Engineer — turning data into decisions people can act on
            </p>
            <p className="wf-footer-meta">Toronto, ON | simranvirsondhi2708@gmail.com | +1 (437) 660-1404</p>
          </div>

          <div>
            <p className="wf-footer-heading">Quick Links</p>
            <ul className="wf-footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="wf-footer-heading">Connect</p>
            <ul className="wf-footer-list">
              <li>
                <a href="https://www.linkedin.com/in/simranvir-singh-s-300254136/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/ssondhi2027" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li><a href="mailto:simranvirsondhi2708@gmail.com">Email</a></li>
              <li><a href="tel:+14376601404">+1 (437) 660-1404</a></li>
            </ul>
          </div>
        </div>

        <div className="wf-footer-bottom">
          <p>&copy; {currentYear} Simranvir Singh Sondhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
