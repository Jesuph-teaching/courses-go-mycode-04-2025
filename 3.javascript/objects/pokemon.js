const pokemon1 = {
	name: 'Gengar',
	type: 'Ghost',
	hp: 324,
	moves: [
		{ name: 'Dream Eater', damage: 100 },
		{ name: 'Shadow Ball', damage: 80 },
	],
	isAlive() {
		return this.hp > 0;
	},
	getMove() {
		//
		if (Math.random() > 0.5) {
			return this.moves[0];
		} else {
			return this.moves[1];
		}
	},
};
const pokemon2 = {
	name: 'Lucario',
	type: 'Fight',
	hp: 344,
	moves: [
		{
			name: 'Aura sphere',
			damage: 60,
		},
		{
			name: 'sword dance',
			damage: 110,
		},
	],
	isAlive() {
		return this.hp > 0;
	},
	getMove() {
		if (Math.random() > 0.5) {
			return this.moves[0];
		} else {
			return this.moves[1];
		}
	},
};

function battle(p1, p2) {
	while (p1.isAlive() && p2.isAlive()) {
		const move1 = p1.getMove();
		const move2 = p2.getMove();
		p2.hp -= move1.damage;
		console.log(`pokemon ${p1.name} attacked ${p2.name} and dealt a damage of ${move1.damage}`);
		p1.hp -= move2.damage;
		console.log(`pokemon ${p2.name} attacked ${p1.name} and dealt a damage of ${move2.damage}`);
	}
	if (p1.isAlive()) {
		console.log(`pokemon ${p1.name} has won`);
	} else if (p2.isAlive()) {
		console.log(`pokemon ${p2.name} has won`);
	} else {
		console.log(`${p1.name} and ${p2.name} both died (draw)`);
	}
}

battle(pokemon1, pokemon2);
