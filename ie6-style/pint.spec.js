describe('Pint', function () {
	'use strict';

	it('Contains 20 fl. oz. of beer', function () {
		expect(quantity).toEqual(20);
	});

	it('Has 20 fl. oz. of capacity', function () {
		expect(capacity).toEqual(20);
	});
});

describe('Customer', function () {
	'use strict';

	beforeEach(function () {
		quantity = 20;
		capacity = 20;
	});

	it('Drinks, 1 fl. oz. is consumed', function () {
		drink();
		expect(quantity).toEqual(19);
	});

	it('Quaffs, 4 fl. oz. are consumed', function () {
		quaff();
		expect(quantity).toEqual(16);
	});

	it('Drinks and then downs in one, the remaining beer is consumed', function () {
		drink();
		downInOne();
		expect(quantity).toEqual(0);
	});

	it('Cannot drink from a beer that has already been consumed', function () {
		downInOne();
		drink();
		expect(quantity).toEqual(0);
	});

	it('Cannot quaff from a beer that has already been consumed', function () {
		downInOne();
		quaff();
		expect(quantity).toEqual(0);
	});

});