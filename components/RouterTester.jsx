'use client';

import { useState } from 'react';

export default function RouterTester() {
  const [text, setText] = useState('Mijn i-mop XL zuigt geen water meer op');
  const [result, setResult] = useState('Nog niet getest.');

  async function testRouter(event) {
    event.preventDefault();

    const response = await fetch('/api/route-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={testRouter}>
      <textarea value={text} onChange={(event) => setText(event.target.value)} />
      <button className="button" type="submit">Test router</button>
      <pre className="small">{result}</pre>
    </form>
  );
}
