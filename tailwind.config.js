module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				//using custom font familly.
				Epilogue: ['Epilogue', 'sans-serif']
			},

			fontSize: {
				//using custom font sizes.
				v1: '5rem',
				v2: '2.25rem',
				v3: '1.125rem',
				v4: '1rem',
				v5: '0.9375rem'
			},

			transitionTimingFunction: {
				easeOutCirc: 'cubic-bezier(0, 0.55, 0.45, 1)',
				navEaseOut: 'cubic-bezier(0.5, 1, 0.89, 1)'
			},

			fontWeight: {
				//using custom font weight
				fw500: '500',
				fw700: '700'
			},

			backgroundImage: {
				//hamburger icons
				hamburger: "url('../img/icon-menu.svg')",
				hamburgerClose: "url('../img/icon-close-menu.svg')",

				//hamburger icons
				arrowUp: "url('../img/icon-arrow-up.svg')",
				arrowDown: "url('../img/icon-arrow-down.svg')",

				// navbar icons
				todo: "url('../img/icon-todo.svg')",
				calendar: "url('../img/icon-calendar.svg')",
				reminders: "url('../img/icon-reminders.svg')",
				planning: "url('../img/icon-planning.svg')",

				clientsOne: "url('../img/client-databiz.svg')"
			},

			boxShadow: {
				boxShadowNav: '17px 6px 22px 7px rgba(0,0,0,0.4)',
				boxShadowToggle: ' 0px 0px 8px 5px rgba(193, 193, 193, 0.25)'
			},

			screens: {
				smMax: { max: '639px' },
				bigScreen: { max: '1440px' },
				smCustom: { min: '641px' }
				// => @media (max-width: 639px) { ... }
			},

			colors: {
				//using custom colors
				transparent: 'transparent',
				almostWhite: 'hsl(0, 0%, 98%)',
				mediumGrey: 'hsl(0, 0%, 41%)',
				almostBlack: 'hsl(0, 0%, 8%)'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};
