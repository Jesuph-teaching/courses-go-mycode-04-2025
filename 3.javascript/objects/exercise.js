// exo 1
const shoppingList = {
	items: [], // array of objects (name, quantity)
	addItem(itemName, quantity) {
		this.items.push({
			name: itemName,
			quantity: quantity,
			//quantity, // you can find it like this
		});
	},
	printList() {
		console.log(this.items);
	},
};

shoppingList.addItem('Qaada', 1);
shoppingList.addItem('water ifri', 2);

shoppingList.printList();

// exo 3
const pet = {
	name: 'Silver',
	type: 'cat',
	hungerLevel: 8,
	feed() {
		//this.hungerLevel--;
		//this.hungerLevel -= 1;
		this.hungerLevel = this.hungerLevel - 1;
	},
	/* feed: function () {}, */
};

console.log(pet);
pet.feed();
console.log(pet);
