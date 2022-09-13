const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors:
            {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                gray: colors.neutral,
                'gray-background':'#f7f8fc',
                'blue': '#328af1',
                'blue-hover': '#2879bd',
                'yellow': '#ffc73c',
                'red': '#ec544f',
                'green': '#1aab8b',
                'purple': '#8b60ed'
            },
            spacing:
            {
                70:'17.5rem',
                175:'42.75rem'
            },
            maxWidth:
            {
                custom: '62.5rem',
            },
            boxShadow:
            {
              card: '4px 4px 15px 0 rgba(36, 37, 38, 0.08)',
              dialog: '3px 4px 15px 0 rgba(36, 37, 38, 0.22)'
            },
            fontFamily:
            {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            fontSize:
            {
                xxs:['0.625rem', { lineHeight: '1rem' }]
            }
        },
    },

    plugins:
    [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp')
    ],

};