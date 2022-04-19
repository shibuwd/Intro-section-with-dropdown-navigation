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

// let dropdown = document.querySelectorAll('.dropdown');
// let arrow = document.querySelectorAll('.arrow');

// console.log(dropdown);
// console.log(arrow);

// for (let i = 0; i < dropdown.length; i++) {
// 	dropdown[i].addEventListener('click', () => {
// 		let focusFaqs = dropdown[i];
// 		focusFaqs.classList.toggle('active');
// 		arrow[i].classList.toggle('arrow-active');

// 		//    open FAQs answer when title container is clicked
// 		let text = focusFaqs.nextElementSibling;
// 		if (div.style.display === 'block') {
// 			text.style.display = 'none';
// 		} else {
// 			text.style.display = 'block';
// 		}
// 	});
// }
