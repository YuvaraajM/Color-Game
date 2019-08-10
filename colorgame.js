var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

//Easy Button function
easyBtn.addEventListener("click",function()
{
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="NewColors";
	messageDisplay.textContent="";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor(colors);
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});

//Hard button function
hardBtn.addEventListener("click",function()
{
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="NewColors";
	messageDisplay.textContent="";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor(colors);
	colorDisplay.textContent=pickedColor;
	//Assiging a color to each sqaure
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}  
});




colorDisplay.textContent = pickedColor;

//For new colors button to generate diff colors to the squares:
resetButton.addEventListener("click",function(){
	resetButton.textContent ="New Colors";
	messageDisplay.textContent="";
	//Giving the array of 6 colors:
	colors = generateRandomColors(numSquares);
	//We need to select the result color:
	pickedColor=pickColor(colors);
	//We need to change the messgedisplay to the new pickedColor:
	colorDisplay.textContent=pickedColor;
	//we need to loop the colors to bring to the screen:
	for(var i = 0;i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

});

//Applying the different background colors
for(var i=0; i < colors.length; i++)
{
	
	squares[i].style.backgroundColor=colors[i];
	//Checking for the correct picked color
	squares[i].addEventListener("click",function(){
		//Selecting the clicked color
		var clickedColor = this.style.backgroundColor;
		//checking whether both colrs are equal
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent="PlayAgain?";

		}
		else
		{
			this.style.backgroundColor = "black";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

// To generate different combination of colors when we start a new game
function generateRandomColors(num)
{
	//Creating an array to store the random colors
	var arr=[];
	//for loop to push 6 colors inside the array
	for(var i=0; i < num; i++ )
	{
		//Adding the random color to the array
		arr.push(randomColor())
	}
	//This array containing diff colors will be the colors array now
	return arr;
}

//To change all the squares to correct answer square:
function changeColors(color)
{
	for(var i=0;i < squares.length; i++)
	{
		squares[i].style.backgroundColor=color;
		h1.style.backgroundColor=color;

	}
}

//To generate different colors to be the answer
function pickColor(colors)
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];

}
//To generate RGB colors->This function is added inside of generateRandomColors function:
function randomColor()
{
	//red color
	var r = Math.floor(Math.random() * 256);
	//green color
	var g = Math.floor(Math.random() * 256);
	//blue color
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r + ", "+ g + ", " + b +")";
}