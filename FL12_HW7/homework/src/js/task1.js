let myGlobal = {};
let password;
let changePassword;
let oldPassword;
let newPassword;
let repeatNewpassword;
let login = prompt('Enter your login');
myGlobal.login = login;
myGlobal.password = password;
myGlobal.changePassword = changePassword;
myGlobal.oldPassword = oldPassword;
myGlobal.newPassword = newPassword;
myGlobal.repeatNewpassword = repeatNewpassword;
if (!myGlobal.login) {
	alert('Canceled.');
	myGlobal.login = '';
}
if (myGlobal.login.length >= 1) {
	let magic_number = 5;
	if (myGlobal.login.length < magic_number) {
		alert(`I don't know any emails having name length less than 5 symbols`);
		myGlobal.login = '';
	}
}
if (myGlobal.login !== '') {
	if (myGlobal.login === 'user@gmail.com') {
		myGlobal.password = prompt('Enter a password');
	} else	if (myGlobal.login === 'admin@gmail.com') {
		myGlobal.password = prompt('Enter a password');
	} else {
		alert(`I don’t know you`);
		myGlobal.login = '';
	}
	if (myGlobal.login !== '') {
		if (!myGlobal.password) {
			alert('Canceled.');
			myGlobal.password = '';
		}
		if (myGlobal.password !== '') {
			if (myGlobal.login === 'user@gmail.com') {
				if (myGlobal.password !== 'UserPass') {
					alert('Wrong password');
					myGlobal.password = '';
				} else {
					myGlobal.changePassword = confirm('Do you want to change your password?');
				}
			}
			if (myGlobal.login === 'admin@gmail.com') {
				if (myGlobal.password !== 'AdminPass') {
					alert('Wrong password');
					myGlobal.password = '';
				} else {
					myGlobal.changePassword = confirm('Do you want to change your password?');
				}
			}
			if (myGlobal.password !== '') {
				if (myGlobal.changePassword) {
					myGlobal.oldPassword = prompt('Enter the old password');
				} else {
					alert('You have failed the change.');
					myGlobal.oldPassword = '';
				}
				if (myGlobal.oldPassword !== '') {
					if (!myGlobal.oldPassword) {
						alert('Canceled.');
						myGlobal.oldPassword = '';
					}
					if (myGlobal.oldPassword !== '') {
						if (myGlobal.oldPassword !== myGlobal.password) {
							alert('Wrong password');
							myGlobal.oldPassword = '';
						} else {
							myGlobal.newPassword = prompt('Enter a new password');
						}
						if (myGlobal.oldPassword !== '') {
							if (!myGlobal.newPassword) {
								alert('Canceled');
								myGlobal.newPassword = '';
							}
							if (myGlobal.newPassword !== '') {
								if (myGlobal.newPassword.length >= 1) {
									let magic_number = 6;
									if (myGlobal.newPassword.length < magic_number) {
										alert(`It’s too short password. Sorry.`);
										myGlobal.newPassword = '';
									} else {
										myGlobal.repeatNewpassword = prompt('Repeat new password');
									}
									if (myGlobal.newPassword !== '') {
										if (myGlobal.repeatNewpassword !== myGlobal.newPassword) {
											alert('You wrote the wrong password.');
										} else {
											alert('You have successfully changed your password.');
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}