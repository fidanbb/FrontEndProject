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

  // wishlist js

  let wishlist = [];

  if (localStorage.getItem("wishlist") != null) {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
    $(".empty-wishlist").addClass("d-none");
    $(".wishlist-table").removeClass("d-none");
    $(".social-buttons").removeClass("d-none");
  } else {
    $(".empty-wishlist").removeClass("d-none");
    $(".wishlist-table").addClass("d-none");
    $(".social-buttons").addClass("d-none");
  }

  if (wishlist.length == 0) {
    $(".empty-wishlist").removeClass("d-none");
    $(".wishlist-table").addClass("d-none");
    $(".social-buttons").addClass("d-none");
  }

  $(".heart-icon-count").text(wishlist.length);

  let tableBody = document.querySelector("table tbody");

  for (const item of wishlist) {
    tableBody.innerHTML += `
      <tr>
      <td class="product-check">
        <input type="checkbox" />
      </td>
      <td class="product-remove">
      <span data-id="${item.id}">x</span>
      </td>
      <td class="product-image">
        <img src="${item.image}" alt="" />
      </td>
      <td class="product-name">
        <a href="">${item.name}</a>
      </td>
      <td class="product-price">
        <span>$</span><span>${item.price}</span>
      </td>
      <td class="prdocut-date">${item.date}</td>
      <td class="product-status">
        <i class="fa-solid fa-check"></i>
        <span>In Stock</span>
      </td>
      <td class="product-action">
        <button ">Add to Cart</button>
      </td>
    </tr>
      `;
  }

  // deleting product from wishlist

  $(".product-remove span").click(function () {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let productId = $(this).data("id");
        let existedProduct = wishlist.find((m) => m.id == productId);
        wishlist = wishlist.filter((m) => m.id != existedProduct.id);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        $(this).parent().parent().remove();

        $(".heart-icon-count").text(wishlist.length);

        if (wishlist.length == 0) {
          $(".empty-wishlist").removeClass("d-none");
          $(".wishlist-table").addClass("d-none");
          $(".social-buttons").addClass("d-none");
        }
        Swal.fire(
          existedProduct.name,
          "has been removed from wishlist",
          "success"
        );
      }
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
