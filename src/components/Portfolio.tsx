import type { ReactNode } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

const flagshipFeatures: { text: ReactNode; color: 'blue' | 'pink' | 'orange' | 'gold' }[] = [
  {
    color: 'blue',
    text: (
      <>
        <strong>Bitemporal by design:</strong> keyed incremental merges on knowledge time, not
        business time, so a restatement of a two-year-old filing is never silently dropped — proved
        live with a merge that touched exactly one row.
      </>
    ),
  },
  {
    color: 'pink',
    text: (
      <>
        <strong>Traced a $214B variance:</strong> diagnosed a balance-sheet identity control
        failing 1,712 of 3,533 rows to OSFI restructuring its own deposit line-item codes around
        2009.
      </>
    ),
  },
  {
    color: 'orange',
    text: (
      <>
        <strong>Caught a 2x double-counting defect</strong> hidden in subtotal validation logic by
        cross-checking against OSFI's own published validation rules.
      </>
    ),
  },
  {
    color: 'gold',
    text: (
      <>
        <strong>Reconciled a $187.7B gap</strong> between OSFI's published industry totals and
        reported institutions by ingesting a second source covering foreign bank branches.
      </>
    ),
  },
];

const projects = [
  {
    title: 'Analize-360: Predictive Fleet Analytics',
    stack: 'AWS S3 • Databricks • Delta Lake • Python • LSTM',
    description:
      'Processed 20,000+ NASA CMAPSS sensor readings through a Delta Lake pipeline, trained an LSTM model for remaining-useful-life prediction, and classified Aircraft-on-Ground risk 60–90 days ahead of failure.',
    link: 'https://github.com/ssondhi2027/Analize-360---Predictive-Fleet-Analytics-For-Commercial-Aviation',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Walmart Weekly Sales Forecasting',
    stack: 'Python • scikit-learn • Keras',
    description:
      'Benchmarked Linear Regression, MLP, Random Forest and deep neural network models on weekly store sales — Random Forest won at R² 0.98, RMSE 3,487 — with a chronological train-test split to prevent look-ahead leakage.',
    link: 'https://github.com/ssondhi2027/Walmart-Weekly-Sales-Forecasting',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'AI Demand Planner',
    stack: 'FastAPI • React • ARIMA • XGBoost • Monte Carlo',
    description:
      'CSV ingestion with schema validation and forecast confidence bands over ARIMA and XGBoost models, plus reorder-point, safety-stock and Monte Carlo stockout simulation for inventory planning.',
    link: 'https://github.com/ssondhi2027/Ai-Demand_Planner',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Canada Quality of Life Dashboard',
    stack: 'Power BI • Statistics Canada data',
    description:
      'Consolidated Statistics Canada datasets across society, prosperity, health, governance and environment domains (2021–2024) into composite indices with synchronized slicers and an executive summary page.',
    link: 'https://github.com/ssondhi2027/Canada-quality-of-life-Power-BI-dashboard',
    linkLabel: 'View on GitHub',
  },
];

export function Portfolio() {
  return (
    <section id="projects" className="wf-section">
      <div className="wf-shell">
        <p className="wf-eyebrow wf-eyebrow--orange">What I've Built</p>
        <h2 className="wf-heading">Case Studies</h2>
        <p className="wf-lede">
          A flagship regulatory data platform, plus forecasting and BI projects spanning aviation,
          retail and public policy data.
        </p>

        <div className="wf-case">
          <div className="wf-pill-row" style={{ marginBottom: 16 }}>
            <span className="wf-pill wf-pill--blue">dbt Core</span>
            <span className="wf-pill wf-pill--pink">BigQuery</span>
            <span className="wf-pill wf-pill--orange">Python</span>
            <span className="wf-pill wf-pill--gold">React</span>
            <span className="wf-pill wf-pill--blue">AWS Lambda</span>
            <span className="wf-pill wf-pill--pink">Terraform</span>
            <span className="wf-pill wf-pill--orange">GitHub Actions</span>
          </div>
          <h3 className="wf-case-title">Canadian Bank Regulatory Reporting Platform</h3>
          <p className="wf-case-description">
            An end-to-end bitemporal data platform over 30 years of OSFI bank returns (M4/P3/E3)
            and Bank of Canada rate data: an append-only content-addressed landing zone, dbt
            snapshots in BigQuery, and conformed core, finance and controls marts — governed by a
            BCBS 239-referenced framework of 21 registered controls, and served live through a
            React and AWS Lambda dashboard with no service account key stored anywhere.
          </p>

          <div className="wf-case-features">
            {flagshipFeatures.map((feature, i) => (
              <div key={i} className="wf-case-feature">
                <span className={`wf-case-feature-icon wf-pill--${feature.color}`}>
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="wf-case-feature-text">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="wf-case-links">
            <a
              href="https://bank-regulatory-platform.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="wf-case-link"
            >
              Live Dashboard <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/ssondhi2027/bank-regulatory-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="wf-case-link"
            >
              Data Platform Repo <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/ssondhi2027/Bank-Regulatory-Platform_UI"
              target="_blank"
              rel="noopener noreferrer"
              className="wf-case-link"
            >
              Web Serving Layer Repo <ArrowUpRight size={14} />
            </a>
            <a
              href="https://ssondhi2027.github.io/bank-regulatory-platform/"
              target="_blank"
              rel="noopener noreferrer"
              className="wf-case-link"
            >
              dbt Documentation <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="wf-projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="wf-project-card">
              <span className="wf-pill wf-pill--blue" style={{ width: 'fit-content' }}>
                {project.stack.split(' • ')[0]}
              </span>
              <h3 className="wf-project-title">{project.title}</h3>
              <p style={{ color: 'var(--wf-accent)', fontSize: 13, marginBottom: 8 }}>
                {project.stack}
              </p>
              <p className="wf-project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="wf-project-link"
              >
                {project.linkLabel} <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
