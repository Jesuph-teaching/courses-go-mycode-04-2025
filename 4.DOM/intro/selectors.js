console.log(document.body);
//console.dir(document.body); // gives the attributes and methods
const hour = new Date().getHours();
if (hour > 19 || hour < 6) {
	document.body.bgColor = 'rgb(12,32,43)';
	document.body.style.color = 'white';
	document.body.style.textAlign = 'center';
}
const title = document.getElementById('big-text');
console.log(title);
title.style.color = 'green';

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.fontSize = '12px';
	paragraphs[i].style.fontFamily = 'sans-serif';
}

const topParagraphs = document.getElementsByClassName('top-paragraph');
console.log(topParagraphs);
for (let i = 0; i < topParagraphs.length; i++) {
	topParagraphs[i].style.fontWeight = 700;
	topParagraphs[i].style.color = 'magenta';
}

const middle = document.querySelectorAll('.middle');
console.log(middle);

for (let i = 0; i < middle.length; i++) {
	middle[i].style.textAlign = 'center';
	middle[i].style.color = 'blue';
}
