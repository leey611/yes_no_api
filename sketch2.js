//p5 code
var linex = 0;
var liney = 0;
var spacing = 50;

var crossx = 0;
var crossy = 0;

var trix = 0;
var triy = 0;
var randomNum;

var col;
var row;

var api = "https://yesno.wtf/api";

// function preload (){
// 	data = loadJSON("https://yesno.wtf/api");
// }

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	col = windowWidth;
	row = windowHeight;
	background(0);

	for(var i = 0; i < col; i++){
		for(var j = 0; j < row; j++){
			//stroke(255);
			noFill();
			rect(i * spacing, j * spacing, spacing,spacing);
		}

	}

	randomNum = random(1);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	 //loadJSON(api);
	
}

function draw() {
	
	if (randomNum < 0.5) {
		drawSquare();
	} else{
		drawTriangle();
	}
	//drawTriangle();
}


function mousePressed() {
	//if (random(1) < 0.5) {
		 //loadJSON(api);
		popNewImg();
	//}
}



function popNewImg() {

	fetch('https://yesno.wtf/api').then(function(results) {
	return results.json()
}).then(function(jsonResults) {
	console.log("results: ", jsonResults)
	filter(THRESHOLD);
	var newimg = document.createElement('img');
	newimg.className = "newImg";
	newimg.setAttribute("style", "position: absolute;");
	newimg.src = jsonResults.image;
	newimg.setAttribute("z-index", "1");
	newimg.setAttribute("width", "300px");
	
	// we want to get the button's dimensions and location

	var yesNoButton = document.querySelector(".button-row2");

	var buttonCoordinates = [yesNoButton.getBoundingClientRect().x, yesNoButton.getBoundingClientRect().y]; 
	var buttonSize = [yesNoButton.getBoundingClientRect().width, yesNoButton.getBoundingClientRect().height];



	newimg.style.top = mouseY + 'px';
	newimg.style.left = mouseX + 'px';
	// newimg.style.top = random(windowHeight) + 'px';
	// newimg.style.left = random(windowWidth) + 'px';
	
		
	if(mouseY > buttonCoordinates[1] && mouseY < buttonCoordinates[1] + buttonSize[1] && mouseX > buttonCoordinates[0] && mouseX < buttonCoordinates[0] + buttonSize[0]){
		console.log("hello")
		console.log(mouseX, mouseY)
		console.log(buttonCoordinates)
		console.log(buttonSize)
		return;
	}else{
		document.body.appendChild(newimg);
	}

	
	
	
}).catch(function(error) {
	console.log("error message:", error)
})
		
}


function changeAnswer() {
	 fetch('https://yesno.wtf/api').then(function(results) {
	 return results.json()
	 }).then(function(jsonResults) {
	 console.log("results: ", jsonResults)
	 document.getElementById("yesnoImg").src = jsonResults.image
	 }).catch(function(error) {
	 console.log("error message:", error)
	 })
}

document.getElementById("yes-button").addEventListener("click", function(){
  changeAnswer();
});

function windowResized() {
	console.log('resized');
	resizeCanvas(windowWidth,windowHeight);
	//clear();
	//background(0);
	//drawLines();
}

function drawLines() {
	stroke(255);
	if (random(1) < 0.5){
		line(linex, liney, linex + spacing, liney + spacing);
	} else {
		line(linex, liney + spacing, linex + spacing, liney);
	}
	linex = linex + spacing;
	if (linex > width) {
		linex = 0;
		liney = liney + spacing;
	}
}

function drawCross() {
	stroke(255);
	if (random(1) < 0.5) {
		line(crossx, crossy, crossx + spacing, crossy); //horizontal
	} else {
		line(crossx + spacing, crossy, crossx + spacing, crossy + spacing); //vertical
	}
	crossx = crossx + spacing;
	if (crossx > width) {
		crossx = 0;
		crossy = crossy + spacing;
	}
}

function drawSquare() {
	//stroke(255);
	noStroke();
	fill(255);
	if (random(1) < 0.5) {
		rect(linex, liney, spacing, spacing);
	} 
	linex = linex + spacing;
	if (linex > width) {
		linex = 0;
		liney = liney + spacing;
}
}

function drawTriangle() {
	//stroke(255);
	noStroke();
	fill(255);
	//noFill();
	if (random(1) < 0.5) {
		triangle(trix, triy, trix + spacing, triy, trix + spacing, triy + spacing);
	} else {
		// triangle(trix, triy, trix, triy + spacing, trix + spacing, triy + spacing);
	}
	trix = trix + spacing;
	if (trix > width) {
		trix = 0;
		triy = triy + spacing;
	} 
	
}