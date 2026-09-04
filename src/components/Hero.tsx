import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import profileImage from '../assets/7e5798758fc0a11df587d1e7f75a3a74c636e8d5.png';

const wallPhrases = [
  'DATA ANALYST.',
  'ANALYTICS ENGINEER.',
  'PROBLEM SOLVER.',
  'DBT CORE.',
  'BIGQUERY.',
  'SQL.',
  'PYTHON.',
  'POWER BI.',
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wallRows = Array.from({ length: 12 }, (_, row) =>
    Array.from({ length: 8 }, (_, i) => wallPhrases[(row * 3 + i) % wallPhrases.length]),
  );

  return (
    <section id="home" className="wf-hero">
      <div className="wf-wordwall" aria-hidden="true">
        {wallRows.map((row, rowIndex) => (
          <div key={rowIndex} className="wf-wordwall-row">
            {[...row, ...row].map((phrase, i) => (
              <span key={i}>{phrase}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="wf-hero-scrim" aria-hidden="true" />

      <div className="wf-hero-content wf-shell">
        <div>
        <p className="wf-eyebrow wf-eyebrow--blue">
          Toronto, ON · Open to Data Analyst &amp; Analytics Engineering roles
        </p>
        <h1 className="wf-hero-name">Simranvir Singh Sondhi</h1>
        <p className="wf-hero-tagline">
          <span>Data Analyst.</span>
          <span>Analytics Engineer.</span>
          <span>Problem Solver.</span>
        </p>
        <p className="wf-hero-value">
          I turn messy operational and regulatory data into decisions people can act on. Built a
          bitemporal Canadian bank regulatory reporting platform in dbt Core on BigQuery spanning
          30 years of OSFI filings, governed by a BCBS 239-referenced control framework, and
          deployed as a live React and AWS Lambda dashboard.
        </p>
        <p className="wf-hero-skills">
          SQL • Python • dbt Core • BigQuery • Power BI • Tableau • AWS • Terraform
        </p>
        <div className="wf-hero-actions">
          <button onClick={() => scrollToSection('projects')} className="wf-btn wf-btn--solid">
            View Projects
            <ArrowRight size={16} />
          </button>
          <a href="/resume.pdf" download className="wf-btn wf-btn--outline">
            Download Resume
            <Download size={16} />
          </a>
          <a
            href="https://github.com/ssondhi2027"
            target="_blank"
            rel="noopener noreferrer"
            className="wf-btn wf-btn--outline"
          >
            GitHub
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/simranvir-singh-s-300254136/"
            target="_blank"
            rel="noopener noreferrer"
            className="wf-btn wf-btn--outline"
          >
            LinkedIn
            <Linkedin size={16} />
          </a>
        </div>
        </div>

        <div className="wf-hero-portrait">
          <div className="wf-hero-portrait-glow" aria-hidden="true" />
          <img src={profileImage} alt="Simranvir Singh Sondhi" />
        </div>
      </div>

      <div className="wf-stage-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
