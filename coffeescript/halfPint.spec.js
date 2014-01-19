/* global describe, beforeEach, it, expect */
describe('Half Pint', function () {
	'use strict';

	var pint;

	beforeEach(function () {
		pint = new window.Pub.HalfPint();
	});

	it('Contains 10 fl. oz. of beer', function () {
		expect(pint.getQuantity()).toEqual(10);
	});

});

describe('Half Pint Customer', function () {
	'use strict';

	var pint;

	beforeEach(function () {
		pint = new window.Pub.HalfPint();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		pint.drink();
		expect(pint.getQuantity()).toEqual(9);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		pint.quaff();
		expect(pint.getQuantity()).toEqual(6);
	});

	it('Drinks and then downs in one, there remaining beer is consumed', function () {
		pint.drink();
		pint.downInOne();
		expect(pint.getQuantity()).toEqual(0);
	});

	it('Cannot drink more beer than the one available in the glass', function () {
		pint.drink();
		pint.quaff();
		pint.quaff();
		pint.quaff();
		pint.quaff();
		pint.quaff();
		expect(pint.getQuantity()).toEqual(0);
	});

	it('Can drink and quaff', function () {
		pint.drink();
		pint.quaff();
		expect(pint.getQuantity()).toEqual(5);
	});

});