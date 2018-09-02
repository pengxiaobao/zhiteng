$(function() {

  function A() {
    if ($(".content-form").fadeOut) {
      $(window).scrollTop() <= ($(window).height() / 2) ? $(".content-form").fadeOut() : $(window).height() + $(window).scrollTop() >= $(".footer-wrap").offset().top ? $(".content-form").fadeOut() : $(".content-form").fadeIn()
    }
  }

  $(window).resize(function() {
    A();
  });

  $(window).on("scroll", function() {
    A();
  });

  A();



  $("#submit").click(function() {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var city = $("#city").val().trim();
    console.log(name, phone, city);
  });

});