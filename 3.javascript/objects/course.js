const student = {
	name: 'Leila',
	age: 20,
	langues: ['HTML', 'CSS', 'JS'],
	'done-studying': {
		html: true,
		css: true,
		js: false,
	},
	eating: function (food) {
		console.log(`${this.name} is eating ${food}`);
	},
	drinking: () => {
		// this doesn't work in arrow function
		console.log(`${this.name} is drinking`);
	},
	sleeping() {
		console.log(`${this.name} is sleeping`);
	},
};

console.log(student.name);
console.log(student['name']);

console.log(student.langues[0]);

console.log(student['done-studying'].html);

student['year'] = 2025;
// student.year = 2025;
console.log(student);

const student2 = new Object();
student2.name = 'Chouaib';
student2.age = 20;
student2.langues = ['HTML', 'CSS'];
//delete student2.age;
student2.age = undefined;
console.log(student2);

student.eating('cookies');
student.drinking();
student.sleeping();
