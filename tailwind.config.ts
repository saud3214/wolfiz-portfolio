import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
        'nht-bg1': "url('/nht/nhtbg1.png')",
        'nht-bg2': "url('/nht/nhtbg2.png')",
        'nht-bg3': "url('/nht/nhtbg3.png')",
        'nht-bg4': "url('/nht/nhtbg4.png')",
        'nht-bg5': "url('/nht/nhtbg5.png')",
        'nht-bg6': "url('/nht/nhtbg6.png')",
        'nht-bg7': "url('/nht/bgps.png')",
        'nht-bg8': "url('/nht/nhtabc.png')",
      },
      colors: {
        nht: '#006360',
      },
      clipPath: {
        'custom-polygon':
          'polygon(83% 23%, 100% 47%, 85% 69%, 25% 69%, 0% 50%, 21% 23%)',
      },
    },
  },
  plugins: [],
};
export default config;
