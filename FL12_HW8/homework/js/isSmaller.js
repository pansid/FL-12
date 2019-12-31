function isSmaller (a, b) {
	function isBigger () {
		if (a > b) {
			return true;
		}else {
			return false;
		}
	}
	if (!isBigger()) {
		return true;
	} else {
		return false;
	}
}
console.log(isSmaller());
