'use client';

import { useEffect, useMemo, useState } from 'react';

export default function DiagnosticRunner() {
  const [options, setOptions] = useState([]);
  const [selectedId, setSelectedId] = useState('no-water-pickup');
  const [tree, setTree] = useState(null);
  const [stepId, setStepId] = useState(null);
  const [advice, setAdvice] = useState('');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const currentStep = useMemo(() => {
    if (!tree || !stepId) return null;
    return tree.steps.find((step) => step.id === stepId) || null;
  }, [tree, stepId]);

  useEffect(() => {
    loadOptions();
  }, []);

  useEffect(() => {
    if (selectedId) startDiagnostic(selectedId);
  }, [selectedId]);

  async function loadOptions() {
    const response = await fetch('/api/diagnostics');
    const data = await response.json();
    setOptions(data.diagnostics || []);
  }

  async function startDiagnostic(id) {
    setAdvice('');
    setHistory([]);
    setError('');

    const response = await fetch(`/api/diagnostics/${id}`);
    const data = await response.json();

    if (!response.ok) {
      setError(data.error || 'Diagnose kon niet worden geladen.');
      return;
    }

    const nextTree = data.diagnostic;
    setTree(nextTree);
    setStepId(nextTree.steps?.[0]?.id || null);
  }

  function answer(value) {
    if (!currentStep) return;

    setHistory((items) => [
      ...items,
      { question: currentStep.question, answer: value === 'yes' ? 'Ja' : 'Nee' }
    ]);

    const directAdvice = value === 'yes' ? currentStep.yesAdvice : currentStep.noAdvice;
    const nextId = value === 'yes' ? currentStep.yesNext : currentStep.noNext;

    if (directAdvice) {
      setAdvice(directAdvice);
      setStepId(null);
      return;
    }

    if (nextId) {
      setStepId(nextId);
      return;
    }

    setAdvice('De diagnose is afgerond. Maak bij twijfel een serviceticket aan.');
    setStepId(null);
  }

  return (
    <div>
      <label htmlFor="diagnostic-select">Kies een diagnose</label>
      <select
        id="diagnostic-select"
        value={selectedId}
        onChange={(event) => setSelectedId(event.target.value)}
      >
        {options.map((item) => (
          <option key={item.id} value={item.id}>{item.title}</option>
        ))}
      </select>

      {tree && <p className="small"><strong>{tree.title}</strong></p>}
      {currentStep && (
        <div className="diagnostic-card">
          <p>{currentStep.question}</p>
          <div className="actions">
            <button className="button" type="button" onClick={() => answer('yes')}>Ja</button>
            <button className="button ghost" type="button" onClick={() => answer('no')}>Nee</button>
          </div>
        </div>
      )}

      {advice && (
        <div className="diagnostic-result">
          <strong>Advies</strong>
          <p>{advice}</p>
          <button className="button" type="button" onClick={() => startDiagnostic(selectedId)}>Opnieuw starten</button>
        </div>
      )}

      {history.length > 0 && (
        <div className="diagnostic-history">
          <strong>Doorlopen stappen</strong>
          {history.map((item, index) => (
            <p className="small" key={`${item.question}-${index}`}>{item.answer}: {item.question}</p>
          ))}
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
