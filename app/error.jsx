'use client';

import MvpNavigation from '../components/MvpNavigation';

export default function ErrorPage({ error, reset }) {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Foutmelding</div>
        <h1>Er ging iets mis</h1>
        <p>De app heeft een fout opgevangen. Probeer opnieuw of ga terug naar een testpagina.</p>
        <div className="actions">
          <button className="button" onClick={() => reset()}>Probeer opnieuw</button>
        </div>
        <pre className="small">{error?.message || 'Onbekende fout'}</pre>
        <MvpNavigation />
      </section>
    </main>
  );
}
