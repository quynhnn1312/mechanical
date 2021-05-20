window.onscroll = function () {
  myFunction();
};

const header = document.querySelector(".main-nav-area");
const sticky = header.offsetTop;

const logo = document.getElementById("logo");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo.style.width = "150px";
  } else {
    header.classList.remove("sticky");
    logo.style.width = "unset";
  }
}

$(document).ready(function ($) {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-carousel.infrastructure-slider").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    responsive: {
      600: {
        items: 4,
      },
    },
  });

  $(".carousel").swipe({
    swipe: function (event, direction) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical",
  });
});

const owl = $(".owl-carousel.infrastructure-slider");
owl.owlCarousel();
// Go to the next item
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".customPrevBtn").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
