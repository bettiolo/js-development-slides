window.pint = (function () {
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

	fill(); // some behaviour

	// we return an object literal that acts as a closure
	// after returning, the stack-frame is not destroyed (like in C)
	// a copy of the outer function is captured
	return {
		drink: function () {
			consume(1);
		},
		quaff: function () {
			consume(4);
		},
		downInOne: function () {
			consume(_quantity);
		},
		getQuantity: function () {
			return _quantity;
		},
		refill: function () {
			fill();
		}
	};

})();
