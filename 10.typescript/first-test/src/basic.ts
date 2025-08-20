console.log('hello');

// declaring variables
let x: number | string = 43;
const y = { d: 4 };
let z: `student-${'Youcef' | 'Farouk'}` = 'student-Farouk';
z = 'student-Youcef';
console.log(z);

const a: boolean = true;
const d: Date = new Date('10-02-2005');
const b: object = { dsaf: 32 };
const c: (number | string)[] = ['hello', 'Farouk', 32];
console.log(d);
const e: {
	firstName: string;
	lastName: string;
	age: number;
} = {
	firstName: 'Youcef',
	lastName: 'Madadi',
	age: 27,
};
const f: any = 'ds'; // dangerous
const g: unknown = { x: 34 };
const i: null = null;
const j: undefined = undefined;
