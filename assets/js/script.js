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

// .main_container::before{
//   display:none;
//   position: fixed;
//   content: "";
//   background-image: url("../images/vectors/Scroll\ down\ arrow.png");
//   width: 175px;
//   height: 100%;
//   top: 800px;
//   right: 0;
//   background-repeat: no-repeat;
//   transform: scaleX(-1);
// }
// .main_container::before show when scrolled 150px down
$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    $(".scrolldown").css("display", "block");
  } else {
    $(".scrolldown").css("display", "none");
  }
}
);

// if scrolldown clicked scroll up to top 
$(".scrolldown").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}
);


