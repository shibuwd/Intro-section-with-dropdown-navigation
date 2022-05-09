const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
	const visiblity = primaryNav.getAttribute('data-visible');

	if (visiblity === 'false') {
		primaryNav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else if (visiblity === 'true') {
		primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});

function show(anything) {
	document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
	dropdown.classList.toggle('active-menu');
};
