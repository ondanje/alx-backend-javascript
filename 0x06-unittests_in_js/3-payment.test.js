const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', () => {
	describe('calculateNumber', () => {
		it('should call utils.calculateNumber with correct arguments', () => {
			const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
			const totalAmount = 100;
			const totalShipping = 20;

			sendPaymentRequestToApi(totalAmount, totalShipping);

			sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', totalAmount, totalShipping);

			calculateNumberSpy.restore();
		});
	});
});
