$(document).ready(function() {
  $(".header").on('click', function() {
    $(".menu").toggleClass("active");
    $("p, .image, .integration, .js, .cms, .je").toggleClass("hiden");
    $(".container-fluid").toggleClass("left");
    $(".hamb").toggleClass("cross");
  });
})
