function getMin () {
	let i = 1;
	let minIndex = 0;
	while (i >= 0) {
		if ((arguments[i] - arguments[i]) !== 0) {
			break;
		} else if (arguments[i] < arguments[minIndex]) {
			minIndex = i;
		} 
		i++;
	}
	return arguments[minIndex];
}
console.log(getMin());
