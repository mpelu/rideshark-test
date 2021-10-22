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

	for (let x = firstDayIndex; x > 0; x--){
		days +=`<div class="prev-date">${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i<= lastDay; i++){
		days += `<div>${i}</div>`;
	}
	monthDays.innerHTML = days;

};

class Entry{
	constructor(date, label, type){
		this.date = date;
		this.label = label;
		this.type = type;
		
		/* array.push(obj);
		*/
	}
	
}


renderCalendar();

document.querySelector(".days").addEventListener("click", () => {
	alert("date is clickable!");
});

// const calendar = document.querySelector("calendar");
// document.getElementById('app-calendar').innerHTML = calendar;

// const appDiv = document.getElementById('app');
// appDiv.innerHTML = calendar;