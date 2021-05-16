$(".carousel").swipe({
  swipe: function (event, direction) {
    if (direction == "left") $(this).carousel("next");
    if (direction == "right") $(this).carousel("prev");
  },
  allowPageScroll: "vertical",
});

// window.onscroll = function () {
//   myFunction();
// };

// const header = document.querySelector(".main-nav-area");
// const sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
