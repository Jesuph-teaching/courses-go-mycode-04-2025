const student = {
	name: 'Leila',
	age: 20,
	langues: ['HTML', 'CSS', 'JS'],
	'done-studying': {
		html: true,
		css: true,
		js: false,
	},
	laptop: null,
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

for (const key in student) {
	if (typeof student[key] === 'object' && !Array.isArray(student[key])) {
		console.log(key, student[key]);
	}
}
