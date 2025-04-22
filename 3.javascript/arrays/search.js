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
for (const i in movieCharacters) {
	console.log(i, movieCharacters[i]);
}

const userSearch = prompt('Please enter the character you are looking for');

const index = movieCharacters.indexOf(userSearch);
//const index = movieCharacters.lastIndexOf(userSearch);
const didFind = movieCharacters.includes(userSearch);

if (index >= 0) {
	alert(`We have found ${userSearch} ${index}`);
} else {
	alert(`We didn't find ${userSearch} ${index}`);
}
/* for (const character of movieCharacters) {
	if (character === userSearch) {
		console.log(`We have found ${userSearch}`);
		break;
	}
	console.log(`compared ${character} with ${userSearch}`);
}
 */
