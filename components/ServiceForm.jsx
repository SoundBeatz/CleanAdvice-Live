'use client';

import { useState } from 'react';

export default function ServiceForm() {
  const [result, setResult] = useState('Nog geen service-aanvraag verstuurd.');

  async function submitService(event) {
    event.preventDefault();
    const response = await fetch('/api/service', { method: 'POST' });
    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={submitService}>
      <div className="form-grid">
        <input name="company" placeholder="Bedrijfsnaam" />
        <input name="contact" placeholder="Contactpersoon" />
        <input name="email" placeholder="E-mail" />
        <input name="phone" placeholder="Telefoon" />
        <input name="machineBrand" placeholder="Merk machine" />
        <input name="machineModel" placeholder="Model machine" />
        <input name="symptom" placeholder="Storing of klacht" />
        <input name="urgency" placeholder="Urgentie" />
      </div>
      <textarea name="checks" placeholder="Wat is al gecontroleerd?" />
      <button className="button" type="submit">Maak service draft</button>
      <pre className="small">{result}</pre>
    </form>
  );
}
