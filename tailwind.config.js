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
    ],
    theme: {
        extend: {
            colors: {
                cyan: colors.cyan,
                'warm-gray': colors.warmGray,
                teal: colors.teal,
                // cyan: {
                //     "50": "#e0f7fa",
                //     "100": "#b2ebf2",
                //     "200": "#80deea",
                //     "300": "#4dd0e1",
                //     "400": "#26c6da",
                //     "500": "#00bcd4",
                //     "600": "#00acc1",
                //     "700": "#0097a7",
                //     "800": "#00838f",
                //     "900": "#006064",
                // },
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