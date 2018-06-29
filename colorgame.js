console.log("OK!");

var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var mesageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
	reset();
});

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
};

function setUpSquares(){
	for(var i=0; i<squares.length; i++){
		//add click listeners
		squares[i].addEventListener("click", function(){
			//grab color of cliked square
			var clikedColor = this.style.backgroundColor;
			//compare to picked color
			if(clikedColor === pickedColor){
				mesageDisplay.textContent = "Dobrze!";
				chanegeColors(clikedColor);
				h1.style.backgroundColor=clikedColor;
				resetButton.textContent = "Jeszcze raz?";
			}else{
				this.style.backgroundColor ="#232323";
				mesageDisplay.textContent = "Próbuj dalej!";
			};
		});
	};	
};

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Łatwy" ? numberOfSquares=3: numberOfSquares=6;
			reset();
		});
	};	
};

function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "Nowa gra";
	mesageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
};

function chanegeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	};
};

function pickColor() {
	var random  = Math.floor(Math.random()*colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	//random colors returned to array
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	};

	return arr;
};

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return "rgb("+red+", "+green+", "+blue+")";

};