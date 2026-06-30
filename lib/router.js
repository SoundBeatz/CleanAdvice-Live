export function detectIntent(input = '') {
  const text = input.toLowerCase();

  const serviceWords = ['storing', 'probleem', 'service', 'reparatie', 'zuigt', 'strepen', 'accu', 'borstel', 'lader'];
  const quoteWords = ['offerte', 'prijs', 'kosten', 'aanvraag', 'schoonmaakcontract', 'contract'];
  const machineWords = ['i-mop', 'imop', 'i-vac', 'ivac', 'machine', 'schrobzuigmachine', 'stofzuiger'];

  if (serviceWords.some((word) => text.includes(word))) return 'service';
  if (quoteWords.some((word) => text.includes(word))) return 'quote';
  if (machineWords.some((word) => text.includes(word))) return 'machine';

  return 'general';
}

export function detectMachine(input = '') {
  const text = input.toLowerCase();

  if (text.includes('lite')) return 'i-mop-lite';
  if (text.includes('xl')) return 'i-mop-xl';
  if (text.includes('i-vac 6') || text.includes('ivac 6')) return 'i-vac-6';
  if (text.includes('i-mop') || text.includes('imop')) return 'i-mop-xl';

  return null;
}

export function routeMessage(input = '') {
  return {
    intent: detectIntent(input),
    machine: detectMachine(input),
    originalText: input
  };
}
