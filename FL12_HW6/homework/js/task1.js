alert("Enter 3 numbers.");
var x = 1;
var a = prompt("Enter number  a:");
if (a === "0") {
	x++;
} else if (a/a !== 1) {
	alert("Invalid input data");
	console.log("Invalid input data");
	x = 0;	
}	
var b = prompt("Enter number  b:");
if (b === "0") {
	x++;
} else if (b/b !== 1) {
	alert("Invalid input data");
	console.log("Invalid input data");
	x = 0;
}
var c = prompt("Enter number  c:");
if (c === "0") {
	x++;
} else if (c/c !== 1) {
	alert("Invalid input data");
	console.log("Invalid input data");
	x = 0;
}
var x1, x2, d;
var k = 0;
if (a === "0") {
	if (b === "0") {
		if (x === 3) {
			x = 0;
		}
	}
}
if (a === "0") {
	x1 = x2 = (-1)*(c/b);
} else {
	d = b*b - 4*a*c;
	k = 1;
}
if ( k === 1) {
	if (d >= 0) {
		x1 = (-b + Math.sqrt(d))/2*a;
		x2 = (-b - Math.sqrt(d))/2*a;
	} else {
		x = 0;
	}
}
if (x === 4) {
	console.log("x1 = x2 = any value");
}
if (x === 0) {
	console.log("no solution");
} else {
	console.log("x1 = " + x1);
	console.log("x2 = " + x2);
}

