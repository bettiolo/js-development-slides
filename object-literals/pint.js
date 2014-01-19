// this is an IIFE,
(function () {
	'use strict';

	window.pint = {
		quantity: 20, // Fl. oz
		consume: function (quantityToConsume) {
			if (this.quantity <= 0) {
				return;
			}
			if (this.quantity > quantityToConsume) {
				this.quantity -= quantityToConsume;
			} else {
				this.quantity = 0;
			}
		},
		drink: function () {
			this.consume(1);
		},
		quaff: function () {
			this.consume(4);
		},
		downInOne: function () {
			this.consume(this.quantity);
		}
	};

})();
