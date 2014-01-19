/* global describe, beforeEach, it, expect */
describe('Pint', function () {
	'use strict';

	var pint;

	beforeEach(function () {
		pint = new window.Pub.Pint();
	});

	it('Contains 20 fl. oz. of beer', function () {
		expect(pint.getQuantity()).toEqual(20);
	});

});

describe('Pint Customer', function () {
	'use strict';

	var pint;

	beforeEach(function () {
		pint = new window.Pub.Pint();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		pint.drink();
		expect(pint.getQuantity()).toEqual(19);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		pint.quaff();
		expect(pint.getQuantity()).toEqual(16);
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
		expect(pint.getQuantity()).toEqual(15);
	});

});