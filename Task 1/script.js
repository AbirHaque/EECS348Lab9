function change_paragraph(){
	var r = document.getElementById("r").value;
	var g = document.getElementById("g").value;
	var b = document.getElementById("b").value;
	var br = document.getElementById("br").value;
	var bg = document.getElementById("bg").value;
	var bb = document.getElementById("bb").value;
	var w = document.getElementById("w").value;
	var p = document.getElementById("p");
	p.style.borderColor='rgb('+br+','+bg+','+bb+')';
	p.style.borderWidth=w+'px';
	p.style.backgroundColor='rgb('+r+','+g+','+b+')';
}

function check_passwords(){
	var p1 = document.getElementById("p1").value;
	var p2 = document.getElementById("p2").value;
	if(p1.length<8){
		alert("ERROR: First password must be at least 8 letters.");
	}
	else if(p2.length<8){
		alert("ERROR: Second password must be at leasts 8 letters.");
	}
	else if(p1!=p2){
		alert("ERROR: Passwords do not match.");
	}
	else{
		alert("Passwords correct!");
	}
}
