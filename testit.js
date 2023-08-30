// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

function testit(a, b) {
  a = Array.from(new Set(a));
  b = Array.from(new Set(b));
  return a.concat(b).sort((a, b) => a - b);
}
