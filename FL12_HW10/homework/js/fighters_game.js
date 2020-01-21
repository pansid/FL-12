function Fighter (obj) {

	const maxHP = obj.hp;
	obj.wins = 0;
	obj.losses = 0;

	return {

		getName: function () {
			return obj.name;
		},
			
		getDamage: function () {
			return obj.damage;
		},

		getStrength: function () {
			return obj.strength;
		},

		getAgility: function () {
			return obj.agility;
		},

		getHealth: function () {
			return obj.hp;
		},

		attack: function (defender) {
			let hundred = 100;
			let probabilityAttack = defender.getStrength() + defender.getAgility();
			let successAttack = Math.random() * hundred - probabilityAttack;
			if (successAttack > 0) {
				defender.dealDamage(obj.damage);
				return console.log(obj.name + ' makes ' + obj.damage + ' damage to ' + defender.getName());
			} else {
				return console.log(obj.name + ' attack missed');
			}
		},

		logCombatHistory: function () {
			return console.log('Name: ' + obj.name + ', ' + 'Wins: ' + obj.wins + ', ' + 'Losses: ' + obj.losses);
		},

		heal: function (arg) {
			obj.hp = obj.hp + arg;
			if (obj.hp > maxHP) {
				obj.hp = maxHP;
			}
			if (obj.hp < 0) {
				obj.hp = 0;
			}
		},

		dealDamage: function (arg) {
			obj.hp = obj.hp - arg;
			if (obj.hp < 0) {
				obj.hp = 0;
			}
			return obj.hp;
		},

		addWin: function () {
			obj.wins ++;
		},

		addLoss: function () {
			obj.losses ++;
		}
	}	
}

function battle (fighter1, fighter2) {
	
	if (fighter1.getHealth() === 0) {
		return console.log(fighter1.getName() + ` is dead and can't fight.`);
	}

	if (fighter2.getHealth() === 0) {
		return console.log(fighter2.getName() + ` is dead and can't fight.`);
	}

	let n = 1;
	let two = 2;
	let minusOne = -1;

	while (n > 0) {
		
		if (n % two !== 0) {
			fighter1.attack(fighter2);
			if (fighter2.getHealth() > 0) {
				n++;
			} else {
				n = 0;
				break;
			}
		} else {
			fighter2.attack(fighter1);
			if (fighter1.getHealth() > 0) {
				n++;
			} else {
				n = minusOne;
				break;
			}
		}
	}

	if (n === 0) {
		fighter1.addWin();
		fighter2.addLoss();
		return console.log(fighter1.getName() + ' has won!');
	} else {
		fighter2.addWin();
		fighter1.addLoss();
		return console.log(fighter2.getName() + ' has won!');
	}
}