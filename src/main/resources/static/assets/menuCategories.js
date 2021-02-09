const mediaQuery = window.matchMedia('(min-width: 481px)');

function changeNavBarColor(mediaQuery) {
    if (mediaQuery.matches) {
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            var navbar = document.getElementById("custom-navigation");
            let burgerCategory = document.getElementById("burgerMenu");
            let sidesCategory = document.getElementById("sidesMenu");
            let dessertCategory = document.getElementById("dessertMenu");

            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                navbar.classList.add('custom-navbar-scroll'); 

                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    burgerCategory.classList.add("active", "black-font");
                    sidesCategory.classList.remove("active", "black-font");
                    sidesCategory.classList.add("white-font");
                    dessertCategory.classList.remove("active", "black-font");
                    dessertCategory.classList.add("white-font");

                }

                 if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
                    sidesCategory.classList.add("active", "black-font");
                    burgerCategory.classList.remove("active", "black-font");
                    burgerCategory.classList.add("white-font");
                    dessertCategory.classList.remove("active", "black-font");
                    dessertCategory.classList.add("white-font");
                }

                if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
                    dessertCategory.classList.add("active", "black-font");
                    sidesCategory.classList.remove("active", "black-font");
                    sidesCategory.classList.add("white-font");
                    burgerCategory.classList.remove("active", "black-font");
                    burgerCategory.classList.add("white-font");

                }

            }


            else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
                navbar.classList.remove('custom-navbar-scroll');

            }
        }
    }

}

changeNavBarColor(mediaQuery);

// add animation
// add cart nav button 