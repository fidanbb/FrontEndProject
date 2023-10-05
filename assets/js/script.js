$(document).ready(function () {
  //header js
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

  //slider section
  const swiper = new Swiper(".slider-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $("#slider").hover(function () {
    $("#slider .swiper-button-prev").toggleClass("d-none");
    $("#slider .swiper-button-next").toggleClass("d-none");
  });

  //products section
  var swiperProducts = new Swiper(".swiper-products", {
    loop: true,
    // centeredSlides: true,
    // Infinity: true,
    // slidesPerView: 4,
    // slidesPerGroup: 4,
    // spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      766: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".all-products").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });

  $(".swinger-container").swinger();

  // Brands Slider part

  $(".all-brands").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  });

  //products section 2

  $(".all-products-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: $(".prev-2"),
    nextArrow: $(".next-2"),
  });

  $(".product").hover(function () {
    let dataId = $(this).data("id");

    $(".product-icons").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).toggleClass("transform-product-icons");
      }
    });
  });

  // product detail js

  let product = [];

  $(".product-detail h3").click(function () {
    let productName = $(this).text();
    let productPrice = $(this).next().next().text();
    let productId = $(this).parent().parent().data("id");
    let allImages = $(this).closest(".product").find(".product-images img");
    let productImages = [];
    $(allImages).each(function () {
      var src = $(this).attr("src");

      productImages.push(src);
    });

    product = [];

    product.push({
      id: productId,
      name: productName,
      price: productPrice,
      images: productImages,
    });

    console.log(product);

    localStorage.setItem("product", JSON.stringify(product));
  });

  $(".swinger-container").click(function () {
    let productName = $(this).parent().next().find("h3").text();
    let productPrice = $(this).parent().next().find("span")[2].innerText;
    let productId = $(this).parent().parent().data("id");

    let allImages = $(this).find("img");
    let productImages = [];
    $(allImages).each(function () {
      var src = $(this).attr("src");

      productImages.push(src);

      product = [];

      product.push({
        id: productId,
        name: productName,
        price: productPrice,
        images: productImages,
      });

      console.log(product);

      localStorage.setItem("product", JSON.stringify(product));
    });
  });

  // body js
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
