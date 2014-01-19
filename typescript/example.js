var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Pub;
(function (Pub) {
    var Glass = (function () {
        function Glass(quantity) {
            this._quantity = quantity;
        }
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
        return Glass;
    })();
    Pub.Glass = Glass;

    var Pint = (function (_super) {
        __extends(Pint, _super);
        function Pint() {
            _super.call(this, 20);
        }
        return Pint;
    })(Glass);
    Pub.Pint = Pint;

    var HalfPint = (function (_super) {
        __extends(HalfPint, _super);
        function HalfPint() {
            _super.call(this, 10);
        }
        return HalfPint;
    })(Glass);
    Pub.HalfPint = HalfPint;
})(Pub || (Pub = {}));
//# sourceMappingURL=example.js.map
