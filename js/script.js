$(document).ready(function() {
  $(".header").on('click', function() {
    $(".menu").toggleClass("active");
    $("p").toggleClass("hiden");
    $(".hamb").toggleClass("cross");
  });
})
