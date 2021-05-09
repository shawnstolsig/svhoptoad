module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        extend: {
            colors: {
                themeLightBlue: '#D0E8F2',
                themeLightGreen: '#D9DAB0',
                themeKhaki: '#FBEEAC',
                themeDarkBlue: '#383E56',
                themeOrange: '#FF6015',
            },
            fontFamily: {
                cooperBlack: ['cooper-black-std']
            },
            borderRadius: {
                'xl': '50px'
            }
        }
    }
};

/*colors:*/
/*light blue: D0E8F2*/
/*light green: D9DAB0*/
/*khaki: FBEEAC*/
/*dark blue: 383E56*/
/*orange: FF6015*/