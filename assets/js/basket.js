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

  let wislist = [];

  if (localStorage.getItem("wishlist") != null) {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
  }

  $(".heart-icon-count").text(wishlist.length);

  // progress.style.width = progress.getAttribute("data-done") + "%";
  // progress.style.opacity = 1;

  // basket js

  let basket = [];

  if (localStorage.getItem("basket") != null) {
    basket = JSON.parse(localStorage.getItem("basket"));
    $("#empty-basket").addClass("d-none");
    $("#basket").removeClass("d-none");
  } else {
    $("#empty-basket").removeClass("d-none");
    $("#basket").addClass("d-none");
  }

  if (basket.length == 0) {
    $("#empty-basket").removeClass("d-none");
    $("#basket").addClass("d-none");
  }

  function basketCount() {
    let basketCount = 0;
    for (const item of basket) {
      basketCount += item.count;
    }
    return basketCount;
  }

  document.querySelector(".basket-icon-count").innerText = basketCount();

  let tableBody = document.querySelector("table tbody");

  for (const item of basket) {
    tableBody.innerHTML += `
    <tr>
    <td class="product-remove">
      <i data-id="${item.id}" class="fa-solid fa-xmark"></i>
    </td>
    <td class="product-image">
      <img src="${item.image}" alt="" />
    </td>
    <td class="product-name"
      <a href="">${item.name}</a>
    </td>
    <td class="product-price">
      <span
        >$<span>${item.price}</span>
      </span>
    </td>
    <td class="product-quantity">
      <div class="quantity">
        <i data-id="${item.id}" class="fa-solid fa-minus"></i>
        <span>${item.count}</span>
        <i data-id="${item.id}" class="fa-solid fa-plus"></i>
      </div>
    </td>
    <td class="product-subtotal">
      <span>$</span>
      <span>${item.count * item.price}</span>  
    </td>
  </tr>
      `;
  }

  // total price and shipping checking price

  function getSubTotalPrice(products) {
    let subTotal = 0;

    for (const product of products) {
      subTotal += product.price * product.count;
    }

    document.querySelector(".price").innerText = Math.round(subTotal);
    document.querySelector(".last-price").innerText = Math.round(subTotal + 15);

    return subTotal;
  }

  getSubTotalPrice(basket);

  function checkFreeShipping() {
    let total = 0;
    let subtotal = Math.round(getSubTotalPrice(basket));
    if (subtotal < 250) {
      if ($("#flat-rate").is(":checked")) {
        total = subtotal + 15;
        document.querySelector(".last-price").innerText = total;
      } else if ($("#local-pickup").is(":checked")) {
        total = subtotal;
        document.querySelector(".last-price").innerText = total;
      }
    }
  }

  $("#flat-rate, #local-pickup").change(function () {
    checkFreeShipping();
  });

  // progress bar js

  function checkProgress() {
    const progress = document.querySelector(".progress-done");

    let subTotalPrice = getSubTotalPrice(basket);

    if (subTotalPrice < 250) {
      let width = (subTotalPrice * 100) / 250;
      progress.setAttribute("data-done", width);
      progress.style.width = progress.getAttribute("data-done") + "%";
      progress.style.opacity = 1;
      document.querySelector(".price-amount").innerText = Math.round(
        250 - subTotalPrice
      );
    } else if (subTotalPrice >= 250) {
      let width = 100;
      progress.setAttribute("data-done", width);
      progress.style.width = progress.getAttribute("data-done") + "%";
      progress.style.opacity = 1;
      document.querySelector(".free-shipping-notice").innerHTML =
        "Your order qualifies for free shipping!";
    }
  }

  checkProgress();

  // delete product from basket

  $(".product-remove i").click(function () {
    let productId = $(this).data("id");
    let existedProduct = basket.find((m) => m.id == productId);
    basket = basket.filter((m) => m.id != existedProduct.id);
    localStorage.setItem("basket", JSON.stringify(basket));
    document.querySelector(".basket-icon-count").innerText = basketCount();

    $(this).parent().parent().remove();

    if (basket.length == 0) {
      $("#empty-basket").removeClass("d-none");
      $("#basket").addClass("d-none");
    }

    getSubTotalPrice(basket);
    checkFreeShipping();
    checkProgress();
  });

  // product count plus

  $(".fa-plus").click(function () {
    let productId = $(this).data("id");
    let existedProduct = basket.find((m) => m.id == productId);
    existedProduct.count++;
    $(".product-quantity span")[0].innerText = existedProduct.count;
    localStorage.setItem("basket", JSON.stringify(basket));
    document.querySelector(".basket-icon-count").innerText = basketCount();
    let productSubTotal = existedProduct.count * existedProduct.price;
    $(".product-subtotal span")[1].innerText = productSubTotal;
    getSubTotalPrice(basket);
    checkFreeShipping();
    checkProgress();
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
