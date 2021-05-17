var hidden =true;

$(document).ready(function () {
    $("#filler").hide();  

});

$("body").scroll(function () { 
    document.getElementById("ink1").style.transform = "translateY(-100%)";
    document.getElementById("ink1").style.opacity = "100%";
    document.getElementById("ill1").style.opacity = "100%";
    console.log("scroll")
    document.getElementById("nav").style.position="fixed";
    document.getElementById("nav").style.width="100%"
    document.getElementById("nav").style.backgroundColor="black"
    document.getElementById("nav").style.top="0";
    document.getElementById("nav").style.left="0";
    document.getElementById("nav").style.padding="0";
    document.querySelector("#scrolldown").style.opacity="0%"
    $("#filler").show();  
});


document.getElementById("contactme").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("section8").scrollIntoView({behavior: "smooth"});
})


document.getElementById("abt").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("section2").scrollIntoView({behavior: "smooth"});
})

document.getElementById("prj").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("section6").scrollIntoView({behavior: "smooth"});
})

document.getElementById("cnt").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("section8").scrollIntoView({behavior: "smooth"});
})


$("#ham").click(function (e) { 
    e.preventDefault();
    console.log("clicked");
    $("#nav>li").toggle();
});

$(window).resize(function () { 
    if($(window).width()>599){
        $("#nav>li").show();
    }
    else{
        $("#nav>li").hide();
    }
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}