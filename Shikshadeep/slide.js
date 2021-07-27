var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function menuu(){
  var navv = document.getElementsByClassName('wrap_navbar');
   for (var i=0;i<navv.length;i+=1){
     var navdisplay = navv[i].style.display;
  var elems=document.getElementsByClassName("wrap_navbar");
  if (navdisplay=='none'){
    for (var i=0;i<elems.length;i+=1){
       elems[i].style.display = 'block';
    }
  }
  else{
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = 'none';
    }
  }
}
}
