// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //   sau
    document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("navbar").style.background ="rgba(0, 0, 0, 1)";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.color = "white";
  } else {
    //   trước  
    document.getElementById("navbar").style.padding = "60px 10px";
    // document.getElementById("navbar").style.background ="rgba(0, 0, 0, 0)";
    document.getElementById("logo").style.fontSize = "70px";
  }
}