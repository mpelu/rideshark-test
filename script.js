let monthNav = 0;

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function loadCalendar(){
	const dt = new Date();

	if(monthNav !== 0) dt.setMonth(new Date().getMonth() + monthNav);

	const day = dt.getDate();
	const month = dt.getMonth();
	const year = dt.getFullYear();

	document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`;

	// TODO following two blocks can be refactored (iasha)
	const firstDayOfMonth = new Date(year, month, 1);
	const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
	
	const startDayOfWeek = firstDayOfMonth.toLocaleDateString('en-us', { weekday: 'long'});
	const endDayOfWeek = lastDayOfMonth.toLocaleDateString('en-us', { weekday: 'long'});

	const paddingDaysStart = weekdays.indexOf(startDayOfWeek);
	const paddingDaysEnd = weekdays.indexOf(endDayOfWeek);

	const finalWeek = 7 ; // TODO = 7 - lastDayIndex - 1;


	// populating calendar starts here
	calendar.innerHTML = '';

	// last week of the previous month
	for(let i = firstDayOfMonth; i > 0; i--){

		// TODO = prevLastDay - x + 1

	}

	// days in current month
	for(let j = 1; j <= lastDayOfMonth; j++){

		// TODO
		
	}

	// first week of the following month
	for(let k = 1; k <= finalWeek; k++){

		// TODO = j
		
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




