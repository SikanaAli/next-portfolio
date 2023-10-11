import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
				blob: "blob 8s ease infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: " translate(0px,0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px,-50px) scale(1.2)",
					},
					"66%": {
						transform: "translate(-20px,30px) scale(0.8)",
					},
					"100%": {
						transform: "translate(0px,0px) scale(1)",
					},
				},
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
