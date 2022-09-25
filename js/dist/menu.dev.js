"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".menu-hamburger");
  var nav = document.querySelector(".nav-box");
  var ulList = document.querySelector(".nav-list");
  var cartButton = document.querySelector(".cart-button");
  var cart = document.querySelector(".cart");

  var handleClick = function handleClick() {
    hamburger.classList.toggle("hamburger--active");
    hamburger.setAttribute("aria-expanded", hamburger.classList.contains("hamburger--active"));
    nav.classList.toggle("nav--active");
  };

  var clickLink = function clickLink(e) {
    if (e.target.closest("li").classList.contains("nav-list__item")) {
      hamburger.classList.remove("hamburger--active");
      nav.classList.remove("nav--active");
    }
  };

  var cartHandleClick = function cartHandleClick() {
    cart.classList.toggle("cart--active");
    cartButton.classList.toggle("cart-button--clicked");
  };

  hamburger.addEventListener("click", handleClick);
  ulList.addEventListener("click", clickLink);
  cartButton.addEventListener("click", cartHandleClick);
});