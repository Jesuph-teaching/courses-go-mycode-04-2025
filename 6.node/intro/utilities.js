function DefineUser(firstName, lastName) {
	return `Hello, My name is ${firstName} ${lastName}. And i'm a programer`;
}
export default DefineUser;
// module.exports = DefineUser; // CommonJS syntax
// export default DefineUser; // ES6 syntax

export function DefineStudent(firstName, lastName) {
	return `Hello, My name is ${firstName} ${lastName}. And i'm a student`;
}
export function DefineTeacher(firstName, lastName) {
	return `Hello, My name is ${firstName} ${lastName}. And i'm a teacher`;
}
