/* global $, alert, consol*/
$(function () {
  "use srtic";
  // Adjust Header Volum
  let myHeader = $(".header"),
    myslider = $(".boxslid");
  myHeader.height($(window).height());
  $(window).resize(function () {
    myHeader.height($(window).height());
    myslider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".boxslid li").height()) / 2
      );
    });
  });
  // Change activity Of Links
  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
  //Adjust boxslid content to center
  myslider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".boxslid li").height()) / 2
    );
  });
  // Run Bxslider
  myslider.bxSlider({
    pager: false,
  });

  //Smooth About
  $(".links li a").click(function () {
    $("html,body").animate(
      { scrollTop: $("#" + $(this).data("value")).offset().top },
      1000
    );
  });
  // Auot Slider Code
  (function auotSlider() {
    $(".slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            auotSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".slider div").eq(0).addClass("active").fadeIn();
          });
      }
    });
  })();
  // trager mixItUp
  $(function () {
    var mixer = mixitup("#container");
  });

  // Trigger Nice Scroll
  $("html").niceScroll({
    cursorcolor: "#1abc9c",
    cursorborder: "1px solid #1abc9c",
    cursorborderradius: 0,
    cursorwidth: "10px",
  });
});
