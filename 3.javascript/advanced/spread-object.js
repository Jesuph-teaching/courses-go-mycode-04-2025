const presentStudents = ['Chouaib', 'Assia', 'Farouk'];
const absentStudents = ['Leila', 'Larbi', 'Imene'];
const youngStudents = ['Reslan', 'Malik', 'Maria', 'Khalid'];

const students = [...presentStudents, ...absentStudents, ...youngStudents];

const teacher = {
	firstName: 'Youcef',
	lastName: 'Madadi',
	age: 27,
};
const duplicateTeacher = { ...teacher };
const updatedTeacher = { ...teacher, myStudents: students };

const assistant = {
	profession: 'front-end',
	...teacher,
	age: 26,
	firstName: 'Abdelhak',
};
console.log(teacher, updatedTeacher, assistant);
