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

  // product detail slider

  $(".swinger-container").swinger();

  $(".product").hover(function () {
    let dataId = $(this).data("id");

    $(".product-icons").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).toggleClass("transform-product-icons");
      }
    });
  });

  //taking product details js

  let product = JSON.parse(localStorage.getItem("product"));

  for (const item of product) {
    document.querySelector(".product-name").innerHTML = item.name;
    document.querySelector(".price").innerHTML = item.price;
    let imageContainer = document.querySelector(".product-image");
    let thumbnailContainer = document.querySelector(".slider-nav-thumbnails");

    for (let i = 0; i < item.images.length; i++) {
      let img = document.createElement("img");
      img.src = item.images[i];
      imageContainer.appendChild(img);

      let thumbnailImg = document.createElement("img");
      thumbnailImg.src = item.images[i];
      thumbnailContainer.appendChild(thumbnailImg);
    }

    $(".product-image").slick({
      infinite: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      asNavFor: ".slider-nav-thumbnails",
    });

    $(".slider-nav-thumbnails").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".product-image",
      dots: true,
      focusOnSelect: true,
    });

    $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
    $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

    $(".product-image").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
        $(".slider-nav-thumbnails .slick-slide")
          .eq(mySlideNumber)
          .addClass("slick-active");
      }
    );
  }

  $(".product-image img").each(function () {
    $(this).extm({
      zoomSize: 1200,
      position: "overlay",
    });
  });

  let wislist = [];

  if (localStorage.getItem("wishlist") != null) {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
  }
  $(".heart-icon-count").text(wishlist.length);

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
