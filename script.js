let monthNav = 0;

const calendar = document.getElementById('calendar');

function loadCalendar(){
	const dt = new Date();

	if(monthNav !== 0) dt.setMonth(new Date().getMonth() + monthNav);

	const month = dt.getMonth();
	const year = dt.getFullYear();

	document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`;

	// current month date variables
	const firstDayIndex = new Date(year, month, 1).getDay(); 
	const lastDayIndex = new Date(year, month + 1, 0).getDay(); 
	const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); 

	// previous month's last date
	const lastDayOfPrevious = new Date(year, month, 0).getDate(); 

	// room left in final week of current month for next month's first week
	const finalWeek = 6 - lastDayIndex; 


	// populating calendar starts here
	calendar.innerHTML = '';

	// last week of the previous month
	for(let i = firstDayIndex; i > 0; i--){
		const daySquare = document.createElement('div');
		daySquare.classList.add('padding');

		daySquare.innerText = lastDayOfPrevious - i + 1; 

		daySquare.addEventListener('click', () => console.log(lastDayOfPrevious - i + 1)); 

		calendar.appendChild(daySquare);	
	}

	// days in current month
	for(let j = 1; j <= lastDayOfMonth; j++){
		const daySquare = document.createElement('div');
		daySquare.classList.add('day');

		daySquare.innerText = j;
		daySquare.addEventListener('click', () => console.log(j));

		calendar.appendChild(daySquare);
	}

	// first week of the following month
	for(let k = 1; k <= finalWeek; k++){
		const daySquare = document.createElement('div');
		daySquare.classList.add('padding');

		daySquare.innerText = k; 
		daySquare.addEventListener('click', () => console.log(k));

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



const entryArr = [];

class Entry{
	constructor(date, label, type){
		this.date = date;
		this.label = label;
		this.type = type;
		
		 entryArr.push(this);
	}

	toString(){
		return JSON.stringify(this);
	}
	
}

// const entryStorage = window.localStorage;

const entry0 = new Entry("March", "did something", "drove carpool");
const entry1 = new Entry("April", "things", "carpool things");
const entry2 = new Entry("March", "did something", "some stuff");

let filteredEntries = entryArr.filter(entry => entry.date === "March");
// document.querySelector(".trip-chips").innerHTML = `<div>${filteredEntries}</div>`
document.getElementById("trip-chips").innerHTML = `<div>${entryArr}</div>`
// document.querySelector(".trip-chips").innerHTML = `<div>${entryArr}</div>`

console.log(entryArr);

function userSubmit() {
	userEntry = new Entry("June", document.getElementById("eLabel").value, document.getElementById("eType").value);

	// TODO function to load filtered entries instead of calling document.etc each time
	document.getElementById("trip-chips").innerHTML = `<div>${entryArr}</div>`

	// TODO visibility = hidden
	return false;
};





let clicked = null;
// let entries = localStorage.getItem('entries') ? JSON.parse(localStorage.getItem('entries')) : [];

function displaySummary(date){
	clicked = date;
	// TODO
}



function toggleForm(){
	// TODO
	document.getElementById('weekdays').style.color = 'blue';
	alert("hello");
	var form = document.getElementById('logForm');
	let visibility = form.style.visibility;
	visibility = visibility === 'visible' ? 'hidden' : 'visible';


}




