
/* Mobile Nav Scroll Colour Change */
window.addEventListener('load', onLoadFunction);
function onLoadFunction(e){
  if(window.innerWidth < 680){
    window.onscroll = function changeClass(){ 

      var scrollPosY = window.pageYOffset | document.body.scrollTop;

      if(scrollPosY > 100) {
        var all = document.getElementsByClassName('link');
          for (var i = 0; i < all.length; i++) {
          all[i].style.color = '#1A284A';
          }
        document.getElementById("navbar").className = "nav-wrap nav-wrap-scroll";
        document.getElementsByClassName("main-nav").className = "main-nav main-nav-scroll";
        document.getElementsByClassName("logo-white")[0].style.display = "none";
        document.getElementsByClassName("logo-navy")[0].style.display = "block";
        document.getElementsByClassName("insta-white")[0].style.display = "none";
        document.getElementsByClassName("twit-white")[0].style.display = "none";
        document.getElementsByClassName("insta-navy")[0].style.display = "block";
        document.getElementsByClassName("twit-navy")[0].style.display = "block";
        document.getElementById("nav-line").style.backgroundColor = "#1A284A";
      
      } else if(scrollPosY <= 100){
        var all = document.getElementsByClassName('link');
          for (var i = 0; i < all.length; i++) {
          all[i].style.color = '#f8f8f8';
          }
        document.getElementById("navbar").className = "nav-wrap";
        document.getElementsByClassName("logo-white")[0].style.display = "block";
        document.getElementsByClassName("logo-navy")[0].style.display = "none";
        document.getElementsByClassName("insta-white")[0].style.display = "block";
        document.getElementsByClassName("twit-white")[0].style.display = "block";
        document.getElementsByClassName("insta-navy")[0].style.display = "none";
        document.getElementsByClassName("twit-navy")[0].style.display = "none";
        document.getElementById("nav-line").style.backgroundColor = "#F8F8F8";
      }
    }
  }
};

window.addEventListener('resize', onResizeFunction);
function onResizeFunction(e){
  if(window.innerWidth < 680){
    window.onscroll = function changeClass(){ 

      var scrollPosY = window.pageYOffset | document.body.scrollTop;

      if(scrollPosY > 100) {
        var all = document.getElementsByClassName('link');
        for (var i = 0; i < all.length; i++) {
        all[i].style.color = '#1A284A';
        }
        document.getElementById("navbar").className = "nav-wrap nav-wrap-scroll";
        document.getElementsByClassName("main-nav").className = "main-nav main-nav-scroll";
        document.getElementsByClassName("logo-white")[0].style.display = "none";
        document.getElementsByClassName("logo-navy")[0].style.display = "block";
        document.getElementsByClassName("insta-white")[0].style.display = "none";
        document.getElementsByClassName("twit-white")[0].style.display = "none";
        document.getElementsByClassName("insta-navy")[0].style.display = "block";
        document.getElementsByClassName("twit-navy")[0].style.display = "block";
        document.getElementById("nav-line").style.backgroundColor = "#1A284A";
      
      } else if(scrollPosY <= 100){
        var all = document.getElementsByClassName('link');
        for (var i = 0; i < all.length; i++) {
        all[i].style.color = '#f8f8f8';
        }
        document.getElementById("navbar").className = "nav-wrap";
        document.getElementsByClassName("logo-white")[0].style.display = "block";
        document.getElementsByClassName("logo-navy")[0].style.display = "none";
        document.getElementsByClassName("insta-white")[0].style.display = "block";
        document.getElementsByClassName("twit-white")[0].style.display = "block";
        document.getElementsByClassName("insta-navy")[0].style.display = "none";
        document.getElementsByClassName("twit-navy")[0].style.display = "none";
        document.getElementById("nav-line").style.backgroundColor = "#F8F8F8";
      }
    }
  }
};

function cocktailScroll() {
  var elmnt = document.getElementById("cocktails");
  elmnt.scrollIntoView();
}

function aboutScroll() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView();
}
