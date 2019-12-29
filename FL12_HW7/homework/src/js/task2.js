let myGlobal = {};
let prize;
let maxbet;
let game = confirm('Do you want to play a game?');
myGlobal.game = game;
myGlobal.prize = prize;
myGlobal.maxbet = maxbet;
if (myGlobal.game) {
	myGlobal.prize = 0;
	myGlobal.maxbet = 100;
	myGlobal.game = 1;
} else {
	myGlobal.game = 0;
	alert('You did not become a billionaire, but can.');
}
while (myGlobal.game !== 0) {
	let magic_number = {};
	let nine = 9;
	let four = 4;
	let two = 2;
	let three = 3;
	let hundred = 100;
	magic_number.nine = nine;
	magic_number.four = four;
	magic_number.two = two;
	magic_number.three = three;
	magic_number.hundred = hundred;
	let maxNumber = magic_number.nine + magic_number.four * (myGlobal.game - 1);
	let number = Math.floor(Math.random() * maxNumber);
	let bet = myGlobal.maxbet * magic_number.two;
	let win;
	let continuation;
	let again;
	for (let i = 0; i < magic_number.three; i++) {
		bet = bet/magic_number.two;
		let guess = prompt('Choose a roulette pocket number from 0 to ' + (maxNumber - 1) + 
			'\nAttempts left:' + (magic_number.three - i) + 
			'\nTotal prize:' + myGlobal.prize + '$' + 
			'\nPossible prize on current attempt:' + bet + '$');
		if (String(guess) === String(number)) {
			myGlobal.prize = myGlobal.prize + bet;
			win = true;
			break;
		} else {
			win = false;
		}	
	}

	if (win) {
		continuation = confirm('Congratulation, you won! Your prize is: ' + myGlobal.prize + '$.' + 
			'\nDo you want to continue?');
	} else {
		continuation = false;
	}
	if (continuation) {
		myGlobal.game++;
		myGlobal.maxbet = myGlobal.maxbet * magic_number.two;
	} else {
		alert('Thank you for your participation. Your prize is: ' + myGlobal.prize + '$');
		again = confirm('Do you want to play again?');
		myGlobal.prize = 0;
		myGlobal.maxbet = magic_number.hundred;
		myGlobal.game = 0;
	}
	if (again) {
		myGlobal.game = 1;
	}

}