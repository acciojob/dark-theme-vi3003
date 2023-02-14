//your code here
let night = document.getElementById("app");
let button = document.getElementById("swap");

swap.addEventListener("click", function(){
	if(night.classList.contains("day")){
		night.classList.remove("day");
		night.classList.add("night");
		button.classList.remove("button_day");
		button.classList.add("button_night");
	} else {
		night.classList.remove("night");
		night.classList.add("day");
		button.classList.remove("button_night");
		button.classList.add("button_day");
	}
});

