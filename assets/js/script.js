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
    $(".question").not(this).find("p").slideUp();
    $(".question").not(this).removeClass("active");
    $(".question").not(this).find("i").removeClass("fa-solid fa-minus fa-2x").addClass("fa-solid fa-plus fa-2x");
    $(this).find("p").slideToggle();
    //change background using active clasee
    $(this).toggleClass("active");
    $(this).find("i").toggleClass("fa-solid fa-plus fa-2x fa-solid fa-minus fa-2x");
    
  });
});


// .main_container::before show when scrolled 150px down
$(window).scroll(function () {
  if ($(window).scrollDown() > 150) {
    $(".main_container").addClass("scrolled");
  } else {
    $(".main_container").removeClass("scrolled");
  }
}
);

