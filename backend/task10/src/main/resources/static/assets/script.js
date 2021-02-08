window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var navbar = document.getElementById("custom-navigation");
    var navlinks = document.querySelectorAll(".navbar-dark .navbar-nav .nav-link");

    
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)  {
      navbar.classList.add('custom-navbar-scroll');
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white";
      }

    }
    else if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500)  {
        navbar.classList.remove('custom-navbar-scroll');
        for (let i = 0; i < navlinks.length; i++) {
          navlinks[i].style.color = "white";
        }
      }
}

/*When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function menuScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
*/