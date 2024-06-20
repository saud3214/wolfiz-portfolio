import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'linear-gradient': 'linear-gradient(var(--tw-gradient-stops))',
      'nht-card': "url('/nhtcard.png')",
      'lp-card': "url('/leadpadlerscards.png')",
    },
  },
  plugins: [],
};
export default config;
