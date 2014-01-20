// Pub is our namespace
window.Pub = (function (Pub) {
	'use strict';

	function Pint() { // Constructor
		this._quantity = 20; // private by convention
	}

	// private by convention
	Pint.prototype._consume = function (quantityToConsume) {
		if (this._quantity <= 0) {
			return;
		}
		if (this._quantity > quantityToConsume) {
			this._quantity -= quantityToConsume;
		} else {
			this._quantity = 0;
		}
	};

	Pint.prototype.drink = function () {
		this._consume(1);
	};

	Pint.prototype.quaff = function () {
		this._consume(4);
	};

	Pint.prototype.downInOne = function () {
		this._consume(this._quantity);
	};

	Pint.prototype.getQuantity = function () {
		return this._quantity;
	};

	Pub.Pint = Pint;
	return Pub;

}(window.Pub || {}));