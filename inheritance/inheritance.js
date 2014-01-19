// glass.js
window.Pub = (function (Pub) {
	'use strict';

	var Glass = function (quantity) { // Base class constructor
		this._quantity = quantity; // Private by convention
	};

	// Private by convention
	Glass.prototype._consume = function (quantityToConsume) {
		if (this._quantity <= 0) {
			return;
		}
		if (this._quantity > quantityToConsume) {
			this._quantity -= quantityToConsume;
		} else {
			this._quantity = 0;
		}
	};

	Glass.prototype.drink = function () {
		this._consume(1);
	};

	Glass.prototype.quaff = function () {
		this._consume(4);
	};

	Glass.prototype.downInOne = function () {
		this._consume(this._quantity);
	};

	Glass.prototype.getQuantity = function () {
		return this._quantity;
	};

	Pub.Glass = Glass; // Populate the namespace
	return Pub;

}(window.Pub || {}));

// pint.js
window.Pub = (function (Pub) {
	'use strict';

	// The inheriting class constructor
	function Pint() {
		// Call the base class constructor
		Pub.Glass.call(this, 20);
	}

	// Inherit Glass
	Pint.prototype = Object.create(Pub.Glass.prototype);
	// Correct the constructor pointer because it points to Glass
	Pint.prototype.constructor = Pint;

	Pub.Pint = Pint;
	return Pub;

}(window.Pub || {}));

// halfPint.js
window.Pub = (function (Pub) {
	'use strict';

	function HalfPint() {
		Pub.Glass.call(this, 10);
	}

	HalfPint.prototype = Object.create(Pub.Glass.prototype);
	HalfPint.prototype.constructor = HalfPint;

	Pub.HalfPint = HalfPint;
	return Pub;

}(window.Pub || {}));