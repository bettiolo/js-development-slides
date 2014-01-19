var quantity = 10; // Fl. oz.

function consume (quantityToConsume) {
	if (quantity <= 0) {
		return;
	}
	if (quantity > quantityToConsume) {
		quantity -= quantityToConsume;
	} else {
		quantity = 0;
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