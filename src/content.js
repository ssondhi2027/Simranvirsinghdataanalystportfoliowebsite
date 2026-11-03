export const profile = {
  name: 'Simranvir Singh Sondhi',
  first: 'Simranvir',
  last: 'Singh Sondhi',
  role: 'Data Analyst · Analytics Engineer · Toronto, ON',
  pitch: 'I turn messy operational and regulatory data into decisions people can act on.',
};

export const metrics = [
  { figure: '30 yrs', label: 'of OSFI bank filings modelled in dbt Core' },
  { figure: '411', label: 'duplicate-key conflicts traced to the IAS 39 → IFRS 9 shift' },
  { figure: '0.98', label: 'R² on Walmart weekly sales forecasts' },
  { figure: '20K+', label: 'engine sensor readings in an LSTM failure model' },
];

export const projects = [
  {
    title: 'Canadian Bank Regulatory Reporting Platform',
    tag: 'Featured · 2026',
    featured: true,
    line: 'A bitemporal dbt Core warehouse over three OSFI returns and Bank of Canada rates, with a 21-control framework referenced to BCBS 239.',
    figures: [
      { value: '$187.7B', label: 'reporting-scope gap reconciled' },
      { value: '411 → 0', label: 'duplicate keys after a surrogate-key redesign' },
    ],
    stack: ['dbt Core', 'BigQuery', 'Dagster', 'Terraform', 'GitHub Actions', 'AWS Lambda', 'React'],
    links: [
      { label: 'Live', href: 'https://bank-regulatory-platform.netlify.app' },
      { label: 'Repo', href: 'https://github.com/ssondhi2027/bank-regulatory-platform' },
      { label: 'dbt docs', href: 'https://ssondhi2027.github.io/bank-regulatory-platform' },
    ],
  },
  {
    title: 'Analize-360',
    tag: 'Aviation · 2025',
    line: 'Predictive fleet analytics on NASA CMAPSS engine data.',
    figures: [{ value: '60–90 d', label: 'early warning on Aircraft-on-Ground risk' }],
    stack: ['AWS S3', 'Databricks', 'Delta Lake', 'LSTM'],
    links: [
      { label: 'Repo', href: 'https://github.com/ssondhi2027/Analize-360---Predictive-Fleet-Analytics-For-Commercial-Aviation' },
    ],
  },
  {
    title: 'Yuktara',
    tag: 'Health tech · 2026',
    wide: true,
    line: 'An online coaching web app for training and nutrition: programs, workout logging, meal plans, habits and weekly check-ins with progress charts.',
    figures: [
      { value: 'Coach + client', label: 'one shared plan, reviewed in a weekly check-in queue' },
      { value: '3D body map', label: 'shows the muscles you trained this week' },
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'three.js', 'Vite', 'Netlify'],
    links: [{ label: 'Live', href: 'https://yuktara-health.netlify.app/coach' }],
  },
  {
    title: 'Walmart Weekly Sales Forecasting',
    tag: 'Retail · 2025',
    line: 'Four models benchmarked on lag and calendar features.',
    figures: [{ value: 'R² 0.98', label: 'Random Forest, RMSE 3,487' }],
    stack: ['Python', 'scikit-learn', 'Keras'],
    links: [{ label: 'Repo', href: 'https://github.com/ssondhi2027/Walmart-Weekly-Sales-Forecasting' }],
  },
  {
    title: 'AI Demand Planner',
    tag: 'Supply chain · 2025',
    line: 'Forecasts with confidence bands, reorder points and Monte Carlo stockout simulation.',
    figures: [{ value: 'ARIMA + XGB', label: 'paired forecasting engines' }],
    stack: ['FastAPI', 'React', 'XGBoost'],
    links: [{ label: 'Repo', href: 'https://github.com/ssondhi2027/Ai-Demand_Planner' }],
  },
  {
    title: 'Canada Quality of Life',
    tag: 'Public data · 2025',
    line: 'Statistics Canada indicators rolled into composite indices.',
    figures: [{ value: '5 domains', label: 'society, prosperity, health, governance, environment' }],
    stack: ['Power BI', 'DAX', 'Power Query'],
    links: [{ label: 'Repo', href: 'https://github.com/ssondhi2027/Canada-quality-of-life-Power-BI-dashboard' }],
  },
];

export const skillGroups = [
  { name: 'Query & code', items: ['SQL', 'Python', 'dbt Core', 'Pandas', 'scikit-learn'] },
  { name: 'BI', items: ['Power BI', 'Tableau', 'DAX', 'Excel', 'Power Query'] },
  { name: 'Cloud', items: ['AWS', 'BigQuery', 'Databricks', 'Terraform'] },
  { name: 'Quality', items: ['Data validation', 'root-cause analysis', 'regression testing'] },
];

export const sphereTags = [
  'SQL', 'Python', 'dbt Core', 'Power BI', 'Tableau', 'AWS', 'BigQuery', 'Databricks', 'Delta Lake', 'Pandas',
  'scikit-learn', 'Keras', 'XGBoost', 'ARIMA', 'LSTM', 'FastAPI', 'React', 'Terraform', 'GitHub Actions', 'Dagster',
  'DAX', 'Power Query', 'Excel', 'Snowflake', 'Looker', 'Azure', 'A/B Testing', 'MySQL', 'Git', 'Jupyter',
];
export const hotTags = ['SQL', 'Python', 'dbt Core', 'Power BI', 'AWS'];
export const coolTags = ['Tableau', 'BigQuery', 'Databricks', 'Terraform', 'DAX'];

export const timeline = [
  { date: 'May – Aug 2026', title: 'ICQA Associate, Amazon', sub: 'Inventory audits, cycle counts and variance analysis against system records', kind: 'Work' },
  { date: '2025 – 2026', title: 'Graduate Certificate, Data Analytics', sub: 'Humber Polytechnic · 88.8%, Honours', kind: 'Study' },
  { date: '2024 – 2025', title: 'Graduate Certificate, Information Technology', sub: 'Algoma University · 83%', kind: 'Study' },
  { date: 'Mar 2023 – Jun 2024', title: 'CRM Coordinator, SpeakPerfect Overseas', sub: 'Lead, pipeline and conversion tracking in the CRM', kind: 'Work' },
  { date: '2020 – 2023', title: 'Bachelor of Computer Applications', sub: 'Guru Nanak Dev University College', kind: 'Study' },
];

// Newest first. Titles and dates as printed on each certificate; images live in public/certs/.
export const certifications = [
  { name: 'Data Science Job Simulation', issuer: 'BCG X · Forage', date: 'Apr 2026', image: '/certs/bcg-data-science.jpg' },
  { name: 'Data Engineering on AWS – Foundations', issuer: 'AWS Training & Certification', date: 'Feb 2026', image: '/certs/aws-data-engineering.jpg' },
  { name: 'Data Visualisation: Empowering Business with Effective Insights', issuer: 'Tata · Forage', date: 'Jan 2026', image: '/certs/tata-data-visualisation.jpg' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', date: 'Jan 2026', image: '/certs/deloitte-data-analytics.jpg' },
];

// Shorter courses, listed in one line under the certificate cards.
export const courses = [
  { name: 'Oracle Database 12c: Basic SQL', issuer: 'LinkedIn Learning', date: '2025' },
  { name: 'Understanding Capital Markets', issuer: 'LinkedIn Learning', date: '2024' },
];

export const contact = {
  email: 'simranvirsondhi2708@gmail.com',
  linkedin: 'https://www.linkedin.com/in/simranvir-singh',
  github: 'https://github.com/ssondhi2027',
};

export const footer = {
  left: 'Simranvir Singh Sondhi · Toronto, ON',
  right: 'SQL · Python · dbt · Power BI · AWS',
};
