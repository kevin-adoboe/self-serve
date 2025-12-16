const assert = require('assert');
const { greet, add } = require('../src/index');

console.log('Running tests...\n');

// Test greet function
assert.strictEqual(greet('World'), 'Hello, World!', 'greet should return greeting');
assert.strictEqual(greet('CircleCI'), 'Hello, CircleCI!', 'greet should work with any name');
console.log('✓ greet function tests passed');

// Test add function
assert.strictEqual(add(2, 3), 5, 'add should return sum');
assert.strictEqual(add(-1, 1), 0, 'add should handle negative numbers');
assert.strictEqual(add(0, 0), 0, 'add should handle zeros');
console.log('✓ add function tests passed');

console.log('\nAll tests passed!');
