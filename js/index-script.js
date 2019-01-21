
	var popup = document.querySelector(".modal-write-us");
	var locate = document.querySelector(".write-us");
	var close = popup.querySelector(".modal-close");
	locate.addEventListener("click",function(evt){
		evt.preventDefault();
		popup.classList.add("modal-show");
	});
	close.addEventListener("click",function(evt){
		evt.preventDefault();
		popup.classList.remove("modal-show");
	});
	 var mapLink = document.querySelector(".contacts-button-map");
 	 var mapPopup = document.querySelector(".modal-map");
 	 var mapClose = mapPopup.querySelector(".modal-close");
 	 mapLink.addEventListener("click", function (evt) {
     evt.preventDefault();
     mapPopup.classList.add("modal-show");
     });

    mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    });