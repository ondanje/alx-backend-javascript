const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('Basic Tests', () => {
	describe('SUM', () => {
		it('should return the sum of two positve numbers', () => {
			assert.strictEqual(calculateNumber('SUM', 1, 3),4)
		});
		it('should return the sum of negative & positive number', () => {
			assert.strictEqual(calculateNumber('SUM', -2, 3),1)
		});
		it('should return the sum of negative & positive number', () => {
			assert.strictEqual(calculateNumber('SUM', 2.0, 3.9),6)
		});
		it('should handle second number rounded', () => {
			assert.strictEqual(calculateNumber('SUM', 2.499, 3.499),5)
		});
	});

	describe('SUBTRACT', () => {
		it('should return the difference of two positve numbers', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 4, 3),1)
		});
		it('should return the difference of two negative numbers', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', -2, 3),-5)
		});
		it('should return the difference of decimal number', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 4.0, 2.9),1)
		});
		it('should handle second number rounded', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 3.499, 2.499),1)
		});
	});

	describe('DIVIDE', () => {
		it('should return the division of two positve numbers', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 8, 2),4)
		});
		it('should return the difference of two negative numbers', () => {
			assert.strictEqual(calculateNumber('DIVIDE', -6, 3),-2)
		});
		it('should return the difference of decimal number', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0),2)
		});
		it('should handle second number rounded', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 6.499, 3.4999),2)
		});
	});

})
