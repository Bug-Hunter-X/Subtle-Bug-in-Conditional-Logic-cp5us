function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; // Incorrect: should handle only if both are 0
  }
  return a * b;
}