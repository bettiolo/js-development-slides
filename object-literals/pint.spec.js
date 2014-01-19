/* global describe, beforeEach, it, expect */
describe('Pint', function () {
	'use strict';

	beforeEach(function () {
		window.pint.quantity = 20;
	});

	it('Contains 20 fl. oz. of beer', function () {
		expect(window.pint.quantity).toEqual(20);
	});

});

describe('Pint Customer', function () {
	'use strict';

	beforeEach(function () {
		window.pint.quantity = 20;
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		window.pint.drink();
		expect(window.pint.quantity).toEqual(19);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		window.pint.quaff();
		expect(window.pint.quantity).toEqual(16);
	});

	it('Drinks and then downs in one, there remaining beer is consumed', function () {
		window.pint.drink();
		window.pint.downInOne();
		expect(window.pint.quantity).toEqual(0);
	});

	it('Cannot drink more beer than the one available in the glass', function () {
		window.pint.drink();
		window.pint.quaff();
		window.pint.quaff();
		window.pint.quaff();
		window.pint.quaff();
		window.pint.quaff();
		expect(window.pint.quantity).toEqual(0);
	});

	it('Can drink and quaff', function () {
		window.pint.drink();
		window.pint.quaff();
		expect(window.pint.quantity).toEqual(15);
	});

});