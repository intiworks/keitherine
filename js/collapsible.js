window.onload = function(){
	var coll = document.getElementsByClassName("collapsible");
	var i;
	
	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			var fade = this.previousElementSibling;
			if(fade != null){
				fade.classList.toggle("text-fade");
			}
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
	}
};

//REQUIRED DIVS:
//<div class="text-fade color-black collapsible-fade"></div>
//<button class="collapsible">Leer más...</button>
//<div class="collapsible-content color-black" id="collapsible-riesgos">
//</div> <!-- END READ MORE DIV -->
