$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 60,
  nav: true,
  autoWidth: false,
  items:2,
  navText: [
    "<img src='assets/images/vectors/left.png'>",
    "<img src='assets/images/vectors/right.png'>",
  ],
});
