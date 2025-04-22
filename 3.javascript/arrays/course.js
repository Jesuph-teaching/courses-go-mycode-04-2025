let students = ['Youcef', 'Ali', 'Ahmed', 'Salah', 'Yassine'];

console.log(students);
console.log(students.length);

// access a specific element
console.log(students[0]);

/* let x;
console.log(x); */

// modify a specific element
students[0] = 'Chouaib';
students[2] = null;
students[4] = 43;
console.log(students.length);
// add at the end another element
students[5] = 'Farouk';

console.log(students.length);
// add at the end not knowing the size
students[students.length] = 'Hello'; // students[6] = 'Hello'
console.log(students);
console.log(students.length);

let empty = [];

console.log(empty, empty.length);

// arrays with const
const grades = [12, 14, 7, 13];

grades[0] = 11; // you can modify the content
// grades = 'hello'; // you cant modify the variable
console.log(grades);

// another way of declaring array
const myStudents = new Array(40); // avoid using one value
const myList = [40];
console.log(myStudents, myList);
