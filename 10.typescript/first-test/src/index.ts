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

type Species = 'Mammals' | 'Fishes' | 'Insects' | 'Birds';

interface Animal<LIFESPAN extends string | number = number> {
	name: string;
	specie: Species;
	lifespan: LIFESPAN;
}

const animal1: Animal = {
	name: 'Lion',
	specie: 'Mammals',
	lifespan: 15,
};

const animal2: Animal = {
	name: 'Elephant',
	specie: 'Mammals',
	lifespan: 70,
};

const animal3: Animal = {
	name: 'Eagle',
	specie: 'Birds',
	lifespan: 25,
};

const animal4: Animal = {
	name: 'Shark',
	specie: 'Fishes',
	lifespan: 30,
};
const animal5: Animal<`${number} days`> = {
	name: 'mosquito',
	specie: 'Insects',
	lifespan: '10 days',
};
// removing the keys mentioned
const unknownAnimal: Omit<Animal, 'lifespan'> = {
	name: 'Roc',
	specie: 'Birds',
};
// making keys optional
const dragon: Partial<Animal> = {
	name: 'Dragon',
};

const crocodile: Pick<Animal, 'name' | 'lifespan'> = {
	name: 'crocodile',
	lifespan: 15,
};

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
