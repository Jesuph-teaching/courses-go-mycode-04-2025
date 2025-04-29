const favFood = ['Mathaoum', 'Chtitha', 'Pizza', 'Natcho', 'Taco'];
const hatedFood = ['Rechta', 'T3am bl lban', 'macaron', 'cheflour', 'gratin'];

const foods = [...favFood, ...hatedFood];
function getFoodLevel(values) {
	const list = [];
	let level = 10;
	for (const f of values) {
		list.push({
			name: f,
			level: level,
		});
		level--;
	}
	return list;
}

console.log(getFoodLevel(foods));
