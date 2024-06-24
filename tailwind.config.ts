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
      'rzfx-card': "url('/rockzfxcard.png')",
      'rzfx-bg1': "url('/csimages/rzfxbg1.png')",
      'rzfx-bg2': "url('/csimages/rzfxbg2.png')",
      'rzfx-bg3': "url('/csimages/rzfxbg3.png')",
    },
  },
  plugins: [],
};
export default config;
