let monthNav = 0;
let clickedDay = null; 

const calendar = document.getElementById('calendar');

function loadCalendar() {

	const dt = new Date();

	if (monthNav !== 0) dt.setMonth(new Date().getMonth() + monthNav);

	const month = dt.getMonth();
	const year = dt.getFullYear();

	document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`;

	// current month date variables
	const firstDayIndex = new Date(year, month, 1).getDay(); 
	const lastDayIndex = new Date(year, month + 1, 0).getDay(); 
	const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); 

	// previous month's end date
	const lastDayOfPrevious = new Date(year, month, 0).getDate(); 

	// room left in final week of current month for next month's first week
	const finalWeek = 6 - lastDayIndex; 


	/********** populating calendar starts here **********/
	calendar.innerHTML = '';

	// last week of the previous month
	for (let i = firstDayIndex; i > 0; i--) {
		const daySquare = document.createElement('div');
		daySquare.classList.add('padding');

		daySquare.innerText = lastDayOfPrevious - i + 1; 

		daySquare.addEventListener('click', () => displaySummary(lastDayOfPrevious - i + 1)); 

		calendar.appendChild(daySquare);	
	}

	// days in current month
	for (let j = 1; j <= lastDayOfMonth; j++) {
		const daySquare = document.createElement('div');
		daySquare.classList.add('day');

		daySquare.innerText = j;
		daySquare.addEventListener('click', () => displaySummary(j));

		calendar.appendChild(daySquare);
	}

	// first week of the following month
	for (let k = 1; k <= finalWeek; k++) {
		const daySquare = document.createElement('div');
		daySquare.classList.add('padding');

		daySquare.innerText = k; 
		daySquare.addEventListener('click', () => displaySummary(k));

		calendar.appendChild(daySquare);
	}
}

document.getElementById('nextButton').addEventListener('click', () => {
	monthNav++;
	loadCalendar();
	});

document.getElementById('backButton').addEventListener('click', () => {
	monthNav--;
	loadCalendar();
	});


loadCalendar();


function displaySummary(date) {

	clickedDay = date;
	const filteredEntries = entryArr.filter(entry => entry.date == date);

	if (filteredEntries.length > 0) {
		document.getElementById("trip-chips").innerHTML = `<div>${filteredEntries}</div>`
	} else {
		document.getElementById("trip-chips").innerHTML = `<div>You have no data on this date</div>`;
	}
}

const entryArr = [];

class Entry {

	constructor(date, label, type) {
		this.date = date;
		this.label = label;
		this.type = type;
		
		entryArr.push(this);
	}
	toString() {
		return JSON.stringify(this);
	}
}

const entry0 = new Entry(4, "did something", "drove carpool");
const entry1 = new Entry(7, "things", "carpool things");
const entry2 = new Entry(9, "did something else", "some stuff");

function userSubmit() {

	userDate = document.getElementById("fDate").value;
	userLabel = document.getElementById("fLabel").value;
	userType = document.getElementById("fType").value;

	userEntry = new Entry(userDate, userLabel, userType);

	document.getElementById('formContainer').style.visibility = 'hidden';
	document.getElementById("logForm").reset();
	return false;
};


let displayBool = false;

function toggleForm() {
	
	document.getElementById('formContainer').style.visibility = displayBool ? 'hidden' : 'visible';
	displayBool = !displayBool;
}




