function convert () {
	let arr = [];
	let n = arguments.length - 1;
	for (let i = 0; i <= n; i++) {
		if (typeof arguments[i] === 'number') {
			arr[i] = arguments[i] + '';                
		} else {
			arr[i] = parseInt(arguments[i]);
		}
	}
	return console.log(arr);
}


function executeforEach (arr, callback) {
	let n = arr.length - 1;
	for (let i = 0; i <= n; i++) {
		arr[i] = callback(arr[i]);
	}
}

function doubleElement (el) {
	let m = 2;
	console.log(el * m);
}


function mapArray (arr, callback) {
	executeforEach(arr, callback);
	console.log(arr);
}

function plusThree (el) {
	let m = 3;
	if (typeof el === 'number') {
		return el + m;
	} else {
		el = parseInt(el);
		return el + m;
	}
}


function filterArray (arr, callback) {
	executeforEach(arr, callback);
	let arr1 = [];
	let n = arr.length - 1;
	for (let i = 0; i <= n; i++) {
		if (arr[i] !== undefined) {
			arr1.push(arr[i]);
		}
	}
	console.log(arr1);
}

function filterOdd (el) {
	let m = 2;
	if (el % m === 0) {
		return el;
	} 
}


function flipOver (str) {
	let n = str.length - 1;
	let str1 = '';
	for (let i = n; i >= 0; i--) {
		str1 = str1 + str[i];
	}
	return console.log(str1);
}


function makeListFromRange (arr) {
	let n = arr[1] - arr[0];
	let arr1 = [];
	for (let i = 0; i <= n; i++) {
		arr1.push(arr[0] + i)
	}
	return console.log(arr1);
}


const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 },
  { name: 'jack', age: 18 }
];

function getArrayOfKeys (arr, key) {
	let arr1 = [];
	let n = arr.length - 1;
	for (let i = 0; i <= n; i++) {
		arr1.push(arr[i][key]);
	}
	return console.log(arr1);
}


function substitute (arr) {
	let arr1 = [];
	let n = arr.length - 1;
	for (let i = 0; i <= n; i++) {
		arr1.push(lessThirty(arr[i]));
	}
	console.log(arr1);
}

function lessThirty (el) {
	let m = 30;
	if (el >= m) {
		return el;
	} else {
		return '*';
	}
}


const y = 2019;
const d = 2;
const date = new Date(y, 0, d);
function getPastDay (date, n) {
	let year = date.getFullYear();
	let month = date.getMonth();
	let dayNumber = date.getDate();
	let pastDate = new Date(year, month, dayNumber);
	pastDate.setDate(pastDate.getDate() - n);
	dayNumber = pastDate.getDate();
	const options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	};
	return console.log(dayNumber + ', ' + '(' + pastDate.toLocaleString('en-GB', options) + ')');
}


function formatDate (date) {
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let dayNumber = date.getDate();
	const options = {
		hour: 'numeric',
		minute: 'numeric'
	};
	return console.log('"' + year + '/' + month + '/' + dayNumber + ' ' + date.toLocaleString('ru', options) + '"');
}














