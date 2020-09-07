//<div id="myModal" class="lightboxmodal">
var myModal = document.createElement("div");
var samplesSize = 4;
myModal.id = "myModal";
myModal.className = "lightboxmodal";

//<span class="close cursor" onclick="closeModal()">&times;</span>
var closeModal = document.createElement("span");
closeModal.onclick = "closeModal()";
closeModal.innerHTML = "&times;";
closeModal.className = "close cursor";
myModal.appendChild(closeModal);

//<div class="modalcontent">
var modalContent = document.createElement("div");
modalContent.className = "modalcontent";
myModal.appendChild(modalContent);

//<div class="mySlides">
//  <div class="numbertext">1 / 4</div>
//  <img src="img/modal3/1.jpg" class="modal-img" id="slide1">
//</div>
for (let index = 0; index < samplesSize; index++) {
    var mySlides = document.createElement("div");
    mySlides.className = "mySlides";
    modalContent.appendChild(mySlides);

    var numberText = document.createElement("div");
    numberText.className = "numbertext";
    numberText.innerHTML = index + " / " + samplesSize;
    mySlides.appendChild(numberText);

    var img = document.createElement("img");
    img.src = "img/modal3/" + index+1 + ".jpg";
    img.className ="modal-img";
    img.id = "slide"+index+1;
    mySlides.appendChild(img);
}

//<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//<a class="next" onclick="plusSlides(1)">&#10095;</a>
var prev = document.createElement("a");
prev.className = "prev";
prev.onclick = "plusSlides(-1)";
prev.innerHTML = "&#10094;";

var next = document.createElement("a");
next.className = "next";
next.onclick = "plusSlides(1)";
next.innerHTML = "&#10095;";

modalContent.appendChild(prev);
modalContent.appendChild(next);

//<div class="caption-container">
//  <p id="caption"></p>
//</div>
var captioncontainer = document.createElement("div");
captioncontainer.className = "caption-container";
modalContent.appendChild(captioncontainer);

var caption = document.createElement("p");
caption.id = "caption";
captioncontainer.appendChild(caption);

//<div class="modalcolumn">
//    <img class="thumbs" src="img/modal3/1.jpg" onclick="currentSlide(1)" alt="1">
//</div>
for (let index = 0; index < samplesSize; index++) {
    var modalColumn = document.createElement("div");
    modalColumn.className = "modalcolumn";
    modalContent.appendChild(modalColumn);

    var thumbs = document.createElement("img");
    thumbs.src = "img/modal3/" + index+1 + ".jpg";
    thumbs.onclick = "currentSlide(" + index+1 + ")";
    thumbs.alt = index;
    modalColumn.appendChild(thumbs);
}

document.getElementById("page-top").appendChild(myModal);