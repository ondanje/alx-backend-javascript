const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('Basic Tests', () => {
	describe('SUM', () => {
		it('should return the sum of two positve numbers', () => {
			expect(calculateNumber('SUM', 1, 3)).to.equal(4)
		});
		it('should return the sum of negative & positive number', () => {
			expect(calculateNumber('SUM', -2, 3)).to.equal(1)
		});
		it('should return the sum of negative & positive number', () => {
			expect(calculateNumber('SUM', 2.0, 3.9)).to.equal(6)
		});
		it('should handle second number rounded', () => {
			expect(calculateNumber('SUM', 2.499, 3.499)).to.equal(5)
		});
	});

	describe('SUBTRACT', () => {
		it('should return the difference of two positve numbers', () => {
			expect(calculateNumber('SUBTRACT', 4, 3)).to.equal(1)
		});
		it('should return the difference of two negative numbers', () => {
			expect(calculateNumber('SUBTRACT', -2, 3)).to.equal(-5)
		});
		it('should return the difference of decimal number', () => {
			expect(calculateNumber('SUBTRACT', 4.0, 2.9)).to.equal(1)
		});
		it('should handle second number rounded', () => {
			expect(calculateNumber('SUBTRACT', 3.499, 2.499)).to.equal(1)
		});
	});

	describe('DIVIDE', () => {
		it('should return the division of two positve numbers', () => {
			expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4)
		});
		it('should return the difference of two negative numbers', () => {
			expect(calculateNumber('DIVIDE', -6, 3)).to.equal(-2)
		});
		it('should return the difference of decimal number', () => {
			expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
		});
		it('should handle second number rounded', () => {
			expect(calculateNumber('DIVIDE', 6.499, 3.4999)).to.equal(2)
		});
		it('should handle division by zero', () => {
			expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error')
		});
	});

});
