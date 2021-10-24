let monthNav = 0;

const calendar = document.getElementById('calendar');
// const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function loadCalendar(){
	const dt = new Date();

	if(monthNav !== 0) dt.setMonth(new Date().getMonth() + monthNav);

	const day = dt.getDate();
	const month = dt.getMonth();
	const year = dt.getFullYear();

	document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`;

	// const firstDayOfMonth = new Date(year, month, 1);
	// const dateString = firstDayOfMonth.toLocaleDateString('en-us', options);

	const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); //31

	const firstDayIndex = new Date(year, month, 1).getDay(); //5

	const lastDayOfPrevious = new Date(year, month, 0).getDate(); //30

	const lastDayIndex = new Date(year, month + 1, 0).getDay(); //0

	const finalWeek = 6 - lastDayIndex; //6


	
	// const startDayOfWeek = firstDayOfMonth.toLocaleDateString('en-us', { weekday: 'long'});
	// const endDayOfWeek = lastDayOfMonth.toLocaleDateString('en-us', { weekday: 'long'});

	// const paddingDaysStart = weekdays.indexOf(startDayOfWeek);
	// const paddingDaysEnd = weekdays.indexOf(endDayOfWeek);



	// populating calendar starts here
	calendar.innerHTML = '';
	// const daySquare = document.createElement('div');
	// daySquare.classList.add('day');


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


let clicked = null;
// let entries = localStorage.getItem('entries') ? JSON.parse(localStorage.getItem('entries')) : [];

function displaySummary(date){
	clicked = date;
	// TODO
}




