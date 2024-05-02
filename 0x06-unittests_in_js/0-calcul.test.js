const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe } = require('node:test');


describe('calculateNumber', () => {
  it('should return the sum of rounded nymbers', () => {
	assert.strictEqual(calculateNumber(1.4, 2.6), 4);
});
});
