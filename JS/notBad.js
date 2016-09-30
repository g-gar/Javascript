
//Closure example
function addTo(passed){
	return function(inner){
		return passed+inner
	}
}

// Object.call
function sayHello(name){
	return 'Hello, ' + name
}