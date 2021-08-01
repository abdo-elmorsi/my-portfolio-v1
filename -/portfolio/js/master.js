/////////////////        to hide the navbar and show      //////////////////////////
let header = document.querySelector(".links-container .links");

let headroom = new Headroom(header, { tolerance: { down: 15, up: 30 } });
headroom.init();
/////////////////////////       to amazing text        //////////////////////////////////
var typed = new Typed("#textTyped", {
    strings: [
        "I am a front-end developer with more than two years of experience. I am from Cairo, Egypt, and I create sites for great people around the world to get more and more experiences in developing sites",
    ],
    typeSpeed: 38,
    backSpeed: 25,
    startDelay: 1000,
    loop: true,
    backDelay: 4000,
    showCursor: false,
});
var typed = new Typed(".textTypedTow", {
    strings: [
        "Iam very happy with the product Its amazing and i recieve IT very fast and the price was amazing.",
    ],
    typeSpeed: 38,
    backSpeed: 25,
    startDelay: 1000,
    loop: true,
    backDelay: 17000,
    showCursor: false,
});
var typed = new Typed(".textTypedThree", {
    strings: [
        "Iam very happy with the product Its amazing and i recieve IT very fast and the price was amazing.",
    ],
    typeSpeed: 38,
    backSpeed: 25,
    startDelay: 7000,
    loop: true,
    backDelay: 11000,
    showCursor: false,
});
var typed = new Typed(".textTypedFour", {
    strings: [
        "Iam very happy with the product Its amazing and i recieve IT very fast and the price was amazing.",
    ],
    typeSpeed: 38,
    backSpeed: 25,
    startDelay: 13000,
    loop: true,
    backDelay: 5000,
    showCursor: false,
});
/////////////////        to save color in local storage       //////////////////////////
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
    document.documentElement.style.setProperty("--colorR--", mainColor);

    document.querySelectorAll(".color-list li").forEach((element) => {
        // remove the active from the all elemnt
        element.classList.remove("active");

        if (element.dataset.color === mainColor) {
            element.classList.add("active");
        }
    });
}
///////////////////     to open the setting       /////////////////////
$(".toggle-setting .fa-cog").click(function () {
    $(this).toggleClass("fa-spin");
    $(".setting-box").toggleClass("open");
});
///////////////////  switch   color  ///////////////////
const colorLi = document.querySelectorAll(".color-list li");

colorLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty(
            "--colorR--",
            e.target.dataset.color
        );

        // add the color to local storage
        localStorage.setItem("color-option", e.target.dataset.color);

        handleActive(e);
    });
});
//##########################################################################    background    #############
///////////////////  switch   background option  ///////////////////

let backgroundInterval;

let backgroundOpion = true;

let backgrounLocakItem = localStorage.getItem("background_option");
let randomBackgroundEl = document.querySelectorAll(".random-background span");

if (backgrounLocakItem !== null) {
    randomBackgroundEl.forEach((span) => {
        span.classList.remove("active");
    });

    if (backgrounLocakItem === "true") {
        backgroundOpion = true;
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        backgroundOpion = false;
        document.querySelector(".random-background .no").classList.add("active");
    }
}
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     active on span */
randomBackgroundEl.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (e.target.dataset.background === "yes") {
            backgroundOpion = true;
            randomizeImg();

            localStorage.setItem("background_option", true);
        } else {
            backgroundOpion = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

            localStorage.setItem("background-co", landingPage.style.backgroundImage);
        }
        handleActive(e);
    });
});
///////////////////////////////// to change background imags  loop   /////////////////
let landingPage = document.querySelector(".landing-page");

landingPage.style.backgroundImage = localStorage.getItem("background-co");

function randomizeImg() {
    if (backgroundOpion == true) {
        backgroundInterval = setInterval(function () {
            let random = Math.ceil(Math.random() * 4);

            landingPage.style.backgroundImage =
                'url("../../../images/0' + random + '.jpg")';
        }, 5000);
    }
}
randomizeImg();
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     select skils selectors
// select skils selectors
let ourSkills = document.querySelector(".skills");
//  buttom to scroll top
window.onscroll = function () {
    // skills offSet top    المسافه اللي فوقيه لحد الاخر
    let skillsOffSetTop = ourSkills.offsetTop;
    /* skills Outer Height  بتاعها هي height حجم ال
      let skillsOuterHeight = ourSkills.offsetHeight;
      // window Height    بتاع الويندو height حجم ال
      let windowHeight = window.innerHeight;*/
    // window scrollTop    بتاع الصفحه  height مكان ال
    let windowScrollTop = window.pageYOffset;

    if (windowScrollTop > skillsOffSetTop - 380) {
        let allSkills = document.querySelectorAll(
            ".skill-box .skill-progress span"
        );

        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.progress;
        });
    }
    if (windowScrollTop < skillsOffSetTop - 380) {
        let allSkills = document.querySelectorAll(
            ".skill-box .skill-progress span"
        );

        allSkills.forEach((skill) => {
            skill.style.width = 0;
        });
    }
};
//##############################################################################  nav bullets
// Selext All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");
const alllinks = document.querySelectorAll(".landing-page li");

function scrollIntoView(elements) {
    elements.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            //e.preventDefault();   دي عشان تمنع الافتراضي دا لو لينك

            document
                .querySelector(e.target.dataset.section)
                .scrollIntoView({ behavior: "smooth" });
        });
    });
}
scrollIntoView(alllinks);
scrollIntoView(allBullets);
//####################################################################

function handleActive(e) {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
    });
    e.target.classList.add("active");
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        show bullets and hide
// show bullets and hide
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");

let localBullets = localStorage.getItem("bullets-option");

if (localBullets !== null) {
    bulletsSpan.forEach((span) => {
        span.classList.remove("active");
    });

    if (localBullets == "block") {
        bulletsContainer.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}
bulletsSpan.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "show") {
            bulletsContainer.style.display = "block";

            localStorage.setItem("bullets-option", "block");
        } else {
            bulletsContainer.style.display = "none";

            localStorage.setItem("bullets-option", "none");
        }
        handleActive(e);
    });
});
//  ################################ Reset Button
document.querySelector(".reset-option").onclick = function () {
    window.location.reload();
    localStorage.clear();
    window.scrollTo(0, 0);
};
// #############################################################################    toggle menu
let toggleBtn = document.querySelector(".toggle-menue");

let tLinks = document.querySelector(".links");

let transFtext = $(".intriduction-text");

toggleBtn.onclick = function (e) {
    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
};
document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== tLinks) {
        if (tLinks.classList.contains("open")) {
            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open");
        }
    }
});
//#############################################################################   loading page

$(document).ready(function () {
    ////////////////////////////////    loading     ////////////////////////////////
    $(".overlay-loading")
        .delay(2000)
        .fadeOut(2000, function () {
            $("html").css("overflow-y", "scroll");
            $(this).remove();
        });
    $("div").each(function () {
        if ($(this).css("zIndex") == 9999999) {
            $(this)
                .delay(3000)
                .fadeOut(500, function () {
                    $(this.remove());
                });
        }
    });
    // #######################################################  dont move image
    $("img").attr({ draggable: "false" });
    //  ########################    add img-details
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
    //  ######################################################   show more of image
    $(".show-more").on("click", function () {
        if ($(this).text() == "show more") {
            $(".item.hidden").slideDown(1000);
            $(this).text("hide");
        } else {
            $(".item.hidden").slideUp(1000);
            $(this).text("show more");
        }
    });
    // ###################################################    return
    $(document).scroll(function () {
        if ($("html").scrollTop() < 1500) {
            $(".return").slideUp(500);
        } else {
            $(".return").slideDown(500);
        }
    });
    if ($("html").scrollTop() < 1000) {
        $(".return").hide();
    }
    $(".return").click(function () {
        $("html").animate(
            {
                scrollTop: 0,
            },
            1500
        );
    });
    // #########################################    return
});
