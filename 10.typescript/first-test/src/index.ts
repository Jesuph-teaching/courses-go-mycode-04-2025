// type or interface
type ID = string | number;

interface User {
	id: ID;
	name: string;
	email: string;
}

const user1: User = {
	id: 1,
	name: '',
	email: '',
};

const id2: ID = 23;

// create a type for Species : Mammal , Fish , Insect , Birds
// create a type animal with the following elements : name , specie, lifeSpan
// create 4 animal variables

type SpeciesT = 'Mammals' | 'Fishes' | 'Insects' | 'Birds';

interface AnimalI<LIFESPAN extends string | number = number> {
	name: string;
	specie: SpeciesT;
	lifespan: LIFESPAN;
	attack?: (animal: Pick<AnimalI, 'name'>) => void;
}

const animal1: AnimalI = {
	name: 'Lion',
	specie: 'Mammals',
	lifespan: 15,
	attack: function (animal) {
		console.log(`The ${this.name} bit ${animal.name}`);
	},
};

const animal2: AnimalI = {
	name: 'Elephant',
	specie: 'Mammals',
	lifespan: 70,
	attack: function (animal) {
		console.log(`The ${this.name} hit ${animal.name} with his trunk`);
	},
};

const animal3: AnimalI = {
	name: 'Eagle',
	specie: 'Birds',
	lifespan: 25,
	attack(animal) {
		console.log(`The ${this.name} picked the ${animal.name}`);
	},
};
const animal4: AnimalI = {
	name: 'Shark',
	specie: 'Fishes',
	lifespan: 30,
};
const animal5: AnimalI<`${number} days`> = {
	name: 'mosquito',
	specie: 'Insects',
	lifespan: '10 days',
};
// removing the keys mentioned
const unknownAnimal: Omit<AnimalI, 'lifespan'> = {
	name: 'Roc',
	specie: 'Birds',
};
// making keys optional
const dragon: Partial<AnimalI> = {
	name: 'Dragon',
};

const crocodile: Pick<AnimalI, 'name' | 'lifespan'> = {
	name: 'crocodile',
	lifespan: 15,
};
animal1.attack!(animal2); // ! obligatory calling (can cause an error if element doesn't exist)
animal2.attack?.(crocodile); // ?. optional calling the function/ attribute
animal3.attack?.(crocodile);
animal4.attack?.(animal1); // not gonna be called because its optional
//animal4.attack!(animal1); // gonna be called and cause an error
console.log({
	animal1,
	animal2,
	animal3,
	animal4,
	crocodile,
	dragon,
	unknownAnimal,
});

function combine<T, B>(a: T, b: B): [T, B] {
	return [a, b];
}

const c1 = combine(34, 5);
const c2 = combine('Hello', 'Farouk');
const c3 = combine(true, 'false');
