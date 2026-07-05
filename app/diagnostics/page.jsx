import MvpNavigation from '../../components/MvpNavigation';
import DiagnosticsList from '../../components/DiagnosticsList';

export default function DiagnosticsPage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Diagnostic Engine</div>
        <h1>Diagnoses</h1>
        <p>Bekijk de beschikbare diagnosebomen van Clean Advice.</p>
        <DiagnosticsList />
        <MvpNavigation />
      </section>
    </main>
  );
}
