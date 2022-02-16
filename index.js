$(document).ready(function() {
  if (window.matchMedia("(max-width:768px)").matches) {
    // The viewport is less than 768px wide
    $(".hamburger-icon").on("click", function() {
      $(this).css("display", "none");
      $(".close-icon").css("display", "block");
      $(".Intro").css("display", "none");
      $(".register-desktop").css("display", "none");
      $(".register-mobile").css("display", "block");
    });

    $(".close-icon").on("click", function() {
      $(this).css("display", "none");
      $(".hamburger-icon").css("display", "block");
      $(".Intro").css("display", "block");
    });

    $(".editor-desktop").css("display", "none");
    $(".editor-mobile").css("display", "block");

    $(".laptop-desktop").css("display", "none");
    $(".laptop-mobile").css("display", "block");

    $(".col1").css("order", "2");
    $(".col2").css("order", "1");

    $(".arrow").attr("src","images/icon-arrow-dark.svg");
  }

  $(".nav-link").on("click",function(){
    $(".arrow").toggleClass("arrow-transform");
  });

});
