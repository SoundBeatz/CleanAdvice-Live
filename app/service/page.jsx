import MvpNavigation from '../../components/MvpNavigation';

export default function ServicePage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Clean Service</div>
        <h1>Service</h1>
        <p>Deze pagina wordt de service- en storingsintake van Clean Advice Live.</p>
        <p>De MVP start straks met machine, model, symptoom, urgentie en controlepunten zoals slang, squeegee, tank en vlotter.</p>
        <MvpNavigation />
      </section>
    </main>
  );
}
