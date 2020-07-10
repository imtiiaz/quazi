$(function () {
  (function () {
    $("#msbo").on("click", function () {
      $("body").toggleClass("msb-x");
    });
  })();

  //menu fix

  $(window).bind("scroll", function () {
    if ($(window).scrollTop()) {
      $("header").addClass("menu_fix");
    } else {
      $("header").removeClass("menu_fix");
    }
  });

  // Smooth Scroll

  $('li>a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });

  // banner slider

  $(".banner_first_slider").slick({
    autoplay: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".banner_second_slider",
  });
  $(".banner_second_slider").slick({
    autoplay: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    asNavFor: ".banner_first_slider",
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // scroll top

  $(".chevron_up").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $(".chevron_up").fadeIn();
    } else {
      $(".chevron_up").fadeOut();
    }
  });

  // Closes responsive menu when a scroll link is clicked

  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
