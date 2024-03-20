import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#eafff5",
                    "100": "#d4f4e8",
                    "200": "#bfe8db",
                    "300": "#93d9c5",
                    "400": "#60c9a5",
                    "500": "#3bb58a",
                    "600": "#25967b",
                    "700": "#1d8068",
                    "800": "#1e6f5c",
                    "900": "#1e5d4a",
                    "950": "#17453b"
                }
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
