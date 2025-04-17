// how to write a message in the console
// equivalent of write in algorithm
console.log('Hello world');
console.log('hi back');

/* console.log(name);
var name = 'Youcef';
let age = 27;
console.log(age);
const gender = 'male';
console.log(name);
 */

const name = 'Youcef';
let age = 27;
let text = 'Teboun said : "fsdgsdgdsfg" ' + (age + 12);
let donWithSchool = true;
console.log(text);
let formattedText = `My name is ${name}, and i'm ${age} years  old, `;
if (donWithSchool) {
	formattedText += 'i finished school';
} else {
	formattedText = formattedText + "i didn't finish school";
}
console.log(formattedText);

let school;
console.log(school);

formattedText = null;
console.log(formattedText);

/* let x = 15;
x--; // x = x - 1;
x++; // x = x + 1;

x += 1; // x = x + 1;
console.log(x);
 */
