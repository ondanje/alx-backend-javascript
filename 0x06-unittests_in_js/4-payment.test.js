const sinon = require('sinon')
const Utils = require('./utils')
const { expect } = require('chai');
//import { expect } from 'chai';
const sendPaymentRequestToApi = require('./4-payment')

describe('sendPaymentRequestToApi', () => {
	describe('calculateNumber', () => {
		it('should call utils.calculateNumber with correct arguments', () => {
			const calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
			const printOut = sinon.spy(console);

			const totalAmount = 100;
			const totalShipping = 20;

			calculateNumberStub.returns(10)

			sendPaymentRequestToApi(totalAmount, totalShipping);

			expect(calculateNumberStub.calledWith('SUM', totalAmount, totalShipping)).to.be.true;
			expect(calculateNumberStub.callCount).to.be.equal(1);

			expect(printOut.log.calledWith('The total is: 10')).to.be.true;
			expect(printOut.log.callCount).to.be.equal(1);

			calculateNumberStub.restore();
			printOut.log.restore();
		});
	});
});
