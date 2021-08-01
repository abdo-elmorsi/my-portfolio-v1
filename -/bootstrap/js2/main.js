var myCarousel = document.querySelector('#carouselEx')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
})
// toggle option box
document.getElementById("setting").onclick = function () {
  this.classList.toggle("fa-spin")
  document.getElementById("color-option").classList.toggle("d-none");
};
//#########@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       color option
var colorLi = document.querySelectorAll(".color-option ul li");
var localColor = localStorage.getItem("color");
colorLi.forEach(ele => {
  ele.addEventListener("click", (e) => {
    document.documentElement.style.setProperty("--COLOR--", e.target.dataset.color);
    localStorage.setItem("color", e.target.dataset.color);
    e.target.parentElement.querySelectorAll("li").forEach(elemnt => {
      elemnt.classList.remove("active");
      e.target.classList.add("active");
    })
  })
  if (localColor !== null) {
    document.documentElement.style.setProperty("--COLOR--", localColor);
    if (ele.dataset.color === localColor) {
      ele.classList.add("active");
    } else {
      ele.classList.remove("active");
    }
  }
})
//#############################################################################   loading page
var buttonScrolll = document.getElementById("buttonScroll");
window.onload = setTimeout(function whait() {
  buttonScrolll.onclick = function () {
    window.scrollTo(0, 0);
  }
  if (window.pageYOffset < 700) {
    buttonScrolll.style.display = "none";
  } else {
    buttonScrolll.style.display = "block";
  }
}, 2000);
window.onscroll = function () {
  if (window.pageYOffset < 700) {
    buttonScrolll.style.display = "none";
  } else {
    buttonScrolll.style.display = "block";
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