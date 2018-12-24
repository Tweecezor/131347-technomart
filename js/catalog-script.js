
	var popup = document.querySelector(".modal-cart");
	var locate = document.querySelectorAll(".catalog .buy");
	var close = popup.querySelector(".modal-close");
	var cont = document.querySelector(".continue");
	var ord = document.querySelector(".ord");
	 for (var i = 0; i < locate.length; i++){
		locate[i].addEventListener("click",function(evt){
			evt.preventDefault();
			popup.classList.add("modal-show");
		});
	  }
	close.addEventListener("click",function(evt){
		evt.preventDefault();
		popup.classList.remove("modal-show");
	});
	cont.addEventListener("click",function(evt){
		evt.preventDefault();
		popup.classList.remove("modal-show");
	});
	ord.addEventListener("click",function(evt){
		evt.preventDefault();
		popup.classList.remove("modal-show");
	});
