import './sass/main.scss';
import {sum} from './js/hw2';
import {getMaxDigit} from './js/hw3'
import {findYourHalf} from './js/hw4'
import {getRandomArray} from './js/hw5'
import {StudentsList} from './js/hw6'
import {getSubjects} from './js/hw6'
import {ukraine} from './js/hw7'
import {getMyTaxes} from './js/hw7'
import {Student} from './js/hw8'
import {generateBlocks} from "./js/hw9";
import {getRandomChinese} from "./js/hw11";
import {createIdGenerator} from "./js/hw13";

const sumResult = sum(2, 10, true);
document.getElementById('homework2').textContent = `Homework 2. Function sum(2,10,true): ${sumResult}`;

const MaxDitgit = getMaxDigit(1657168);
document.getElementById('homework3').textContent = `Homework 3. Function getMaxDigit(1657168): ${MaxDitgit}`;

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const findArr = findYourHalf(students);
document.getElementById('homework4').textContent = `Homework 4. Function findYourHalf(students): ${findArr}`;

const randArray = getRandomArray(15,0,200);
document.getElementById('homework5').textContent = `Homework 5. Function getRandomArray(15,0,200): ${randArray}`;

const studSubjects = getSubjects(StudentsList[0]);
document.getElementById('homework6').textContent = `Homework 6. Function studSubjects(StudentsList[0]): ${studSubjects}`;

const getTax = getMyTaxes.call(ukraine, 100000);
document.getElementById('homework7').textContent = `Homework 7. Function getMyTaxes.call(ukraine, 100000): ${getTax}`;

let student1 = new Student('ZNTU', 1, 'Petro Petrovych Petrenko');
document.getElementById('homework8').textContent = `Homework 8. Function student1.getInfo(): ${student1.getInfo()}`;

document.addEventListener('DOMContentLoaded', generateBlocks);


getRandomChinese(4);
const idGenerator = createIdGenerator();
console.log('homework13: ' + idGenerator.next().value);
console.log('homework13: ' + idGenerator.next().value);
console.log('homework13: ' + idGenerator.next().value);
