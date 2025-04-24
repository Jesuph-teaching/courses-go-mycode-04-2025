// order of the parameters is the important thing
function calculateArea(width = 1, height = 1) {
	const area = width * height;
	return area;
}
const w = 9;
const h = 18;
console.log(calculateArea(h, w));

greeting();

// logger function
function greeting(name = 'Youcef') {
	console.log(`Hello ${name}`);
}
const student = 'Leila';
greeting(student);
greeting('Assia');
// anonymous
/* (function (haker) {
	console.log(`im anonymous ${haker}`);
})('youcef');
 */

console.log(calculateArea(2));

/* function updateName(name) {
	name = `Mrs. ${name}`;
	console.log('inside function', name);
}

updateName(student);
console.log('outside function', student); */

const square = function (num) {
	return num * num;
};

console.log(square(4));

function cube2(num) {
	return num * num * num;
}
const cube = (num) => {
	return num * num * num;
};

console.log(cube(4));
console.log(cube2(4));

const students = [16, 17, 19, 15, 20, 19];
// the order is always elm, index, array
function filterUnderAge(elm, index, array) {
	return elm < 18;
}

//const underAged = students.filter(filterUnderAge);
const underAged = students.filter((elm) => elm < 18);
const newAges = students.map((elm) => elm + 1);
console.log(underAged);
/* Reduce */
/* 
const acc = 0;
for (const elm of students) {
	acc += elm/students.length;
}
*/
const sum = students.reduce((acc, elm) => {
	return acc + elm;
}, 0);
console.log('sum', sum);

const average = students.reduce((acc, elm) => acc + elm / students.length, 0);
console.log('average', average);
