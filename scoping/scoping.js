function createPint() { // Constructor
	var capacity = 20; // Private
	var quantity = 20; // Private

	function consume (consumedQuantity) { // Private
		if (quantity > 0) {
			quantity -= consumedQuantity;
		}
	}

	return {
		getCapacity : function () {
			return capacity; // Read Only
		},
		getQuantity : function () {
			return quantity; // Read Only
		},
		drink : function () {
			consume(1);	
		},
		quaff :	function () {
			consume(4);
		},
		downInOne : function () {
			consume(quantity);
		}
	};
}

function createHalfPint() {
	var capacity = 10;
	var quantity = 10;

	function consume (consumedQuantity) {
		if (quantity > 0) {
			quantity -= consumedQuantity;
		}
	}

	return {
		getCapacity : function () {
			return capacity;
		},
		getQuantity : function () {
			return quantity;
		},
		drink : function () {
			consume(1);	
		},
		quaff :	function () {
			consume(4);
		},
		downInOne : function () {
			consume(quantity);
		}
	};
};