/* global describe, beforeEach, it, expect */
describe('Half Pint', function () {
	'use strict';

	beforeEach(function () {
		window.quantity = 10;
	});

	it('Contains 10 fl. oz. of beer', function () {
		expect(window.quantity).toEqual(10);
	});

});

describe('Half Pint Customer', function () {
	'use strict';

	beforeEach(function () {
		window.quantity = 10;
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		window.drink();
		expect(window.quantity).toEqual(9);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		window.quaff();
		expect(window.quantity).toEqual(6);
	});

	it('Drinks and then downs in one, there remaining beer is consumed', function () {
		window.drink();
		window.downInOne();
		expect(window.quantity).toEqual(0);
	});

	it('Cannot drink more beer than the one available in the glass', function () {
		window.drink();
		window.quaff();
		window.quaff();
		window.quaff();
		expect(window.quantity).toEqual(0);
	});

	it('Can drink and quaff', function () {
		window.drink();
		window.quaff();
		expect(window.quantity).toEqual(5);
	});
});