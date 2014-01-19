// Pub is our namespace
window.Pub = (function (Pub) {
	'use strict';

	var _quantity = 0; // private variable

	function fill() { // private method
		_quantity = 20;
	}

	function consume(quantityToConsume) { // private method
		if (_quantity <= 0) {
			return;
		}
		if (_quantity > quantityToConsume) {
			_quantity -= quantityToConsume;
		} else {
			_quantity = 0;
		}
	}

	function drink() {
		consume(1);
	}

	function quaff() {
		consume(4);
	}

	function downInOne() {
		consume(_quantity);
	}

	function getQuantity() {
		return _quantity;
	}

	fill(); // some behaviour

	// we return an object literal that acts as a closure.
	// after returning, the stack-frame is not destroyed (as opposed to C)
	// a copy of the outer function is captured.
	Pub.pint = {
		drink: drink,
		quaff: quaff,
		downInOne: downInOne,
		getQuantity: getQuantity,
		refill: fill
	};

	return Pub;
}(window.Pub || {}));
