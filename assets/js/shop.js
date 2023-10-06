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

  // product detail modal js

  $(".open-modal").click(function (e) {
    e.preventDefault();
    $(".detail-modal").removeClass("d-none");
    $(".modal-overlay").removeClass("d-none");
    let productId = $(this).parent().parent().data("id");
    let productName = $(this).parent().prev().find("h3").text();
    let productPrice = $(this).parent().prev().find("span")[2].innerText;
    let allImages = $(this).closest(".product").find(".product-images img");
    let productImages = [];
    $(allImages).each(function () {
      var src = $(this).attr("src");
      productImages.push(src);
    });

    document.querySelector(".product-name").innerHTML = productName;
    document.querySelector(".price").innerHTML = productPrice;
    let imageContainer = document.querySelector(".product-image");
    let imageContainer2 = document.querySelector(".slider-nav-thumbnails");

    if ($(".product-image").hasClass("slick-initialized")) {
      $(".product-image").slick("unslick");
    }

    if ($(".slider-nav-thumbnails").hasClass("slick-initialized")) {
      $(".slider-nav-thumbnails").slick("unslick");
    }

    $(".product-image").empty();
    $(".slider-nav-thumbnails").empty();

    for (let i = 0; i < productImages.length; i++) {
      let img1 = document.createElement("img");
      img1.src = productImages[i];
      imageContainer.appendChild(img1);

      let img2 = document.createElement("img");
      img2.src = productImages[i];
      imageContainer2.appendChild(img2);
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
      focusOnSelect: true,
      asNavFor: ".product-image",
    });
  });

  $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");

  $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

  $(".slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
      $(".slider-nav-thumbnails .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active");
    }
  );

  $(".close-modal").click(function (e) {
    e.preventDefault();
    $(".detail-modal").addClass("d-none");
    $(".modal-overlay").addClass("d-none");
  });

  // wishlist js

  let wishlist = [];

  if (localStorage.getItem("wishlist") != null) {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
  }

  $(".fa-heart").each(function () {
    let productId = $(this).parent().parent().data("id");
    for (const item of wishlist) {
      if (item.id === productId) {
        $(this).removeClass("fa-regular");
        $(this).addClass("fa-solid");
      }
    }
  });

  $(".heart-icon-count").text(wishlist.length);

  $(".fa-heart").click(function () {
    let productName = $(this).parent().prev().find("h3").text();
    let productImage = $(this)
      .closest(".product")
      .find(".product-images img")[0]
      .getAttribute("src");
    let productPrice = $(this).parent().prev().find("span")[2].innerHTML;

    let year = new Date().getFullYear();
    let month = new Date().toLocaleString("default", { month: "long" });
    let day = new Date().getDate();

    let productDate = month + " " + day + ", " + year;

    let productId = $(this).parent().parent().data("id");

    let existedProduct = wishlist.find((m) => m.id == productId);

    if (existedProduct != undefined) {
      console.log("this product exist");

      Swal.fire({
        position: "top-center",
        icon: "error",
        text: productName + "is already in wishlist",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      wishlist.push({
        id: productId,
        name: productName,
        price: productPrice,
        date: productDate,
        image: productImage,
      });
      $(this).removeClass("fa-regular");
      $(this).addClass("fa-solid");

      Swal.fire({
        position: "top-center",
        icon: "success",
        text: productName + "added to wishlist",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    $(".heart-icon-count").text(wishlist.length);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
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
