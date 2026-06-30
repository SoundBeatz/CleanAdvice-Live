import MvpNavigation from '../../components/MvpNavigation';
import RouterTester from '../../components/RouterTester';

export default function RouterTestPage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Intelligent Router</div>
        <h1>Router Test</h1>
        <p>Test hoe Clean Advice een klantvraag indeelt.</p>
        <RouterTester />
        <MvpNavigation />
      </section>
    </main>
  );
}
