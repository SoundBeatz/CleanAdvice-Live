import MvpNavigation from '../../components/MvpNavigation';

export default function QuotePage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Clean Quote</div>
        <h1>Offerte</h1>
        <p>Deze pagina wordt de offerte-intake van Clean Advice Live.</p>
        <p>De MVP verzamelt straks contactgegevens, locatie, gebouwtype, vierkante meters, vloertype, frequentie en gewenste startdatum.</p>
        <MvpNavigation />
      </section>
    </main>
  );
}
