var i=0;
function color(){

	var clr=["red","blue","green","yellow"];
	if(i>=clr.length)
		i=0;
	document.getElementById("para").setAttribute("style","color:"+clr[i]+";");
	i++;
}