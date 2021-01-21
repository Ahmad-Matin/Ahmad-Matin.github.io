window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var navbar = document.getElementById("custom-navigation");
    var navlink = document.querySelector("a.navbar-dark.navbar-nav.nav-link");
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)  {
      navbar.classList.add('custom-navbar-scroll');

    }
    else if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500)  {
        navbar.classList.remove('custom-navbar-scroll');
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