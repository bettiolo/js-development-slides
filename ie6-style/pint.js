var capacity = 20; // Fl. oz.
var quantity = 20; // Fl. oz.

function consume (consumedQuantity) {
	if (quantity > 0) {
		quantity -= consumedQuantity;
	}
}

function drink() {
	consume(1);
}

function quaff() {
	consume(4);
}

function downInOne() {
	consume(quantity);
}