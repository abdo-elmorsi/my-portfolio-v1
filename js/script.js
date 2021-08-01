$(document).ready(function () {
  /////////////////// return button  ///////////////////
  let returnn = $(".fa-angle-up");
  returnn.click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  ///////////////////  toggle setting  ///////////////////

  $(".toggle-setting .fa-cog").click(function () {
    $(this).toggleClass("fa-spin");
    $(".setting-box").toggleClass("open");
  });

  ///////////////////  random Background  ///////////////////
  let int;
  function inter() {
    int = setInterval(function frfr() {
      let i = Math.floor(Math.random() * 4) + 1;
      $(".home").css("background-image", `url('images/0${i}.jpg')`);
    }, 5000);
  }
  inter();
  let spans = document.querySelectorAll(".random-background span");
  spans.forEach((span) => {
    span.addEventListener("click", (el) => {
      if (el.target.dataset.background == "no") {
        localStorage.setItem("imgUrl", $(".home").css("background-image"));
        clearInterval(int);
      } else {
        inter();
      }

      localStorage.setItem("randomB", el.target.dataset.background);
      handleActive(el);
    });
  });
  let randomState = localStorage.getItem("randomB");
  if (randomState != null) {
    if (randomState == "yes") {
      $(".random-background .yes").attr("class", "yes active");
      $(".random-background .no").attr("class", "no");
    } else {
      $(".random-background .yes").attr("class", "yes");
      $(".random-background .no").attr("class", "no active");
      clearInterval(int);
    }
    // randomState == 'yes' ? $('.random-background .yes').attr('class', 'yes active') : $('.random-background .no').attr('class', 'no active');
  }

  let imageUrl = localStorage.getItem("imgUrl");
  if (imageUrl != null) {
    $(".home").css("background-image", imageUrl);
  }
  ///////////////////  start switch   color  ///////////////////
  const colorLi = document.querySelectorAll(".color-list li");
  colorLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      document.documentElement.style.setProperty(
        "--main-color",
        e.target.dataset.color
      );
      // add the color to local storage
      localStorage.setItem("color-option", e.target.dataset.color);
      handleActive(e);
    });
  });

  let localMainColor = localStorage.getItem("color-option");
  if (localMainColor !== null) {
    document.documentElement.style.setProperty("--main-color", localMainColor);
    $(".color-list li").each(function () {
      // remove the active from the all elemnt
      $(this).removeClass("active");
      if ($(this).data("color") === localMainColor) {
        $(this).addClass("active");
      }
    });
  }
  ///////////////////  start theme toggler  ///////////////////

  $("#theme-toggler").click(function () {
    $(this).toggleClass("fa-sun fa-moon");
    $("html").toggleClass("dark-theme");
    $("html").hasClass("dark-theme")
      ? localStorage.setItem("theme", "dark-theme")
      : localStorage.setItem("theme", "light-theme");
  });
  let localTheme = localStorage.getItem("theme");
  if (localTheme != null) {
    if (localTheme == "dark-theme") {
      $("html").addClass("dark-theme");
      $("#theme-toggler").attr("class", "fas fa-moon");
    } else {
      $("html").attr("class", "");
      $("#theme-toggler").attr("class", "fas fa-sun");
    }
  }
  ///////////////////  handle active  ///////////////////

  function handleActive(e) {
    $(e.target).siblings().removeClass("active");
    $(e.target).addClass("active");
  }

  ///////////////////  reset option  ///////////////////
  $(".reset-option").click(function () {
    localStorage.clear();
    window.location.reload();
  });

  ///////////////////  toggle menu  ///////////////////
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  ///////////////////  window on scroll  ///////////////////
  $(window).on("scroll load", function () {
    ///////////////////  skils  ///////////////////
    if ($(window).scrollTop() >= $(".about").offset().top - 400) {
      $(".progress .bar span").each(function () {
        $(this).css("width", $(this).data("progress") + "%");
        returnn.slideDown(500);
      });
    } else {
      $(".progress .bar span").each(function () {
        $(this).css("width", "1%");
        returnn.slideUp(500);
      });
    }

    ///////////////////  close on window scroll  ///////////////////

    $(".toggle-setting .fa-cog, .setting-box").removeClass("fa-spin open");
    $("#menu, .navbar").removeClass("fa-times nav-toggle");
  });

  ///////////////////  filter image  ///////////////////
  $(".portfolio .button-container .btn").click(function () {
    let filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".portfolio .image-container .box").show("400");
    } else {
      $(".portfolio .image-container .box")
        .not("." + filter)
        .hide(400);
      $(".portfolio .image-container .box")
        .filter("." + filter)
        .show(400);
    }
  });

  ///////////////////  smoth scroll  ///////////////////

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      800,
      "linear"
    );
  });
  /////////   loading   ///////////////////
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
  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    animationEffect: "slide",
    transitionEffect: "fade",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
  });
  $('[data-fancybox="avatar"]').fancybox({
    buttons: ["close"],
  });
});
//              ajax
function start() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let jsObg = JSON.parse(this.responseText);
      let myname = jsObg[0].name + " ahmed";
      $(".home .person h3").text(myname);
      $(".home .content h3 span").text(myname);
    }
  };
  request.open("GET", "https://api.github.com/users/abdo/repos", true);
  request.send();
}
start();
