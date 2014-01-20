/* global describe, beforeEach, it, expect */
describe('Half Pint', function () {
	'use strict';

	var halfPint;

	beforeEach(function () {
		halfPint = new window.Pub.HalfPint();
	});

	it('Contains 10 fl. oz. of beer', function () {
		expect(halfPint.getQuantity()).toEqual(10);
	});

	it('Is an instance of Pint and Glass', function () {
		expect(halfPint instanceof window.Pub.HalfPint).toBeTruthy();
		expect(halfPint instanceof window.Pub.Glass).toBeTruthy();
		expect(halfPint instanceof window.Pub.Pint).toBeFalsy();
	});

});

describe('Half Pint Customer', function () {
	'use strict';

	var halfPint;

	beforeEach(function () {
		halfPint = new window.Pub.HalfPint();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		halfPint.drink();
		expect(halfPint.getQuantity()).toEqual(9);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		halfPint.quaff();
		expect(halfPint.getQuantity()).toEqual(6);
	});

	it('Drinks and then downs in one, there remaining beer is consumed', function () {
		halfPint.drink();
		halfPint.downInOne();
		expect(halfPint.getQuantity()).toEqual(0);
	});

	it('Cannot drink more beer than the one available in the glass', function () {
		halfPint.drink();
		halfPint.quaff();
		halfPint.quaff();
		halfPint.quaff();
		halfPint.quaff();
		halfPint.quaff();
		expect(halfPint.getQuantity()).toEqual(0);
	});

	it('Can drink and quaff', function () {
		halfPint.drink();
		halfPint.quaff();
		expect(halfPint.getQuantity()).toEqual(5);
	});

});