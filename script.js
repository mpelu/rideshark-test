const date = new Date();
const month = date.getMonth();


class Entry{
	constructor(date, label, type){
		this.date = date;
		this.label = label;
		this.type = type;
		
		/* array.push(obj);
		*/
	}
	
}

const calendar = document.querySelector("calendar");
document.getElementById('app-calendar').innerHTML = calendar;




const appDiv = document.getElementById('app');
appDiv.innerHTML = calendar;
