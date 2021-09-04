var scrollDisplay = function () {
	var seg = "Segment";
	var segNum = " I - "
	var piece = "Piece";
	var vh = window.innerHeight;
    var scroll = window.scrollY;
    var myID = document.getElementById("myID")
    if (scroll <= (vh)) {
        myID.innerHTML= seg + segNum + piece + " I";
    } 
	else if (scroll <= vh * 2){
        myID.innerHTML= seg + segNum + piece + " II";
	}
	else if (scroll <= vh * 3){
        myID.innerHTML= seg + segNum + piece + " III";
	}
	else if (scroll <= vh * 4){
        myID.innerHTML= seg + segNum + piece + " IV";
	}
	else {
        myID.innerHTML = seg + segNum + piece + " V"
    }
};

window.addEventListener("scroll", scrollDisplay);
