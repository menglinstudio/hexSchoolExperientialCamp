$(document).ready(function () {

  $(".nav-btn").click(function (event) {
    $("body").toggleClass("js-menu-active");
    $(".nav-btn > .material-symbols-rounded").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".gl-overlay").toggleClass("active");
  });

  $(".portfolio-card").click(function (event) {
    $("body").toggleClass("js-menu-active");
    $(".gl-modal").toggleClass("active");
  }); 

  $(".modal-btn-close").click(function (event) {
    $("body").toggleClass("js-menu-active");
    $(".gl-modal").toggleClass("active");
  });

});