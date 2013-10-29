describe('Pint', function () {
	'use strict';
	
	var pint;

	beforeEach(function () {
		pint = new Pint();
	});

	it('Contains 20 fl. oz. of beer', function () {
		expect(pint.quantity).toEqual(20);
	});

	it('Has 20 fl. oz. of capacity', function () {
		expect(pint.capacity).toEqual(20);
	});
});

describe('Pint Customer', function () {
	'use strict';
	
	var pint;

	beforeEach(function () {
		pint = new Pint();
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		pint.drink();
		expect(pint.quantity).toEqual(19);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		pint.quaff();
		expect(pint.quantity).toEqual(16);
	});

	it('Drinks and then downs in one, the remaining beer is consumed', function () {
		pint.drink();
		pint.downInOne();
		expect(pint.quantity).toEqual(0);
	});

	it('Cannot drink from a beer that has already been consumed', function () {
		pint.downInOne();
		pint.drink();
		expect(pint.quantity).toEqual(0);
	});

	it('Cannot quaff from a beer that has already been consumed', function () {
		pint.downInOne();
		pint.quaff();
		expect(pint.quantity).toEqual(0);
	});

});