import MvpNavigation from '../../components/MvpNavigation';

export default function TestRoomPage() {
  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Clean360 test room</div>
        <h1>Test Room</h1>
        <p>Centrale testpagina voor Clean Advice Live.</p>
        <p>Gebruik de knoppen hieronder om de MVP routes te openen.</p>
        <MvpNavigation />
      </section>
    </main>
  );
}
