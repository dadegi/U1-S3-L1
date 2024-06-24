const names = [
	'Mario',
	'Nicola',
	'Giovanni',
	'Anna',
	'Maria',
	'Francesca',
	'Dario',
	'Pippo',
];

const persons = [
	{
		name: 'Mario',
		surname: 'Rossi',
		email: 'mario@rossi.com',
	},
	{
		name: 'Aldo',
		surname: 'Bianchi',
		email: 'aldo@bianchi.com',
	},
	{
		name: 'Maria',
		surname: 'Verdi',
		email: 'maria@verdi.com',
	},
	{
		name: 'Giovanna',
		surname: 'Neri',
		email: 'giovanna@neri.com',
	},
	{
		name: 'Nicola',
		surname: 'Remi',
		email: 'nicola@remi.com',
	},
];

const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'z',
];

const dynamicList = document.getElementById('dynamicList');
const rubrica = document.getElementById('rubrica');
const buttons = document.getElementById('buttons');

document.addEventListener('load', init());

function init() {
	printList();
	printButtons();
}

function printList() {
	dynamicList.innerHTML = '';
	names.forEach((item, index) => {
		dynamicList.innerHTML += `<li><button type="button" id="clear" onclick="elimina(${index})">❌</button> ${item}</li>`;
	});
}

function printButtons() {
	letters.forEach(item => {
		buttons.innerHTML += `<button type="button" onclick="search('${item.toUpperCase()}');"><b>${item.toUpperCase()}</b></button>`;
	});
}

function elimina(index) {
	names.splice(index, 1);
	printList();
}

function search(letter) {
	rubrica.innerHTML = '';
	persons.forEach(item => {
		if (item.surname.startsWith(letter)) {
			rubrica.innerHTML += `<li>${item.surname} ${item.name}, email: ${item.email}</li>`;
		}
	});
}
