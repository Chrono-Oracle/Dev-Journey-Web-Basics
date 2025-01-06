/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {


    extend: {
      
      screens: {
        'mylaptop': '1440px',
      },

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
        'response': 'repeat(auto-fill, minmax(12rem, auto))',
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

        'custom-45deg': 'linear-gradient(140deg, #121D33, #2962BF, #5D72D4, #AA84DF, #D383D3)',
      }

    },
  },
  plugins: [],
}

