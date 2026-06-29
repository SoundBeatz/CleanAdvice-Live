'use client';

import { useState } from 'react';
import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import '@livekit/components-styles';

const WELCOME_VIDEO_URL = 'https://6ammc3n5zzf5ljnz.public.blob.vercel-storage.com/live-clips/liveChatClip-nWKjbzbggExFbsae7MMuvV5iQlhRsz.mp4';

export default function CleanAdviceCall() {
  const [connection, setConnection] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function startCall() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/token', { method: 'POST' });
      if (!response.ok) throw new Error('Token route error. Controleer de env instellingen.');
      const data = await response.json();
      setConnection(data);
    } catch (err) {
      setError(err.message || 'Onbekende fout.');
    } finally {
      setLoading(false);
    }
  }

  if (connection) {
    return (
      <LiveKitRoom token={connection.token} serverUrl={connection.url} connect={true} video={true} audio={true} className="lk-room">
        <VideoConference />
      </LiveKitRoom>
    );
  }

  return (
    <main className="screen">
      <section className="panel">
        <div className="badge">Clean360 AI video advies</div>
        <h1>Clean Advice Live</h1>
        <p>Start een live videogesprek met de digitale schoonmaakadviseur van Clean360.</p>
        <video className="video" src={WELCOME_VIDEO_URL} autoPlay muted loop playsInline />
        <div className="actions">
          <button className="button" onClick={startCall} disabled={loading}>{loading ? 'Verbinden...' : 'Start Clean Advice gesprek'}</button>
        </div>
        {error && <p className="error">{error}</p>}
        <p className="small">Clean Advice antwoordt in dezelfde taal als de bezoeker.</p>
      </section>
    </main>
  );
}
