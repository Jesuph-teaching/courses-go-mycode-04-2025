const presentStudents = ['Chouaib', 'Assia', 'Farouk'];
const absentStudents = ['Leila', 'Larbi', 'Imene'];
const youngStudents = ['Reslan', 'Malik', 'Maria', 'Khalid'];
//const students = presentStudents.concat(absentStudents).concat(youngStudents);
const students = [...presentStudents, ...absentStudents, ...youngStudents];

console.log(students);

const biggerStudents = students.map((text) => {
	text.toUpperCase();
});
console.log(biggerStudents);

const newStudents = students.filter(function (value) {
	return value[0] === 'L' || value[0] === 'M';
});
console.log(newStudents);
