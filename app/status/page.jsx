import MvpNavigation from '../../components/MvpNavigation';

export default function StatusPage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Development status</div>
        <h1>Status</h1>
        <p>Clean Advice Live MVP bevat nu een homepage, LiveKit token route, health endpoint, quote draft endpoint, service draft endpoint en Python agent worker.</p>
        <p>Test eerst /api/health. Start daarna de homepage op / en klik op Start Clean Advice gesprek.</p>
        <MvpNavigation />
      </section>
    </main>
  );
}
