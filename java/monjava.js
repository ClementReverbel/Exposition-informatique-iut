var header = document.getElementById("myHeader");
var prevScrollpos = window.pageYOffset;
var scrollSpeed = 50; 
var scrolling = false;

window.onscroll = function() {
    if (!scrolling) {
        scrolling = true;

        var currentScrollPos = window.pageYOffset;

        // Gestion de la position du header
        if (prevScrollpos > currentScrollPos || prevScrollpos - currentScrollPos > 10) {
            header.style.top = "0";
        } else {
            header.style.top = "-200px"; 
        }

        // Ralentissement du défilement
        var scrollAmount = (prevScrollpos - currentScrollPos) / scrollSpeed;
        document.documentElement.scrollTop -= scrollAmount;

        prevScrollpos = currentScrollPos;

        setTimeout(function() {
            scrolling = false;
        }, 20); // Attendez 100 millisecondes avant de réinitialiser scrolling à false
    }
}

