const hidableElement = document.querySelector('#hidable');
console.log(hidableElement);
const title = document.querySelector('#big-text');
const button = document.querySelector('#show-hide');
button.onclick = function () {
	hidableElement.classList.toggle('hide');
	title.classList.toggle('done');
	/* if (doesHaveHide()) {
	} else {
		hidableElement.classList.add('hide');
} */
};

/* function doesHaveHide() {
    return hidableElement.classList.contains('hide');
} */
