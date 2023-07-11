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
  $(".question").click(function () {
    //hide all other paragraphs and remove active class and change icon
    $(".question").not(this).find("p").hide();
    $(".question").not(this).removeClass("active");
    $(".question").not(this).find("i").removeClass("fa-solid fa-minus fa-3x").addClass("fa-solid fa-plus fa-3x");
    $(this).find("p").slideToggle();
    //change background using active clasee
    $(this).toggleClass("active");
    $(this).find("i").toggleClass("fa-solid fa-plus fa-3x fa-solid fa-minus fa-3x");
    
  });
});
