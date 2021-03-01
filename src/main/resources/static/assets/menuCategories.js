//const mediaQuery = window.matchMedia('(min-width: 768px)');
////const menunav = document.getElementById("menu-categories");
//
//function changeNavBarColor(mediaQuery) {
//    if (mediaQuery.matches) {

//        menunav.classList.remove("hide");

        window.onscroll = function() { scrollFunction() };
        function scrollFunction() {
            var navbar = document.getElementById("custom-navigation");
            let burgerCategory = document.getElementById("burgerMenu");
            let sidesCategory = document.getElementById("sidesMenu");
            let dessertCategory = document.getElementById("dessertMenu");
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll/height) * 100;
            
            if (scrolled > 2) {
                navbar.classList.add('custom-navbar-scroll'); 
                burgerCategory.classList.add("inactive");
                sidesCategory.classList.add("inactive");
                dessertCategory.classList.add("inactive");

                if (scrolled > 20) {
                    burgerCategory.classList.add("active");
                    sidesCategory.classList.remove("active");
                    sidesCategory.classList.add("inactive");
                    dessertCategory.classList.remove("active");
                    dessertCategory.classList.add("inactive");

                }

                 if (scrolled > 60) {
                    sidesCategory.classList.add("active");
                    burgerCategory.classList.remove("active");
                    burgerCategory.classList.add("inactive");
                    dessertCategory.classList.remove("active");
                    dessertCategory.classList.add("inactive");
                }
                
                if (scrolled > 85) {
                    dessertCategory.classList.add("active");
                    sidesCategory.classList.remove("active");
                    sidesCategory.classList.add("inactive");
                    burgerCategory.classList.remove("active");
                    burgerCategory.classList.add("inactive");

                }
    
            }


            else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
                navbar.classList.remove('custom-navbar-scroll');

            }
        }
//    }
//
//}

//changeNavBarColor(mediaQuery);

