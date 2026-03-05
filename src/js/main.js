import "../styles/style.css";

const opener = document.querySelector(".opener");
const accordionHolder = document.querySelector(".jsAccordion");

if (opener) {
	openMobileNavigation();
}

if (accordionHolder) {
	accordion();
}

function openMobileNavigation() {
	const bodyEl = document.getElementById("wrapper");

	opener.addEventListener("click", (e) => {
		e.preventDefault();
		bodyEl.classList.toggle("active");
	});
}

function accordion() {
	accordionHolder.addEventListener("click", (e) => {
		const target = e.target.closest(".jsAccordionClickItem");
		if (!target) return;

		const clickItems = accordionHolder.querySelectorAll(".jsAccordionClickItem");

		clickItems.forEach((i) => i.parentElement.classList.remove("active"));

		target.parentElement.classList.add("active");
	});
}
