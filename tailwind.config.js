module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
     '10': '10px',
     '12': '12px',
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
   ],
}