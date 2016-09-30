
//Closure example
function addTo(passed){
	return function(inner){
		return passed+inner
	}
}

// Object.call
function multiply(number){
	return this.number + number
}