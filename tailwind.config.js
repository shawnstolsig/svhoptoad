const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
    theme: {
        extend: {
            colors: {
                cyan: colors.cyan,
                'warm-gray': colors.warmGray,
                teal: colors.teal,
                themeOrange: '#FF6015',
            },
            fontFamily: {
                cooperBlack: ['cooper-black-std'],
                // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        }
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
            cursor: ['disabled'],
            textColor: ['disabled'],
        }
    },
};

// themeLightBlue: '#D0E8F2',
// themeLightGreen: '#D9DAB0',
// themeKhaki: '#FBEEAC',
// themeDarkBlue: '#383E56',
// themeOrange: '#FF6015',