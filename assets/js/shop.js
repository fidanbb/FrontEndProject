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

  //   Shop js

  $(".categories-item label span").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("span-click");
    $(this).parent().toggleClass("label-click");
  });

  // $(".categories-item label").click(function (e) {
  //   e.preventDefault();
  //   $(this).toggleClass("label-click");
  //   $(this).children().toggleClass("span-click");
  // });

  $(".subDropdown.plus").click(function () {
    $(this).addClass("d-none");
    $(this).next().removeClass("d-none");
    let dataId = $(this).data("id");
    console.log(dataId);
    $(".children").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).removeClass("d-none");
      }
    });
  });

  $(".subDropdown.minus").click(function () {
    $(this).addClass("d-none");
    $(this).prev().removeClass("d-none");
    $(".children").addClass("d-none");
  });

  // slider range js

  let min = 10;
  let max = 100;

  const calcLeftPosition = (value) => (100 / (100 - 10)) * (value - 10);

  $("#rangeMin").on("input", function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    min = newValue;
    $("#thumbMin").css("left", calcLeftPosition(newValue) + "%");
    $("#min").html(newValue);
    $("#line").css({
      left: calcLeftPosition(newValue) + "%",
      right: 100 - calcLeftPosition(max) + "%",
    });
  });

  $("#rangeMax").on("input", function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    max = newValue;
    $("#thumbMax").css("left", calcLeftPosition(newValue) + "%");
    $("#max").html(newValue);
    $("#line").css({
      left: calcLeftPosition(min) + "%",
      right: 100 - calcLeftPosition(newValue) + "%",
    });
  });

  // filter by size checbox js

  $(".filter-by-size .size-type span").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("span-click");
    $(this).next().toggleClass("a-click");
  });

  $(".filter-by-size .size-type a").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("a-click");
    $(this).prev().toggleClass("span-click");
  });

  // product-status checkbox js

  $(".product-status .status-type span").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("span-click");
    $(this).next().toggleClass("a-click");
  });

  $(".product-status .status-type a").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("a-click");
    $(this).prev().toggleClass("span-click");
  });

  // products js
  $(".swinger-container").swinger();

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
