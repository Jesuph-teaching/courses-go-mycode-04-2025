const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const operations = ['+', '-', '/', '*'];
const acceptable = /^[0-9.\+\-*\/\(\)]+$/;

let calculation = 'console.log("hello chouaib")';
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const value = button.getAttribute('data-calc');
		const toDisplay = button.textContent;
		if (value === 'R') {
			if (
				display.textContent === 'Error' ||
				display.textContent === 'Infinity'
			) {
				display.textContent = '0';
				calculation = 0;
			}
			calculation = calculation.substring(0, calculation.length - 1);
			display.textContent = display.textContent.substring(
				0,
				display.textContent.length - 1
			);
			if (display.textContent === '') {
				display.textContent = '0';
				calculation = 0;
			}
		} else if (value === '=') {
			if (acceptable.test(calculation)) {
				try {
					calculation = eval(calculation);
					display.textContent = calculation;
				} catch (err) {
					console.log(err);
					display.textContent = 'Error';
				}
			}
		} else {
			if (display.textContent === '0') {
				if (value === '0' || operations.includes(value)) {
					return;
				} else if (value === '.') {
					display.textContent += toDisplay;
					calculation += value;
				} else {
					display.textContent = toDisplay;
					calculation = value;
				}
			} else {
				display.textContent += toDisplay;
				calculation += value;
			}
		}
	});
});
