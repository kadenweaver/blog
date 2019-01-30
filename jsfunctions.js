function trans() {
	var dropopacity = document.getElementById("albersdrop").opacity;
        var newopacity = Math.abs(dropopacity-1);
	document.getElementById("albersdrop").opacity = newopacity;
        document.getElementById("alberspic").opacity = dropopacity;
}
