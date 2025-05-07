const todoForm = document.querySelector('.input-form');
const todoInput = document.querySelector('#input-text');
const todoList = document.querySelector('.todo-list');
const remainingTodos = document.querySelector('#remaining');
const list = [];
function updateHappened() {
	const stringList = JSON.stringify(list.filter((elm) => elm != null));
	localStorage.setItem('list', stringList);
	remainingTodos.textContent = list.filter(
		(elm) => elm && !elm.checked
	).length;
}

function AddTodoElement(value, checked = false) {
	const element = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('name', 'done');
	if (checked) {
		checkbox.setAttribute('checked', true);
	}
	element.append(checkbox);
	const paragraph = document.createElement('p');
	// inner html fail (better to avoid when user is the one giving the value)
	paragraph.textContent = value;
	element.append(paragraph);
	const button = document.createElement('button');
	button.innerHTML = `<span class="close"></span>`;
	element.append(button);
	if (todoList.children.length > 0 && todoList.children[0].tagName === 'P') {
		todoList.children[0].remove();
	}
	todoList.append(element);
	list.push({
		value: value,
		checked: checked,
	});
	updateHappened();
	const index = list.length - 1;

	button.onclick = function (e) {
		element.remove();
		list[index] = null;
		updateHappened();
	};
	checkbox.onchange = function (e) {
		list[index].checked = checkbox.checked;
		updateHappened();
	};
}
todoForm.onsubmit = function (event) {
	event.preventDefault();
	const value = todoInput.value;
	todoInput.value = '';
	AddTodoElement(value);
};

const stringList = localStorage.getItem('list');
const savedList = JSON.parse(stringList);
console.log(savedList);
savedList.forEach((element) => {
	AddTodoElement(element.value, element.checked);
});
