module Pub {
    export class Glass {
        private _quantity : number; // this is not really enforced

        constructor (quantity : number) {
            this._quantity = quantity;
        }

        private _consume(quantityToConsume : number) : void {
            if (this._quantity <= 0) {
                return;
            }
            if (this._quantity > quantityToConsume) {
                this._quantity -= quantityToConsume
            } else {
                this._quantity = 0
            }
        }

        public drink() : void {
            this._consume(1);
        }

        public quaff() : void {
            this._consume(4);
        }

        public downInOne() : void {
            this._consume(this._quantity);
        }

        public getQuantity() : number {
            return this._quantity;
        }
    }

    export class Pint extends Glass {
        constructor () {
            super(20);
        }
    }

    export class HalfPint extends Glass {
        constructor () {
            super(10);
        }
    }
}