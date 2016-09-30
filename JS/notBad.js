function addTo(passed){
	return function(inner){
		return passed+inner
	}
}