const stats = [
  { value: '30+ years', label: 'of OSFI bank filings modelled bitemporally' },
  { value: '21 controls', label: 'in a BCBS 239-referenced data control framework' },
  { value: 'R² 0.98', label: 'forecast benchmark (RMSE 3,487) on Walmart sales' },
  { value: '60–90 days', label: 'ahead: Aircraft-on-Ground risk forecasting' },
  { value: '20,000+', label: 'sensor readings processed through a Delta Lake pipeline' },
  { value: '$187.7B', label: 'industry reconciliation gap traced and resolved' },
];

export function Impact() {
  return (
    <section aria-label="Impact by the numbers" className="wf-band wf-band--blue">
      <div className="wf-shell">
        <h2 className="wf-band-heading">Impact by the numbers</h2>
        <p className="wf-band-sub">
          A few figures from the Canadian Bank Regulatory Platform and the forecasting work
          alongside it.
        </p>
        <div className="wf-stats-grid">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="wf-stat-value">{stat.value}</p>
              <p className="wf-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
