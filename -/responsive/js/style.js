$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide(500);
        $('.' + $(this).data('class')).fadeIn(800);
    });
});
var ul = document.getElementById("ull"),
    h33 = document.getElementById("hhh"),
    returnn = document.getElementById("return"),
    button = document.getElementById("buttonOne");

button.onclick = function () {
    $(this).fadeOut();
    $(h33).slideDown(800);
    $(ul).slideDown(800);

    // ull.style.display = "block";
};
h33.onclick = function () {
    $(this).hide();
    $(button).fadeIn();
    $(ul).slideUp(800);
};

returnn.onclick = function () {

    window.scrollTo(0, 0);
}
window.onload = function () {
    if (window.scrollY <= 1000) {
        returnn.style.display = "none";
    } else {
        returnn.style.display = "block";
    }
}
window.onscroll = function scrolll() {
    if (window.scrollY <= 1000) {
        returnn.style.display = "none";
    } else {
        returnn.style.display = "block";
    }
};
////////////////////////////////    loading     ////////////////////////////////
$(document).ready(function () {
    $('.overlay-loading .loading').delay(1500).fadeOut(2000, function () {
        $('html, body').scrollTop(0);
        $('body').css('overflow-y', 'auto');
        $(this).parent('.overlay-loading').remove();
    });
});