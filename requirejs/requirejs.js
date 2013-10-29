define('glass', [], funcition () {
	function Glass(capacity) {
		// ...
	}
	return Glass;
});

define('pint', [ 'glass' ], function (Glass) {
	function Pint() {
		Glass.call(this, 20);
		this.quantity = 20;
	}
	Pint.prototype = Object.create(Glass.prototype);
	Pint.prototype.constructor = Pint;
	return Pint;
});

require('pint', function (Pint)) {
	// do something with Pint
};