/** @type {import('tailwindcss').Config} */
//? 4
//* tailwind config
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            main: "#fb923c",
            "main-lightest": "#fff7ed",
            "main-light": "#fed7aa",
            "main-dark": "#b45309",
            'yellow': "#fcd34d",
            'green': "#84cc16",
            'gray-light':"#6b7280",
            'main-gray':'#374151',
            'gray-lighter':'#e5e7eb',
            'white':'#ffffff',
            gridTemplateColumns:{
                'fill':'repeat(auto-fill, minmax(200px,1fr)'
            }
        },
        extend: {
            fontFamily: {
                Rubik: ["Rubik"],
            },
        },
        screens:{
          'sm':{'max':'640px'},
          'md':{'max':'768px'},
          'lg':{'max':'1024px'},
          'xl':{'max':'1280px'},
          '2xl':{'max':'1536px'}
        }
    },
};
