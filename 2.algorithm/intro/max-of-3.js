var age1, age2, age3;

age1 = Number(prompt('enter age1'));
age2 = Number(prompt('enter age2'));
age3 = Number(prompt('enter age3'));

if (age1 > age2) {
	if (age1 > age3) {
		alert('the biggest number is age1');
	} else {
		alert('the biggest number is age3');
	}
} else if (age2 > age3) {
	alert('the biggest number is age2');
} else {
	alert('the biggest number is age3');
}
