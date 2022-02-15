module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'text-blue' : '#1d1e35',
      'text-red'  : '#f47c57',
      'text-dark' : '#4a4b5e',
      'text-gray' : '#787887',
      'grad-1'    : '#af67e9',
      'grad-2'    : '#6565e7',
      'divider'   : '#e7e7e9',   
    },

    fontFamily: {
      'custom' : ['Kumbh Sans']
    }
  },
  plugins: [],
}
