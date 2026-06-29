'use client';

import { useState } from 'react';

export default function ApiTester() {
  const [result, setResult] = useState('Nog niet getest.');

  async function testRoute(route) {
    const response = await fetch(route, { method: route.includes('health') ? 'GET' : 'POST' });
    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <div>
      <div className="actions">
        <button className="button" onClick={() => testRoute('/api/health')}>Test health</button>
        <button className="button" onClick={() => testRoute('/api/quote')}>Test quote</button>
        <button className="button" onClick={() => testRoute('/api/service')}>Test service</button>
      </div>
      <pre className="small">{result}</pre>
    </div>
  );
}
