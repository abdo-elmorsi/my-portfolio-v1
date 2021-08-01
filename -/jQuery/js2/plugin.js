//  ############################   header hieght and add tags
$(document).ready(function () {
    $(".header").height($(window).height());

    let hei = ($(window).height() - $(".intro").height()) / 2;
    $(".intro").offset({ top: hei });

    //  ############################   click to hire us
    $(".our-work").click(function () {
        $("html").animate(
            {
                scrollTop: $(".our-works").offset().top,
            },
            1500
        );
    });
    //  ############################   click to hire us
    $(".hire-us").click(function () {
        $("html").animate(
            {
                scrollTop: $(".our-team").offset().top,
            },
            2000
        );
    });

    //  ############################   click to features
    $(".arrow").click(function () {
        $("html").animate(
            {
                scrollTop: $(".features").offset().top,
            },
            1200
        );
    });

    //  ############################   hover on image
    $(
        "<div class='img-details'><h3>head test</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem dignissimos excepturi</p><button>click</button></div>"
    ).appendTo($(".item"));

    $(".item").hover(
        function () {
            $(this).animate({ marginTop: -25 }, 500);
            $(this)
                .children(".img-details")
                .delay(300)
                .animate({ top: 0, right: 0 }, 500);
        },
        function () {
            $(this).children(".img-details").stop();
            $(this).children(".img-details").animate({ top: -150, right: -251 }, 500);

            $(this).delay(500).animate({ marginTop: 0 }, 500);
        }
    );

    //  ############################   show more of image
    $(".show-more").on("click", function () {
        if ($(this).text() == "show more") {
            $(".item.hidden").slideDown(1000);
            $(this).text("hide");
        } else {
            $(".item.hidden").slideUp(1000);
            $(this).text("show more");
        }
    });

    //  ############################   testemonials page
    let next = $(".testim .next"),
        prev = $(".testim .prev");
    function check() {
        $(".client:first").hasClass("active")
            ? prev.fadeOut("fast")
            : prev.fadeIn("fast");
        $(".client:last").hasClass("active")
            ? next.fadeOut("fast")
            : next.fadeIn("fast");
    }
    check();

    $(".testim i").click(function () {
        if ($(this).hasClass("next")) {
            $(".testim .active").slideUp(400, function () {
                $(this)
                    .removeClass("active")
                    .next(".client")
                    .addClass("active")
                    .slideDown(1000);
                check();
            });
        } else {
            $(".testim .active").slideUp(400, function () {
                $(this)
                    .removeClass("active")
                    .prev(".client")
                    .addClass("active")
                    .slideDown(1000);
                check();
            });
        }
    });
});
////////////////////////////////    loading     ////////////////////////////////
$(document).ready(function () {
    $(".overlay-loading")
        .delay(2000)
        .fadeOut(2000, function () {
            $("html").css("overflow-y", "scroll");
            $(this).remove();
        });
    $("div").filter(function () {
        if ($(this).css("z-index") == "9999999") {
            $(this).delay(2000, function () {
                $(this).remove();
            });
        }
    });
});
