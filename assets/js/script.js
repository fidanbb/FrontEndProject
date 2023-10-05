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

  $(".open-home").mouseover(function (e) {
    e.preventDefault();
    $(".home-items").removeClass("d-none");
  });

  $(".open-home").mouseout(function (e) {
    e.preventDefault();
    $(".home-items").addClass("d-none");
  });

  $(".home-items").mouseover(function () {
    $(this).removeClass("d-none");
  });

  $(".home-items").mouseout(function () {
    $(this).addClass("d-none");
  });

  $(".open-shop").mouseover(function (e) {
    e.preventDefault();
    $(".shop-items").removeClass("d-none");
  });

  $(".open-shop").mouseout(function (e) {
    e.preventDefault();
    $(".shop-items").addClass("d-none");
  });

  $(".shop-items").mouseover(function () {
    $(this).removeClass("d-none");
  });

  $(".shop-items").mouseout(function () {
    $(this).addClass("d-none");
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

  $(".all-products").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    // prevArrow: $(".prev"),
    // nextArrow: $(".next"),

    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    arrows: true,
    // prevArrow: $(".prev-2"),
    // nextArrow: $(".next-2"),

    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product").mouseover(function () {
    let dataId = $(this).data("id");

    $(".product-icons").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).addClass("transform-product-icons");
      }
    });
  });

  $(".product").mouseout(function () {
    let dataId = $(this).data("id");

    $(".product-icons").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).removeClass("transform-product-icons");
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
