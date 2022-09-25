document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.querySelector(".menu-hamburger");
	const nav = document.querySelector(".nav-box");
	let ulList = document.querySelector(".nav-list");

	const cartButton = document.querySelector(".cart-button");
	const cart = document.querySelector(".cart");

	const handleClick = () => {
		hamburger.classList.toggle("hamburger--active");
		hamburger.setAttribute(
			"aria-expanded",
			hamburger.classList.contains("hamburger--active")
		);
		nav.classList.toggle("nav--active");
	};

	const clickLink = e => {
		if (e.target.closest("li").classList.contains("nav-list__item")) {
			hamburger.classList.remove("hamburger--active");
			nav.classList.remove("nav--active");
		}
	};

	const cartHandleClick = () => {

		cart.classList.toggle("cart--active");
		cartButton.classList.toggle("cart-button--clicked");
	};

	hamburger.addEventListener("click", handleClick);
	ulList.addEventListener("click", clickLink);
	cartButton.addEventListener("click", cartHandleClick);
});
