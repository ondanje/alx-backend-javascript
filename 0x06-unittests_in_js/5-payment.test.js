const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const e = require('express');

describe('Hooks in unittesting', () => {
	let printOut;

	beforeEach(() => {
		printOut = sinon.spy(console, 'log');
	});

	afterEach(() => {
		printOut.restore();
	});

	it('should log the correct message and call sendPaymentRequestToApi once with 100 and 20', () => {
		sendPaymentRequestToApi(100, 20);

		expect(printOut.calledWith('The total is: 120')).to.be.true;
		expect(printOut.callCount).to.be.equal(1);
	});

	it('should log the correct message and call sendPaymentRequestToApi once with 10 and 10', () => {
		sendPaymentRequestToApi(10, 10);

		expect(printOut.calledWith('The total is: 20')).to.be.true;
		expect(printOut.callCount).to.be.equal(1);
	});
});
