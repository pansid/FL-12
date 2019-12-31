function countNumbers (str) {
	function makeNumber () {
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
	let makeNumb = makeNumber();
	let counter ={};
	if (makeNumb === "''") {
		return counter;
	}
	let arr = [];
	const k = 9;
	for (let i = 0; i <= k; i++) {
		arr[i] = 0;
	}
	let m = makeNumb.length;
	for (let i = 0; i <= (m - 1); i++) {
		let p = makeNumb.charAt(i);
		arr[p] = arr[p] + 1;
	}
	for (let i = 0; i <= k; i++) {
		if (arr[i] !== 0) {
			let key = i;
			counter[key] = arr[i];
		}
	}
	return counter;
}
console.log(countNumbers());