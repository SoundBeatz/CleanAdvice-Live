export function getFirstDiagnosticStep(tree) {
  if (!tree || !Array.isArray(tree.steps) || tree.steps.length === 0) return null;
  return tree.steps[0];
}

export function findDiagnosticStep(tree, stepId) {
  if (!tree || !Array.isArray(tree.steps)) return null;
  return tree.steps.find((step) => step.id === stepId) || null;
}

export function getDiagnosticAdvice(step, answer) {
  if (!step) return '';
  if (answer === 'yes') return step.yesAdvice || '';
  if (answer === 'no') return step.noAdvice || '';
  return '';
}
