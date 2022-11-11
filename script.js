
let sliderContainer = document.querySelector('.slider'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    slideItems = document.querySelectorAll('.slide'),
    current = 0;

slideItems.forEach( item => {
    item.addEventListener("mouseover", function() {
        prev.style.display="block";
        next.style.display="block";
    })
})

slideItems.forEach(item => {
    item.addEventListener("mouseout", function(){
        prev.style.display="none";
        next.style.display="none";
    });
});

prev.addEventListener("mouseover", function(){
    prev.style.display="block";
    next.style.display="block";
});

next.addEventListener("mouseover", function(){
    prev.style.display="block";
    next.style.display="block";
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}