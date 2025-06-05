/*
// type common
 const DefineUser = require('./utilities');
 */
// module
import DefineUser, { DefineStudent, DefineTeacher } from './utilities.js';
import chalk from 'chalk';

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(DefineUser('Assia', ''));
console.log(DefineStudent('Chouaib', ''));
console.log(DefineTeacher('Youcef', 'Madadi'));
