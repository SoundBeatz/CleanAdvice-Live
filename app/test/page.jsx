import ApiTester from '../../components/ApiTester';

export default function TestPage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">MVP API test</div>
        <h1>API Test</h1>
        <p>Gebruik deze pagina om lokaal snel de basisroutes van Clean Advice Live te testen.</p>
        <ApiTester />
      </section>
    </main>
  );
}
