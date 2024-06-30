module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      pretendard: ['Pretendard'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
