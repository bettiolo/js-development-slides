// Pub is our namespace
window.Pub = (function (Pub) {
	'use strict';

	var pint = {}, // module
		_quantity = 0; // private variable

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

	fill();

	// the following functions capture a copy
	// of the outer function
	pint.drink = function () {
		consume(1);
	};
	pint.quaff = function () {
		consume(4);
	};
	pint.downInOne = function () {
		consume(_quantity);
	};
	pint.getQuantity = function () {
		return _quantity;
	};
	pint.refill = function () {
		fill();
	};

	Pub.pint = pint;
	return Pub;

}(window.Pub || {}));
