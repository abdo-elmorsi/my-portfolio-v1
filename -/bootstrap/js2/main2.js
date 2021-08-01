var upper = document.querySelector(".upper-bar").clientHeight;
var navb = document.querySelector(".navbar-light").clientHeight;
var h = window.innerHeight;
function myFunction() {
    var slid = document.getElementById("slider").style.height = h - (upper + navb) + 'px';
    var item = document.querySelectorAll(".slider .carousel-item");
    item.forEach(ele => {
        ele.style.height = h - (upper + navb) + 'px';
    })
}
myFunction();

// ################################################################################
document.querySelectorAll(".featured-work li").forEach(ele => {
    ele.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(hide => {
            hide.classList.remove("active");
        });
        e.target.classList.add("active");
        document.querySelectorAll(".showImage .col-md").forEach(imgg => {
            if (e.target.dataset.class === "all") {
                imgg.classList.remove("opacityTow");
                document.querySelectorAll(".showImage .col-md img").forEach(round => {
                    round.classList.remove("round");
                })
            } else {
                imgg.classList.add("opacityTow")
                if (imgg.classList.contains(e.target.dataset.class)) {
                    imgg.classList.remove("opacityTow");
                    document.querySelectorAll(".showImage .col-md img").forEach(round => {
                        round.classList.add("round");
                    })
                };
            };
        });
    });
});
////////////////////////////////    loading     ////////////////////////////////
$(document).ready(function () {
    $('.overlay-loading .loading').delay(1500).fadeOut(2000, function () {
        $('html, body').scrollTop(0);
        $('body').css('overflow-y', 'auto');
        $(this).parent('.overlay-loading').remove();
    });
});