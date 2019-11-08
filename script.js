fetch('https://yesno.wtf/api').then(function(results) {
	return results.json()
}).then(function(jsonResults) {
	console.log("results: ", jsonResults)
	document.getElementById("yesnoImg").src = jsonResults.image
	document.getElementById("yesnoImg").setAttribute("z-index", "105");
}).catch(function(error) {
	console.log("error message:", error)
})

document.getElementById('myInput').focus();

var buttonRow = document.querySelector(".buttonRow");

var showBtn = function(str) {
	console.log('sad')
	if (str.length === 0) {
		buttonRow.style.display = 'none';
	} else {
		buttonRow.style.display = 'block';
	}
}


var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("yes-button").click();
  }
});

