$(document).ready(function () {
    function closeNav() {
    $("nav").removeClass("active");
    $(".hamburger-menu").removeClass("active");
    $("body").removeClass("menu-open");
  }
  
    $(".hamburger-menu.active").on("click", function () {
    closeNav();
  });
      
  $(".hamburger-menu").not('.active').on("click", function () {
    $(this).addClass("active");
    $("nav").addClass("active");
    $("body").addClass("menu-open");
  });
  

  
  $(".nav-links > a").on("click", function () {
    closeNav();
  });
  
});