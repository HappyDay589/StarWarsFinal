var bgclr="#FFE81F";
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 4000); // Change image every 4 seconds
}
function mouseoverevent() {
  var all = document.getElementsByClassName('dropbtn');
  for (var i = 0; i < all.length; i++) {
  all[i].style.color = 'red';
}
}
