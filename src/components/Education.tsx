export function Education() {
  const education = [
    {
      school: 'Humber Polytechnic, Etobicoke, ON',
      program: 'Graduate Certificate, Data Analytics',
      meta: 'May 2025 – Feb 2026 · GPA 88.8% (Honours)',
    },
    {
      school: 'Algoma University, Brampton, ON',
      program: 'Graduate Certificate, Information Technology',
      meta: 'Sep 2024 – Apr 2025 · GPA 83%',
    },
    {
      school: 'Guru Nanak Dev University College, India',
      program: 'Bachelor of Computer Applications',
      meta: 'Dec 2020 – May 2023',
    },
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner (CLF-C02) — exam preparation in progress, 2026',
    'Forage: BCG Data Science Job Simulation — churn model, 50% recall',
    'Forage: Deloitte Australia Forensic Technology — Tableau anomaly detection',
    'Forage: TCS Data Visualization',
  ];

  return (
    <section id="education" className="wf-section">
      <div className="wf-shell">
        <p className="wf-eyebrow wf-eyebrow--gold">Background</p>
        <h2 className="wf-heading">Education &amp; Certifications</h2>

        <div className="wf-case">
          <div className="wf-education-block">
            <p className="wf-education-block-label">Education</p>
            {education.map((entry) => (
              <div key={entry.school} className="wf-education-entry">
                <strong>{entry.program}</strong> — {entry.school}
                <p className="wf-education-meta">{entry.meta}</p>
              </div>
            ))}
          </div>

          <div className="wf-education-block">
            <p className="wf-education-block-label">Certifications</p>
            {certifications.map((cert) => (
              <p key={cert} className="wf-education-entry" style={{ color: 'var(--wf-muted)' }}>
                {cert}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
