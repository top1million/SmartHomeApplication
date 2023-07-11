$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 60,
  nav: true,
  autoWidth: false,
  items: 2,
  navText: [
    "<img src='assets/images/vectors/left.png'>",
    "<img src='assets/images/vectors/right.png'>",
  ],
});

$(document).ready(function () {
  $("div.question i.fa-plus").click(function () {
    $("div.question p").toggle();
    $(this).toggleClass("fa-plus fa-minus");
  });
});
