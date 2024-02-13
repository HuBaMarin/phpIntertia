import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                glow: 'glow  2s ease-in-out infinite alternate',
            },
            height:{
                "10v":"10vh",
                "15v":"15vh",
                "65v":"65vh",
            },
            colors:{
                "header":"#122235",
                "nav":"#209BD8",
                "main":"#F7F7DC",
                "footer":"#145A84"
            },
            keyframes: {
                glow: {
                    '0%,  100%': {
                        textShadow: '0  0  10px #000,  0  0  20px #000,  0  0  30px #000,  0  0  40px #000',
                    },
                    '50%': {
                        textShadow: '0  0  20px #000,  0  0  30px #000,  0  0  40px #000,  0  0  50px #000,  0  0  60px #000',
                    },
                },
            },
        },
    },

    plugins: [forms,
    require("daisyui")],
};
