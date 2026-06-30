'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [result, setResult] = useState('Nog geen offerte-aanvraag verstuurd.');

  async function submitQuote(event) {
    event.preventDefault();
    const response = await fetch('/api/quote', { method: 'POST' });
    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={submitQuote}>
      <div className="form-grid">
        <input name="company" placeholder="Bedrijfsnaam" />
        <input name="contact" placeholder="Contactpersoon" />
        <input name="email" placeholder="E-mail" />
        <input name="phone" placeholder="Telefoon" />
        <input name="location" placeholder="Locatie" />
        <input name="squareMeters" placeholder="Aantal m2" />
        <input name="floorType" placeholder="Vloertype" />
        <input name="frequency" placeholder="Frequentie" />
      </div>
      <textarea name="notes" placeholder="Korte omschrijving" />
      <button className="button" type="submit">Maak offerte draft</button>
      <pre className="small">{result}</pre>
    </form>
  );
}
