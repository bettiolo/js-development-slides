describe('Half Pint', function () {
	'use strict';

	var halfPint;

	beforeEach(function () {
		halfPint = createHalfPint();
	});

	it('Contains 10 fl. oz. of beer', function () {
		expect(halfPint.getQuantity()).toEqual(10);
	});

	it('Has 10 fl. oz. of capacity', function () {
		expect(halfPint.getCapacity()).toEqual(10);
	});
});

describe('Half Pint Customer', function () {
	'use strict';

	var halfPint;

	beforeEach(function () {
		halfPint = createHalfPint();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		halfPint.drink();
		expect(halfPint.getQuantity()).toEqual(9);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		halfPint.quaff();
		expect(halfPint.getQuantity()).toEqual(6);
	});

	it('Drinks and then downs in one, the remaining beer is consumed', function () {
		halfPint.drink();
		halfPint.downInOne();
		expect(halfPint.getQuantity()).toEqual(0);
	});

	it('Cannot drink from a beer that has already been consumed', function () {
		halfPint.downInOne();
		halfPint.drink();
		expect(halfPint.getQuantity()).toEqual(0);
	});

	it('Cannot quaff from a beer that has already been consumed', function () {
		halfPint.downInOne();
		halfPint.quaff();
		expect(halfPint.getQuantity()).toEqual(0);
	});

});