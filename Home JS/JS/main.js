function calcSeconds() {
	function checkForLeapYear (year) {
		return year % 4 === 0;
	}
	let seconds;
	const year = prompt('Enter Year 4 digits');
	
	const isLeapYear = checkForLeapYear(year);
	
	if (isLeapYear) {
		seconds = 366 * 24 * 60 * 60;
	} else {
		seconds = 365 * 24 * 60 * 60;
	}
	alert (` ${year} has ${seconds} seconds`);
}
calcSeconds();