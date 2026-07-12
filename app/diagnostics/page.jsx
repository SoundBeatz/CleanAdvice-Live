import MvpNavigation from '../../components/MvpNavigation';
import DiagnosticRunner from '../../components/DiagnosticRunner';

export default function DiagnosticsPage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Diagnostic Engine</div>
        <h1>Diagnoses</h1>
        <p>Kies een storing en doorloop de controle stap voor stap.</p>
        <DiagnosticRunner />
        <MvpNavigation />
      </section>
    </main>
  );
}
