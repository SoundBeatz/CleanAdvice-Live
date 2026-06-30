import MvpNavigation from '../../components/MvpNavigation';
import ServiceForm from '../../components/ServiceForm';

export default function ServicePage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Clean Service</div>
        <h1>Service</h1>
        <p>Vul de basisgegevens in voor een eerste Clean360 service-draft.</p>
        <ServiceForm />
        <MvpNavigation />
      </section>
    </main>
  );
}
