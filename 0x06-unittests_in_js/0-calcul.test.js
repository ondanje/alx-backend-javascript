const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
  describe('calculate number', function() {

		it('shoulds return the sum of two numbers', function() {
			assert.strictEqual(calculateNumber(1, 3),4)
		});

		it('shoulds return the sum of one  decimal number', function() {
			assert.strictEqual(calculateNumber(1, 3.7),5)
		});

		it('should handle two decimal numbers', function() {
			assert.strictEqual(calculateNumber(1.2, 3.7), 5)
		});

		it('should handle negative number', function() {
			assert.strictEqual(calculateNumber(-1, 3),2 )
		});
  });

});
