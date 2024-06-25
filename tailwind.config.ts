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
      'rzfx-bg4': "url('/csimages/rzfxbg4.png')",
      'rzfx-bg5': "url('/csimages/rzfxbg5.png')",
      'rzfx-bg6': "url('/csimages/rzfxbg6.png')",
      'rzfx-bg7': "url('/csimages/rzfxbg7.png')",
      'rzfx-bg8': "url('/csimages/rzfxbg8.png')",
      'rzfx-bg9': "url('/csimages/rzfxbg9.png')",
      'rzfx-bg10': "url('/csimages/rzfxbg10.png')",
    },
  },
  plugins: [],
};
export default config;
