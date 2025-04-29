const students = [
	{
		name: 'Larbi',
		age: 21,
		sayHello() {
			console.log('Hello');
		},
	},
	{
		name: 'Farouk',
		age: 20,
		sayHello() {
			console.log('Hello');
		},
	},
	{
		name: 'Imene',
		age: 26,
	},
	{
		name: 'Chouaib',
		age: 20,
	},
	{
		name: 'Assia',
		age: 29,
	},
];
/* const student1 = students[0];
const student2 = students[1];
console.log(student1, student2);
 */
let [student1, student2, student3 = { name: 'Leila', age: 36 }] = students;
console.log(student1, student2, student3);
student1.sayHello();
// for switching
[student2, student3, student1] = [student1, student2, student3];

console.log(student1, student2, student3);
// jumping over unnecessary values
let [s1, s2, , , s3] = students;
console.log(s1, s2, s3);

let [x1, x2, x3, ...restStudent] = students;
console.log(x1, x2, x3, restStudent);

console.log(
	students.filter(function (student, i) {
		return student.age > 20;
	})
);
