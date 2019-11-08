var inc = 0.01;
var counter = 0;

var fetching = function() {
	fetch('https://yesno.wtf/api').then(function(results) {
		return results.json()
	}).then(function(jsonResults) {
		console.log("results: ", jsonResults)

		counter++;
		if(jsonResults.answer === "yes"){
			fetching();
		} else {
			if(counter < 200){

				var randoX = windowWidth/2 + 'px';
				var posY = 0;
				//posY++;
				document.getElementById("imageRain").innerHTML += `<img class="picOfNos" src="${jsonResults.image} "
																		style="position: absolute; top: ${posY}px; left: ${randoX}; cursor: pointer;">`;
				var allNos = document.querySelectorAll(".picOfNos");
				allNos.setAttribute("style", "position: absolute;");
				
				
				allNos.style.top = posY + 'px';
//animation: drop 10s forwards;



TweenMax.fromTo("#imageRain", 2, {rotation: 0, y: '-400px'}, {rotation: 360, ease: Bounce.easeOut, y: windowHeight/2 + 'px'});




//animation: drop 10s forwards;
//top: ${posY}px; left: ${randoX};
				console.log('posY:' + posY)
				console.log(counter)
			}
		}
	}).catch(function(error) {
		console.log("error message:", error)
	})

}
 


document.addEventListener('DOMContentLoaded', function(event) {
	fetching();
	TweenMax.fromTo("#imageRain", 2, {rotation: 0, y: '-400px'}, {rotation: 360, ease: Bounce.easeOut, y: '400px'});
}) 
//fetching();





//var arrayOfPics = [];
var nahs = [];

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	pixelDensity(1);

	for (var i = 0; i < 50; i++) {
		nahs[i] = new Nah(random(0 - windowWidth, 0), random(windowHeight), random(20,50), random(200, 255));
	}

	// for(var i = 0; i < 10; i++) {
	// 	arrayOfPics.push(new Pic());
	// }
	
}

function draw() {
	loadPixels();
	for (var x = 0; x < windowWidth; x++) {
		for (var y = 0; y < windowHeight; y++) {
			var index = (x + y * width) * 4;
			var r = random(255);
			pixels[index+0] = r;
			pixels[index+1] = r;
			pixels[index+2] = r;
			pixels[index+3] = 255;
		}
	}
	updatePixels()

	for (var i = 0; i < nahs.length; i++) {
		nahs[i].show();
		nahs[i].move();
	}

}


class Nah {
	constructor(x, y, nahSize, nahColor) {
		this.speed = random(8, 20);
		this.x = x;
		this.y = y;
		this.nahSize = nahSize;
		this.nahColor = nahColor;
	}

	show() {

		
		fill(this.nahColor);
		textAlign(CENTER);
		textFont('Georgia');
		textSize(this.nahSize);
		text('nah', this.x, this.y);
		
	}

	move() {
		this.x = this.x + this.speed;
		if(this.x - this.nahSize/2 > windowWidth) {
			this.x = random(0 - windowWidth/2, 0);
			this.y = random(windowHeight);
		}
	}
}

//fetching();

//setInterval(fetching, 5000);
// for(var i = 0; i < 10; i++){
// 	setTimeout(fetching, 3000 * i);
// }

//image class
// class Pic {
// 	constructor() {
// 		this.x = random(windowWidth);
// 		this.y = 0;
		
// 	}

// 	show() {
// 		fetch('https://yesno.wtf/api')
// 		.then(function(results){
// 			return results.json()
// 		})
// 		.then(function(jsonResults){


// 		if(jsonResults.answer === "yes"){
			
// 			return;
// 		} else {
// 			var containter = document.getElementById("imageRain");
// 			var randoX = random(windowWidth) + 'px';
// 			console.log(randoX);
// 			containter.innerHTML += `<img class="picOfNos" src="${jsonResults.image}"
// 									 style="position: absolute; top: 0; left: ${randoX};"
// 									  >`;
									  
// 			 var picOfNos = document.querySelectorAll(".picOfNos");
// 			 picOfNos.setAttribute("style", "position: absolute;");
// 			 picOfNos.style.top = 0;
// 			 picOfNos.style.left = random(windowWidth) + 'px';
			
// 		} 
// 	})


// 	.catch(function(error){
// 		console.log("error message:", error)
// 	})

// 	}

// 	move() {
// 		this.y = this.y + 10;

// 	}

// 	remove() {
// 		this.remove();
// 	}

// }