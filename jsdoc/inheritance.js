var Glass = function () {
	'use strict';

	/**
	 * @constructor
	 * @param {number} capacity The capacity of the glass in oz.
	 * @abstract
	 */
	function Glass(capacity) {
		this.quantity = 0; // Instance property
		this.capacity = capacity; // Instance property
	}

	// Ensure the constructor is correct
	Glass.prototype.constructor = Glass;

	/** @param {number} consumedQuantity How much has been consumed in oz. */
	Glass.prototype.consume = function (consumedQuantity) {
		if (this.quantity > 0) {
			this.quantity -= consumedQuantity;
		}
	};

	Glass.prototype.drink = function () {
		this.consume(1);
	};

	Glass.prototype.quaff =	function () {
		this.consume(4);
	};

	Glass.prototype.downInOne = function () {
		this.consume(this.quantity);
	};

	// Return the constructor
	return Glass;

}(); // Immediately-Invoked Function Expression (IIFE)

var Pint = function () {
	'use strict';

	/**
	 * @constructor
	 * @extends {Glass}
	 */
	function Pint() {
		Glass.call(this, 20); // Pint size in fl. oz.
		this.quantity = 20; // Pint size in fl. oz.
	}

	// Inherit the base class
	Pint.prototype = Object.create(Glass.prototype);

	// Ensure the constructor is correct
	Pint.prototype.constructor = Pint;

	return Pint;
}();

var p = new Pint();
// p.capacity; // intellisense works with jsdoc but does not work without
p.consume(); // Gives parameter intellisense

var HalfPint = function () {
	'use strict';

	/**
	 * @constructor
	 * @extends {Glass}
	 */
	function HalfPint() {
		Glass.call(this, 10); // Half Pint size in fl. oz.
		this.quantity = 10; // Half Pint size in fl. oz.
	}

	HalfPint.prototype = Object.create(Glass.prototype);

	HalfPint.prototype.constructor = HalfPint;

	return HalfPint;
}();