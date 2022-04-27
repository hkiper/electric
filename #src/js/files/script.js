let linkLi = document.querySelector(".sevises-link");
linkLi.addEventListener("click", function(){
	let subLink = document.querySelector(".sub__links");
		subLink.classList.toggle('_active');
		linkLi.classList.toggle("_open");	
 });




 
 window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		 document.getElementById("myBtn").style.display = "block";
	} else {
		 document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}