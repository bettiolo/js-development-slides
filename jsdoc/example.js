window.Pub2 = (function (Pub) {
	'use strict';

	/**
	 * @constructor
	 * @param {number} quantity The quantity of liquid in the glass in fl. oz.
	 * @abstract
	 */
	var Glass = function (quantity) { // Base class constructor
		/** @private */
		this._quantity = quantity; // Private by convention
	};

	/**
	 * @param {number} quantityToConsume How much liquid to consumed in fl. oz.
	 * @private
	 */
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

	/** @returns {number} Quantity in fl. oz. */
	Glass.prototype.getQuantity = function () {
		return this._quantity;
	};

	/**
	 * @constructor
	 * @extends {Glass}
	 */
		// The inheriting class constructor
	function Pint() {
		// Call the base class constructor
		Glass.call(this, 20);
	}

	// Inherit Glass
	// Supported by Chrome: 5, Firefox 4.0, IE 9, Opera 11.60 and Safari 5
	// es5-shim for legacy support
	Pint.prototype = Object.create(Glass.prototype);
	// Correct the constructor pointer because it points to Glass
	Pint.prototype.constructor = Pint;

	Pub.Pint = Pint;

//	/**
//	 * @constructor
//	 * @extends {Glass}
//	 */
	function HalfPint() {
		Glass.call(this, 10);
	}

	HalfPint.prototype = Object.create(Glass.prototype);
	HalfPint.prototype.constructor = HalfPint;

	Pub.HalfPint = HalfPint;

	return Pub;

}(window.Pub2 || {}));