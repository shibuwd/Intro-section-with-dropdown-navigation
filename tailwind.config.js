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
				hamburger: "url('../img/icon-menu.svg')",
				hamburgerClose: "url('../img/icon-close-menu.svg')"
			},

			screens: {
				smMax: { max: '639px' },
				// => @media (max-width: 639px) { ... }

				'1xl': { min: '1439px' }
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
