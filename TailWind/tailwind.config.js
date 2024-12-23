/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      scale: {
        '1': '0.1',
        '2': '0.2',
        '3': '0.3',
        '4': '0.4',
        '5': '0.5',
      },

      gridTemplateColumns: {
        //6 Column Grid
        '6': 'repeat(6, minmax(0, 10em))',
      },

      //buttons
      backgroundColor: {
        'buttons': '#068465',
      },

      borderRadius: {
        'universal': '6px',
        'card': '12px',
      },

      //BackgroundImages
      backgroundImage: {
        'card-1': "url('/src/assets/images/card1.jpg')",
        'card-2': "url('/src/assets/images/card2.jpg')",
        'card-3': "url('/src/assets/images/card3.jpg')",
        'card-4': "url('/src/assets/images/card4.jpg')",
      }

    },
  },
  plugins: [],
}

