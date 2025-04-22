const grades = [3, 12, 60, 12, 15];
// i++ equals  i = i + 1

/* 
for i from 0 to N step 1 DO

endFor

*/
let max = grades[0];
for (let i = 1; i < grades.length; i++) {
	if (grades[i] > max) {
		max = grades[i];
	}
}

console.log('maximum is ', max);

/*  */
const maximum = Math.max(...grades);
const minimum = Math.min(...grades);
console.log('maximum', maximum, 'minimum', minimum);
