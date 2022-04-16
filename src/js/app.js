const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// console.log(primaryNav);

navToggle.addEventListener('click', () => {
	const visiblity = primaryNav.getAttribute('data-visible');

	// console.log(visiblity);

	if (visiblity === 'false') {
		primaryNav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else if (visiblity === 'true') {
		primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});
