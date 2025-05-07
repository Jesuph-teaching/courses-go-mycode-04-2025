const emailInput = document.querySelector('#email');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

emailInput.onkeyup = function () {
	const value = emailInput.value;
	const emailField = emailInput.parentElement;
	const emailMessage = emailInput.nextElementSibling;
	emailField.classList.add('wrong');
	emailField.classList.remove('correct');
	if (value.length <= 6) {
		emailMessage.innerHTML =
			'<span class="solar--info-circle-bold"></span> email needs to be larger than 6 letters';
	} else if (!value.includes('@')) {
		emailMessage.innerHTML = 'email must have @';
	} else if (!emailRegex.test(value)) {
		emailMessage.innerHTML = 'email is invalid';
	} else {
		emailField.classList.add('correct');
		emailField.classList.remove('wrong');
		emailMessage.innerHTML = '';
	}
};
const fullNameInput = document.querySelector('#fullName');

fullNameInput.onkeyup = function () {
	const value = fullNameInput.value;
	const fullNameField = fullNameInput.parentElement;
	const fullNameMessage = fullNameInput.nextElementSibling;
	fullNameField.classList.add('wrong');
	fullNameField.classList.remove('correct');
	if (value.length <= 3) {
		fullNameMessage.innerHTML =
			'<span class="solar--info-circle-bold"></span> Full name needs to be larger than 3 letters';
	} else {
		const split = value.split(' ').filter((elm) => elm !== '');
		if (split.length < 2) {
			fullNameMessage.innerHTML =
				'<span class="solar--info-circle-bold"></span> Full name needs to have two words at least';
		} else {
			fullNameField.classList.add('correct');
			fullNameField.classList.remove('wrong');
			fullNameMessage.innerHTML = '';
		}
	}
};

const phoneInput = document.querySelector('#phone');
const phoneRegex = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;

phoneInput.onkeyup = function () {
	const value = phoneInput.value;
	const phoneField = phoneInput.parentElement;
	const phoneMessage = phoneInput.nextElementSibling;
	phoneField.classList.add('wrong');
	phoneField.classList.remove('correct');
	if (value.length <= 9) {
		phoneMessage.innerHTML =
			'<span class="solar--info-circle-bold"></span> phone needs to be larger than 9 letters';
	} else if (!phoneRegex.test(value)) {
		phoneMessage.innerHTML = 'Phone is invalid';
	} else {
		phoneField.classList.add('correct');
		phoneField.classList.remove('wrong');
		phoneMessage.innerHTML = '';
	}
};

const subjectInput = document.querySelector('#subject');

subjectInput.onchange = function () {
	const value = subjectInput.value;
	const subjectField = subjectInput.parentElement;
	const subjectMessage = subjectInput.nextElementSibling;
	subjectField.classList.add('wrong');
	subjectField.classList.remove('correct');
	if (value === '') {
		subjectMessage.innerHTML =
			'<span class="solar--info-circle-bold"></span> You must select a correct subject';
	} else {
		subjectField.classList.add('correct');
		subjectField.classList.remove('wrong');
		subjectMessage.innerHTML = '';
	}
};

const messageInput = document.querySelector('#message');

messageInput.onkeydown = function (event) {
	const value = messageInput.value;
	const messageField = messageInput.parentElement;
	const messageMessage = messageInput.nextElementSibling;
	messageField.classList.add('wrong');
	messageField.classList.remove('correct');
	if (event.key !== 'Backspace' && value.length > 350) {
		event.preventDefault();
	}
	if (value.length <= 10) {
		messageMessage.innerHTML =
			'<span class="solar--info-circle-bold"></span> Message needs to be larger than 10 letters';
	} else {
		const split = value.split(' ').filter((elm) => elm !== '');
		if (split.length < 4) {
			messageMessage.innerHTML =
				'<span class="solar--info-circle-bold"></span> Message needs to have 4 words at least';
		} else if (value.length > 35) {
			messageMessage.innerHTML =
				'<span class="solar--info-circle-bold"></span> Message needs to be less than 350 letters';
		} else {
			messageField.classList.add('correct');
			messageField.classList.remove('wrong');
			messageMessage.innerHTML = '';
		}
	}
};
