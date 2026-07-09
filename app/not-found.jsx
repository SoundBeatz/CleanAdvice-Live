import MvpNavigation from '../components/MvpNavigation';

export default function NotFound() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">404</div>
        <h1>Pagina niet gevonden</h1>
        <p>Deze route bestaat nog niet in Clean Advice Live.</p>
        <MvpNavigation />
      </section>
    </main>
  );
}
