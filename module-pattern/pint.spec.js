/* global describe, beforeEach, it, expect */
describe('Pint', function () {
	'use strict';

	beforeEach(function () {
		window.Pub.pint.refill();
	});

	it('Contains 20 fl. oz. of beer', function () {
		expect(window.Pub.pint.getQuantity()).toEqual(20);
	});

});

describe('Pint Customer', function () {
	'use strict';

	beforeEach(function () {
		window.Pub.pint.refill();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		window.Pub.pint.drink();
		expect(window.Pub.pint.getQuantity()).toEqual(19);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		window.Pub.pint.quaff();
		expect(window.Pub.pint.getQuantity()).toEqual(16);
	});

	it('Drinks and then downs in one, there remaining beer is consumed', function () {
		window.Pub.pint.drink();
		window.Pub.pint.downInOne();
		expect(window.Pub.pint.getQuantity()).toEqual(0);
	});

	it('Cannot drink more beer than the one available in the glass', function () {
		window.Pub.pint.drink();
		window.Pub.pint.quaff();
		window.Pub.pint.quaff();
		window.Pub.pint.quaff();
		window.Pub.pint.quaff();
		window.Pub.pint.quaff();
		expect(window.Pub.pint.getQuantity()).toEqual(0);
	});

	it('Can drink and quaff', function () {
		window.Pub.pint.drink();
		window.Pub.pint.quaff();
		expect(window.Pub.pint.getQuantity()).toEqual(15);
	});

});