alert("Enter 3 numbers for triangle sides length.");
var k = 0;
var m =0;
var a = prompt("Enter number  a:");
if (a <= 0) {
	k = 1;
	alert ("A triangle must have 3 sides with a positive definite length.");
} else if (a/a !== 1) {
	m =1;	
	alert("Input values should be ONLY numbers.");		
}	
var b = prompt("Enter number  b:");
if (b <= 0) {
	k = 1;
	alert ("A triangle must have 3 sides with a positive definite length.")
} else if (b/b !== 1) {
	m =1;	
	alert("Input values should be ONLY numbers.");		
}	
var c = prompt("Enter number  c:");
if (c <= 0) {
	k = 1;
	alert ("A triangle must have 3 sides with a positive definite length.")
} else if (c/c !== 1) {
	m =1;
	alert("Input values should be ONLY numbers.");			
}
var n = 0;
if (k === 0) {
	if (m === 0) {
		if ((a/c + b/c) > 1)  {
			n++;
		}	
		if  ((b/a + c/a) > 1){
			n++;
		}
		if ((a/b + c/b) > 1) {
			n++;
		}	
	}
}
var p = 0;
if (n < 3) {
	alert("Triangle doesn’t exist");
	p = 2;
}
if (n === 3) {
	if (a === b) {
		p++;
	}
	if (a === c) {
		p++;
	}
	if (b === c) {
		p++;
	}
}
if (p === 3) {
	console.log('Equilateral triangle');
}
if (p === 1) {
	console.log('Isosceles triangle');
}
if (p === 0) {
	console.log('Scalene triangle');
}
if (p === 2) {
	console.log('Triangle doesn’t exist');
}




