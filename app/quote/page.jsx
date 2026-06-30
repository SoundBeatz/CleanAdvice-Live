import MvpNavigation from '../../components/MvpNavigation';
import QuoteForm from '../../components/QuoteForm';

export default function QuotePage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Clean Quote</div>
        <h1>Offerte</h1>
        <p>Vul de basisgegevens in voor een eerste Clean360 offerte-draft.</p>
        <QuoteForm />
        <MvpNavigation />
      </section>
    </main>
  );
}
