const programmingLanguages = ['c', 'javascript', 'html', 'css', 'react'];

const p = programmingLanguages.map((elm) => elm.toUpperCase());
console.log(p);
// toLowerCase
//exo2
const words = ['car', 'hippopotamus', 'dog', 'elephant'];
// find the longest word using reducer
// reducer initialize ''
/* -----------------Chaining------------ */

const students = [16, 17, 19, 15, 20, 19];

const result = students
	.map((elm) => elm * 2)
	.filter((elm) => elm > 33)
	.map((elm) => elm + 1)
	.reduce((acc, elm) => acc + elm, 0)
	.toFixed(2);

console.log(result);

// 1- filter the one older than 16
// 2- add one year to students
// 3- sort the students
// 4- average of age
