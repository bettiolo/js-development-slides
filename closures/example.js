function outer() {
	'use strict';
	var outerVariable = 10;

	function inner() {
		var innerVariable = 20;
		console.log('Outer Variable from Inner: ' + outerVariable);
		console.log('Inner Variable from Inner: ' + innerVariable);
	}
	console.log('Outer Variable from Outer: ' + outerVariable);
	console.log('Inner Variable from Outer: ' + (typeof innerVariable));
	return inner;
}
var inner = outer();
// ... later
inner();