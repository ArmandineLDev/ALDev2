require('@testing-library/jest-dom');
require('jest-axe/extend-expect');

// Ajouter un avertissement pour les erreurs de console pendant les tests
const originalError = console.error;
console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
}; 