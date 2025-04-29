const presentStudents = ['Chouaib', 'Assia', 'Farouk'];
const absentStudents = ['Leila', 'Larbi', 'Imene'];
const youngStudents = ['Reslan', 'Malik', 'Maria', 'Khalid'];
//const students = presentStudents.concat(absentStudents).concat(youngStudents);
const students = [...presentStudents, ...absentStudents, ...youngStudents];
console.log(students);
function max(a, b, c) {
	if (a > b && a > c) {
		return a;
	} else if (b > c) {
		return b;
	} else {
		return c;
	}
}

const ages = [24, 21, 27, 26, 28];

console.log(max(...ages));

function min(...values) {
	let min = Infinity;
	for (const x of values) {
		if (x < min) {
			min = x;
		}
	}
	return min;
}

console.log(min(...ages));
