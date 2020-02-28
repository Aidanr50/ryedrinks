var ticker = document.querySelector('.insta-wrap')
  , list = document.querySelector('.insta-container')
  , clone = list.cloneNode(true)

ticker.append(clone)

/* Mobile Nav Scroll Colour Change */
window.addEventListener('resize', function(){
  if(window.innerWidth < 680){
    window.onscroll = function changeClass(){ 

      var scrollPosY = window.pageYOffset | document.body.scrollTop;

      if(scrollPosY > 100) {
        document.getElementById("navbar").className = "nav-wrap nav-wrap-scroll";
        document.querySelectorAll(".link")[0].style.color = "#1A284A";
        document.getElementsByClassName("main-nav").className = "main-nav main-nav-scroll";
        document.getElementsByClassName("logo-white")[0].style.display = "none";
        document.getElementsByClassName("logo-navy")[0].style.display = "block";
        document.getElementsByClassName("insta-white")[0].style.display = "none";
        document.getElementsByClassName("twit-white")[0].style.display = "none";
        document.getElementsByClassName("insta-navy")[0].style.display = "block";
        document.getElementsByClassName("twit-navy")[0].style.display = "block";
        document.getElementById("nav-line").style.backgroundColor = "#1A284A";
      
      } else if(scrollPosY <= 100){
        document.getElementById("navbar").className = "nav-wrap";
        document.querySelectorAll(".link")[0].style.color = "#F8F8F8";
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
});