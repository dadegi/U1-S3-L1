const studente = {
	name: 'Mario',
	surname: 'Rossi',
	age: 25,
	batch: 'FS0624',
};

const docente = {
	...studente,
	name: 'Aldo',
	skills: ['html', 'css', 'JavaScript'],
};

let { name, surname, age } = studente;
console.log(`Studente ${name} ${surname} di anni ${age}`);
({ name, surname, age } = docente);
console.log(`Docente ${name} ${surname} di anni ${age}`);

let [skill1, skill2] = docente.skills;
console.log(skill1, skill2);

delete docente.batch;

console.log(studente);
console.log(docente);

function mySum(...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(sum);
}

mySum(3, 7, 5, 12, 1);
mySum(8, 4, 15);
mySum(24, 9, 12, 11, 5, 6, 4);

function addSkills(...mySkills) {
	let skills = [];
	for (let i = 0; i < mySkills.length; i++) {
		skills.push(mySkills[i]);
	}
	return skills;
}

console.log(
	'Il docente Mario Rossi insegna ' + addSkills('html', 'css', 'JavaScript')
);
console.log('Il docente Aldo Bianchi insegna ' + addSkills('Java', 'MongoDB'));
console.log('Il docente Maria Verdi insegna ' + addSkills('CyberSecurity'));

const multirow = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet,
consectetur, adipisci velit, sed quia non numquam
eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
Ut enim ad minima veniam, quis nostrum exercitationem
ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`;

console.log(multirow);

// METODI DI MODIFICA DEGLI ARRAY
// pop(), push(), shift(), unshift()
const nameArray = ['Mario', 'Nicola', 'Maria', 'Giovanna'];
let extractEnd = nameArray.pop();
console.log(`l'elemento eliminato è ${extractEnd}`);
nameArray.push('Renato');
console.log(nameArray);
let extractStart = nameArray.shift();
console.log(`L'elemento eliminato è ${extractStart}`);
nameArray.unshift('Carmine');
console.log(nameArray);
nameArray.push(nameArray.shift());
/* Equivale a
let newExtract = nameArray.shift();
nameArray.push(newExtract); */
console.log(nameArray);

// splice()
nameArray.splice(1, 2);
console.log(nameArray);
nameArray.splice(1, 0, 'Andrea');
console.log(nameArray);
nameArray.push('Francesca', 'Diana', 'Antonio N.');
console.log(nameArray);
nameArray.splice(2, 3, 'Gianluca', 'Francesco', 'Sara', 'Loic', 'Davide');
console.log(nameArray);
let extraxtMid = nameArray.splice(4, 1);
console.log(extraxtMid);
console.log(nameArray);

// concat()
const numArray1 = [1, 2, 3];
const numArray2 = [4, 5, [6, 7, 8]];
const numArrayNew = numArray1.concat(numArray2);
console.log(numArrayNew);
console.log(`Il nuovo array è ${numArrayNew}, lunghezza ${numArrayNew.length}`);

// slice()
const partNameArray = nameArray.slice(2, 5);
console.log(partNameArray);
console.log(nameArray);

// METODI DI MANIPOLAZIONE DEGLI ARRAY (iterazione)
// forEach()
nameArray.forEach(student => {
	console.log(`studente ${student}`);
});
/* EQUIVALE A
for (let i = 0; i < nameArray.length; i++) {
    console.log(`studente ${nameArray[i]}`);
}
*/

const cars = [
	{
		brand: 'Ford',
		model: 'Fiesta',
		color: 'red',
		trims: ['titanium', 'st', 'active'],
	},
	{
		brand: 'Peugeot',
		model: '208',
		color: 'blue',
		trims: ['allure', 'GT'],
	},
	{
		brand: 'Volkswagen',
		model: 'Polo',
		color: 'black',
		trims: ['life', 'style', 'r-line'],
	},
];

cars.forEach((car, index) => {
	car.licensePlate = `PO5${index}2FE`;
});
console.log(cars);

// map()
const nameNew = nameArray.map(item => {
	return `Studente ${item}`;
});
console.log(nameNew);

const numbersArray = [2, 5, 3, 7, 8];
const numbersPow = numbersArray.map(item => {
	return item * item;
});
console.log(numbersPow);
console.log(numbersArray);
// con forEach
const pow2 = [];
numbersArray.forEach(item => {
	pow2.push(item * item);
});
console.log(pow2);

// Vecchia sintassi senza arrow function
const numbersModified = numbersArray.map(function (item) {
	return item - 5;
});
console.log(numbersModified);

// forEach per modificare un array
const newNumbers = [3, 4, 5, 6];
console.log(newNumbers);
newNumbers.forEach((item, index) => {
	newNumbers[index] = item * item;
});
console.log(newNumbers);

// filter
const majorsNumbers = numbersPow.filter(item => {
	return item > 20;
});
console.log(majorsNumbers);

// reduce
const powSum = numbersPow.reduce((sum, item) => sum + item);
console.log(powSum);
const powSum10 = numbersPow.reduce((sum, item) => sum + item, 10); // La somma parte dal numero 10
console.log(powSum10);
const newNumbers2 = [3, 4, 5, 6];
const moltiplication = newNumbers2.reduce((factor, item) => factor * item, 2);
console.log(moltiplication);
const subtraction = newNumbers2.reduceRight(
	(result, item) => result - item,
	newNumbers2[2]
);
console.log(subtraction);

const exists = nameArray.indexOf('Davide');
console.log(exists);

const presentBrand = cars
	.map(item => {
		return item.brand;
	})
	.indexOf('Ford');
// const presentBrand = brands.indexOf('Ford');
console.log(presentBrand);

const realNumber = newNumbers.find(item => item === 100);
console.log(realNumber);

const nameArray2 = ['Mario', 'Nicola', 'Maria', 'Giovanna', 'Nicola'];
const namePos = nameArray2.findIndex(item => item === 'Nicola');
console.log(namePos);

let count = 0;
nameArray2.forEach(item => {
	if (item === 'Nicola') {
		count++;
	}
});
console.log(count);
