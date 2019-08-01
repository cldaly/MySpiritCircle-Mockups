var favButtons = document.getElementsByClassName("favoriteService");
var favButtonsActive = document.getElementsByClassName("favoriteServiceActive");


Array.prototype.forEach.call(favButtons, function(favButton, index, array){
	favButton.addEventListener("click", function(){
		this.style.display = "none";
		favButtonsActive[index].style.display = "block";
	});
});
	
Array.prototype.forEach.call(favButtonsActive, function(favButtonActive, index, array){
	favButtonActive.addEventListener("click", function(){
		this.style.display = "none";
		favButtons[index].style.display = "block";
	});
});