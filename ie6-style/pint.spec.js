/* global describe, beforeEach, it, expect */
describe('Pint', function () {
	'use strict';

	beforeEach(function () {
		window.quantity = 20;
	});

	it('Contains 20 fl. oz. of beer', function () {
		expect(window.quantity).toEqual(20);
	});

});

describe('Pint Customer', function () {
	'use strict';

	beforeEach(function () {
		window.quantity = 20;
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		window.drink();
		expect(window.quantity).toEqual(19);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		window.quaff();
		expect(window.quantity).toEqual(16);
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
		window.quaff();
		window.quaff();
		expect(window.quantity).toEqual(0);
	});

	it('Can drink and quaff', function () {
		window.drink();
		window.quaff();
		expect(window.quantity).toEqual(15);
	});
});