function outer() {
	'use strict';
	var outerVariable = 10;

	function inner() {
		outerVariable++;
		var innerVariable = 20;
		console.log('Outer Variable from Inner: ' + outerVariable);
		console.log('Inner Variable from Inner: ' + innerVariable);
	}
	console.log('Outer Variable from Outer: ' + outerVariable);
	console.log('Inner Variable from Outer: ' + (typeof innerVariable));
	return inner;
}
var innerCopy1 = outer();
var innerCopy2 = outer();
// ... later
innerCopy2();
innerCopy2();
innerCopy1();
