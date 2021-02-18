window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var navbar = document.getElementById("custom-navigation");
    var navlinks = document.querySelectorAll(".navbar-dark .navbar-nav .nav-link");

    
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)  {
      navbar.classList.add('custom-navbar-scroll');

    }
    else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100)  {
        navbar.classList.remove('custom-navbar-scroll');

      }
}
