describe('Calculator', function (){

	it('Adds numbers', function () {
		var num1 = 3;
		var num2 = 2;
		var result = add(num1, num2);

		expect(result).toBe(5);
		expect(result).toBeGreaterThan(num1);
	})

});