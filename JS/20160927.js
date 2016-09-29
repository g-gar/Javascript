window.onload = function(){
	var variable1 = 0
	var variable2 = "0"
	document.write(variable1 === variable2)
	
	//bucles
	switch(variable1==variable2){
		case true:
			document.write("Las dos variables almacenan el mismo valor")
			break
		case false:
			document.write("Las dos variables almacenan valores distintos")
			break
	}
	// for infinito 
	/* 
		for (;;){
	
		}
	*/
	for (var i = 0; i < 10; i++){
		if (i%2) document.write(i+"<br>")
		else continue

		document.write("Se ha ejecutado una iteracion <br>")
	}
	document.write("<br>")
	var i = -1
	while (i++ < 10){

		if (i%2) document.write(i + "<br>")
		else continue

		document.write("Se ha ejecutado una iteracion <br>")
	}

	/* otra manera
	var i = 0
	while (i < 10){
		
		if ((i-1)%2) document.write(i + "<br>")
		else continue

		document.write("Se ha ejecutado una iteracion <br>")
	}
	*/
}