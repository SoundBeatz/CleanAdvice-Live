'use client';

import { useState } from 'react';

export default function DiagnosticsList() {
  const [result, setResult] = useState('Nog niet geladen.');

  async function loadDiagnostics() {
    const response = await fetch('/api/diagnostics');
    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <div>
      <button className="button" onClick={loadDiagnostics}>Laad diagnosebomen</button>
      <pre className="small">{result}</pre>
    </div>
  );
}
