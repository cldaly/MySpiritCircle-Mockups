var favButton = document.getElementById("favoriteMentor");
var favButtonActive = document.getElementById("favoriteMentorActive");
favButton.addEventListener("click", function(){
	favButton.style.display = "none";
	favButtonActive.style.display = "block";
});

favButtonActive.addEventListener("click", function(){
	favButton.style.display = "block";
	favButtonActive.style.display = "none";
});