window.pint = (function () {
	'use strict';

	var _quantity = 0; // Fl. oz

	function fill() {
		_quantity = 20;
	}

	function consume(quantityToConsume) {
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
