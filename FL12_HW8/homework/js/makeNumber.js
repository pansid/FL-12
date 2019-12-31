function makeNumber (str) {
	let stringNumber = '';
	let len = str.length;
	let n = 0;
	for (let i = 0; i < len; i++) {
		let p = str.charAt(i);
		if ((p - p) === 0) {
			stringNumber = stringNumber + p;
			n++;
		}
	}
	if (n === 0) {
		stringNumber = "''";
		return stringNumber;
	} else {
		return stringNumber;
	}
}
console.log(makeNumber());

