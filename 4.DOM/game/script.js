/* generate a random number between min and max [0,255] */
function getRandomNumber(min = 0, max = 255) {
	return Math.floor(Math.random() * (max - min)) + min;
}
/* generate a random color using getRandomNumber 
to generate every number for r g b.
example : rgb( 230, 43, 54)
*/
function newColor() {
	//return 'rgb('+getRandomNumber()+','+getRandomNumber()+','+getRandomNumber()+')'
	return `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
}
/* getting 6 new colors */
const suggestions = [
	newColor(),
	newColor(),
	newColor(),
	newColor(),
	newColor(),
	newColor(),
];
/* choose a color to pick [0,5] example 3 */
const indexOfColorToSuggest = getRandomNumber(0, 5);
/* the color to guess */
const chosenColor = suggestions[indexOfColorToSuggest];
/* Getting the display  */
const display = document.querySelector('#display');
/* changing the color of the display with the chosen color */
//display.style.backgroundColor = chosenColor;
display.textContent = chosenColor;
/* select notification */
const notification = document.querySelector('.notification');
/* select the container of the suggestion */
const suggestionsElement = document.querySelector('.suggestions');

for (const color of suggestions) {
	// create li ( <li></li> )
	const li = document.createElement('li');
	// modify the text of the li to the new color ( <li>rgb(32,45,13)</li> )
	//li.textContent = color;
	li.style.backgroundColor = color;
	// adding class suggestion to li  ( <li class="suggestion">rgb(32,45,13)</li> )
	li.classList.add('suggestion');
	// adding suggestions to suggestions container <ul> ... <li ...>
	suggestionsElement.appendChild(li);
	// adding an action to the li
	li.onclick = function () {
		// show the notification
		notification.classList.remove('hide');

		if (chosenColor === color) {
			notification.textContent = 'You have won';
		} else {
			notification.textContent = 'guess another one';
		}
	};
}
