/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1400px"
            },
            padding: {
                DEFAULT: "2rem",
                sm: "1rem",
            },
        },
        extend: {
            screens: {
                xs: { max: "450px" },
                sm: { max: "723px" },
            },
            colors: {
                "cb-primary": "#2c8b4a",
                "cb-secondary": "#f8db66",
                "cb-gray-light": "#b6b3b3",
            },
        },
    },
    plugins: [],
}

