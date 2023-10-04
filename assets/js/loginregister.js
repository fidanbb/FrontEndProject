$(document).ready(function () {
  // header js

  $(".lang a").hover(function (e) {
    e.preventDefault();
    $(".lang-items").toggleClass("d-none");
  });

  $(".currency a").hover(function (e) {
    e.preventDefault();

    $(".currency-items").toggleClass("d-none");
  });

  $(".lang-items").hover(function () {
    $(this).toggleClass("d-none");
  });

  $(".currency-items").hover(function () {
    $(this).toggleClass("d-none");
  });

  $(".social-media a").click(function (e) {
    e.preventDefault();

    $(".social-media-items").toggleClass("d-none");
    e.stopPropagation();
  });

  $(".open-sidebar").click(function (e) {
    $(".menu-sidebar").removeClass("transform-sidebar");
    $(".sidebar-overlay").removeClass("d-none");
    e.stopPropagation();
  });

  $(".sidebar-closer i").click(function (e) {
    $(".menu-sidebar").addClass("transform-sidebar");
    $(".sidebar-overlay").addClass("d-none");
    e.stopPropagation();
  });

  $(".open-home").hover(function (e) {
    e.preventDefault();
    $(".home-items").toggleClass("d-none");
  });

  $(".home-items").hover(function () {
    $(this).toggleClass("d-none");
  });

  $(".open-shop").hover(function (e) {
    e.preventDefault();
    $(".shop-items").toggleClass("d-none");
  });

  $(".shop-items").hover(function () {
    $(this).toggleClass("d-none");
  });

  $(".open-search").click(function (e) {
    e.preventDefault();
    $(this).addClass("d-none");
    $(".close-search").removeClass("d-none");
    $(".search-items").removeClass("d-none");
    $("main").addClass("d-none");
    $("footer").addClass("d-none");
  });

  $(".close-search2").click(function (e) {
    e.preventDefault();
    $(".open-search").removeClass("d-none");
    $(".close-search").addClass("d-none");
    $(".search-items").addClass("d-none");
    $("main").removeClass("d-none");
    $("footer").removeClass("d-none");
  });

  //   login-register js

  $(".site-login-overflow ul li a").click(function (e) {
    e.preventDefault();
    $(".active-tab").removeClass("active-tab");
    $(this).addClass("active-tab");

    let dataId = $(this).data("id");

    console.log($(".login-form-container div"));

    $(".login-form-container div").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).addClass("active");
        $(".login-form-container div").addClass("transform-register");
      } else {
        $(this).removeClass("active");
        $(".login-form-container div").removeClass("transform-register");
      }
    });
  });

  $($("body")).click(function () {
    if (!$(".social-media-items").hasClass("d-none")) {
      $(".social-media-items").addClass("d-none");
    }

    if (
      !$(".menu-sidebar").hasClass("transform-sidebar") ||
      !$(".social-media-items").hasClass("d-none")
    ) {
      $(".menu-sidebar").addClass("transform-sidebar");
      $(".sidebar-overlay").addClass("d-none");
    }
  });
});
