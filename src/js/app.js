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

let dropdown = document.querySelector('.dropdown');
let arrow = document.querySelector('.arrow');

console.log(dropdown);
console.log(arrow);

dropdown.addEventListener('click', () => {
	dropdown.classList.toggle('dropdown-active');
	arrow.classList.toggle('arrow-active');
});

// dropdown.addEventListener('click', () => {
// 	dropDownCompany.classList.toggle('dropdown-active');
// 	arrowCompany.classList.toggle('arrow-active');
// });
