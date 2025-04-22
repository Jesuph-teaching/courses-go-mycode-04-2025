const movieCharacters = [
	'indiana jones',
	'neo',
	'james bond',
	'harry potter',
	'tony stark',
	'luke skywalker',
	'darth vader',
	'jack sparrow',
	'frodo baggins',
	'neo',
	'black panther',
];
const arr = [3, 1, 4, 1, 5];
const sortedMovieCharacters = movieCharacters.sort();
const newArr = arr.sort();
newArr.reverse();
sortedMovieCharacters.reverse();
console.log(sortedMovieCharacters, newArr);
