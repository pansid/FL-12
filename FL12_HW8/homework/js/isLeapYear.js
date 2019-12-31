function isLeapYear (date) {
	let resuult;
	let year;
	let t;
	if (arguments[0]/arguments[0] === 1) {
		if (date.length > 16) {
			return 'Invalid Date';
		} else {
			t = new Date (date);
			year = t.getFullYear();
			year = Number(year);
			if (year % 100 === 0) {
				if (year % 400 === 0) {
					resuult = year + ' is a leap year';
				} else {
					resuult = year + ' is not a leap year';
				}
				return resuult;
			}
			if (year % 4 === 0) {
				resuult = year + ' is a leap year';
			} else {
				resuult = year + ' is not a leap year';
			}
			return resuult;
		}
	} 
	if (date.length !== 19) {
		return 'Invalid Date';
	}
	year = date.slice(0, 4);
	year = Number(year);
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			resuult = year + ' is a leap year';
		} else {
			resuult = year + ' is not a leap year';
		}
		return resuult;
	}
	if (year % 4 === 0) {
		resuult = year + ' is a leap year';
	} else {
		resuult = year + ' is not a leap year';
	}
	return resuult;	
}
console.log(isLeapYear());



