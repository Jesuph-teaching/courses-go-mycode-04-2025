const movieCharacters1 = ['indiana jones', 'neo', 'james bond', 'harry potter', 'tony stark'];
const movieCharacters2 = ['luke skywalker', 'darth vader', 'jack sparrow', 'frodo baggins', 'black panther'];

const movieCharacters = movieCharacters1.concat(movieCharacters2);

console.log(movieCharacters1);
console.log(movieCharacters2);
console.log(movieCharacters);

const slicedCharacters = movieCharacters.slice(3, 7);

console.log(slicedCharacters, movieCharacters);

const takenOf = movieCharacters.splice(2, 0, 'Tebboun');

console.log(takenOf, movieCharacters);

const grades = [
	[12, [17, 23]], // math
	[15, 19], // physic
];

console.log(grades.flat(2));
