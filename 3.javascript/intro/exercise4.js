let val1 = Number(prompt('Please enter the val1'));
let val2 = Number(prompt('Please enter the val2'));
let val3 = Number(prompt('Please enter the val3'));
// max of 3
let max = val1;
let order = 'val1';

if (val2 > max) {
	max = val2;
	order = 'val2';
}

if (val3 > max) {
	max = val3;
	order = 'val3';
}

alert('the maximum number is: ' + max + ' ' + order);
