window.Pub = (function (Pub) {
	'use strict';

	class Glass {
		constructor(quantity) {
			this._quantity = quantity;
		}

		_consume(quantityToConsume) {
			if (this._quantity <= 0) {
				return;
			}
			if (this._quantity > quantityToConsume) {
				this._quantity -= quantityToConsume;
			} else {
				this._quantity = 0;
			}
		}


		drink() {
			this._consume(1);
		}

		quaff() {
			this._consume(4);
		}

		downInOne() {
			this._consume(this._quantity);
		}

		getQuantity() {
			return this._quantity;
		}

	}

	class Pint extends Glass {
		constructor() {
			super(20);
		}
	}

	Pub.Pint = Pint;

	class HalfPint extends Glass {
		constructor() {
			super(10);
		}
	}

	Pub.HalfPint = HalfPint;

	return Pub;

}(window.Pub || {}));