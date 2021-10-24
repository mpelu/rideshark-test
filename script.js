const date = new Date();

const renderCalendar = () => {
	date.setDate(1);

	const monthDays = document.querySelector(".days");
	
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

	const firstDayIndex = date.getDay();

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	  ];

	document.querySelector(".date h1").innerHTML = months[date.getMonth()];

	let days = "";

	// TODO could create date objects (year, month, day) inside loop and place day value inside div

	for (let x = firstDayIndex; x > 0; x--){
		days +=`<div class="prev-date">${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i<= lastDay; i++){
		days += `<div class="curr-date">${i}</div>`;
	}

	// TODO next month's first days 
	
	monthDays.innerHTML = days;
	// alert(monthDays.innerHTML);

};

renderCalendar();

document.querySelector(".prev").addEventListener("click", () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

// alert(document.querySelector(".date h1").innerHTML);

document.querySelector(".days").addEventListener("click", () => {
	alert("date is clickable!");
	// alert(document.getElementById(".days div").innerHTML);
});

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

const entryStorage = window.localStorage;

// const filterEntriesByDate = () => {
// };


const entry0 = new Entry("March", "did something", "drove carpool");
const entry1 = new Entry("April", "things", "carpool things");
const entry2 = new Entry("March", "did something", "some stuff");

let filteredEntries = entryArr.filter(entry => entry.date === "March");
// document.querySelector(".trip-chips").innerHTML = `<div>${filteredEntries}</div>`
document.querySelector(".trip-chips").innerHTML = `<div>${entryArr}</div>`

function userSubmit() {
	userEntry = new Entry("June", document.getElementById("eLabel").value, document.getElementById("eType").value);

	// TODO function to load filtered entries instead of calling document.etc each time
	document.querySelector(".trip-chips").innerHTML = `<div>${entryArr}</div>`
	return false;
};



