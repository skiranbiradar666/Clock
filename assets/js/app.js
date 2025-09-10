
const cl = console.log;

const setZero = (num) => {
	if(num < 10){
	return "0" + num;
	}else{
		return num;
	}
}
const digitalClockHandler = () => {
	let digitalClock = document.getElementById("digitalClock")
	let d = new Date();
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();
	let session = "AM"
	
	if(hr>12) {
		hr = hr-12;
		session = "PM"
	}
	let hrWithZero = setZero(hr)
	let minWithZero = setZero(min)
	let secWithZero = setZero(sec)
	
	let result = `${hrWithZero} : ${minWithZero} : ${secWithZero} ${session}`;
	
	setTimeout(digitalClockHandler, 1000)
	digitalClock.innerHTML = result;
	
}
digitalClockHandler();
	
		