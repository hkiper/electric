let linkLi = document.querySelector(".sevises-link");
linkLi.addEventListener("click", function(){
	let subLink = document.querySelector(".sub__links");
		subLink.classList.toggle('_active');
		linkLi.classList.toggle("_open");	
 });