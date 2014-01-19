window.Pub = (function(Pub) {
  'use strict';
  var Glass = function(quantity) {
    this._quantity = quantity;
  };
  Glass = ($traceurRuntime.createClass)(Glass, {
    _consume: function(quantityToConsume) {
      if (this._quantity <= 0) {
        return;
      }
      if (this._quantity > quantityToConsume) {
        this._quantity -= quantityToConsume;
      } else {
        this._quantity = 0;
      }
    },
    drink: function() {
      this._consume(1);
    },
    quaff: function() {
      this._consume(4);
    },
    downInOne: function() {
      this._consume(this._quantity);
    },
    getQuantity: function() {
      return this._quantity;
    }
  }, {});
  var Pint = function() {
    $traceurRuntime.superCall(this, $Pint.prototype, "constructor", [20]);
  };
  var $Pint = ($traceurRuntime.createClass)(Pint, {}, {}, Glass);
  Pub.Pint = Pint;
  var HalfPint = function() {
    $traceurRuntime.superCall(this, $HalfPint.prototype, "constructor", [10]);
  };
  var $HalfPint = ($traceurRuntime.createClass)(HalfPint, {}, {}, Glass);
  Pub.HalfPint = HalfPint;
  return Pub;
}(window.Pub || {}));
