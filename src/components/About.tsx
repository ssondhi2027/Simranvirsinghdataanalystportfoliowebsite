const skillGroups = [
  {
    label: 'Analytics & BI',
    color: 'blue' as const,
    items: [
      'Power BI',
      'Tableau',
      'Evidence',
      'Excel',
      'KPI reporting',
      'Dashboard design',
      'Forecasting',
      'Data storytelling',
    ],
  },
  {
    label: 'Programming & Data',
    color: 'pink' as const,
    items: [
      'SQL',
      'Python',
      'dbt Core',
      'JavaScript / Node.js',
      'React (Vite)',
      'MySQL',
      'Jupyter Notebook',
      'Git / GitHub',
    ],
  },
  {
    label: 'Cloud & Pipelines',
    color: 'orange' as const,
    items: [
      'Google BigQuery',
      'AWS Lambda',
      'AWS S3 / EC2 / RDS / IAM',
      'Terraform',
      'GitHub Actions CI/CD',
      'Dagster',
      'ETL / ELT design',
    ],
  },
  {
    label: 'Data Quality & Governance',
    color: 'gold' as const,
    items: [
      'BCBS 239 control frameworks',
      'Reconciliation controls',
      'Bitemporal modelling',
      'Data profiling & validation',
      'Anomaly detection',
      'Root-cause analysis',
      'SDLC / STLC',
    ],
  },
];

export function About() {
  return (
    <section id="about" className="wf-section">
      <div className="wf-shell">
        <p className="wf-eyebrow wf-eyebrow--pink" style={{ textAlign: 'center', width: '100%' }}>
          About Me
        </p>
        <p
          className="wf-heading"
          style={{ textAlign: 'center', maxWidth: '58ch', marginInline: 'auto' }}
        >
          Data analyst and analytics engineer with a QA background that catches data defects
          before they reach a dashboard.
        </p>
        <p
          className="wf-lede"
          style={{ textAlign: 'center', marginInline: 'auto' }}
        >
          I work across SQL, Python, dbt Core, BigQuery, Power BI, Tableau and AWS — building
          governed data products, production dashboards, and forecasting systems that hold up
          under real regulatory and operational scrutiny.
        </p>

        {skillGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: 28 }}>
            <p className="wf-eyebrow" style={{ color: 'var(--wf-muted)' }}>
              {group.label}
            </p>
            <div className="wf-pill-row">
              {group.items.map((item) => (
                <span key={item} className={`wf-pill wf-pill--${group.color}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
