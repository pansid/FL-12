function addOne (x) {
	return x + 1;
}
function pipe (x) {
	x = arguments[0];
	console.log(x);
	let lenArg = arguments.length;
	for (let i = 1; i < lenArg; i++) {
		x = addOne(x);
		console.log(x);
	}
	return x;
}
console.log(pipe());

	
	
	
	