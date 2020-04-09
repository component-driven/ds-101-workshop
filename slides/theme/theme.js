export default {
	aspectRatio: 9 / 16,
	googleFont:
		"https://fonts.googleapis.com/css?family=Fira+Mono:400,700|Work+Sans:400,700&amp;subset=latin-ext",
	fonts: {
		body: "Work Sans, sans-serif",
		monospace: 'MonoLisa, "Fira Code", monospace',
	},
	fontSizes: {
		s: "1.8vmax",
		m: "2.7vmax",
		l: "4.3vmax",
		xl: "6.5vmax",
		xxl: "10vmax",
	},
	colors: {
		heading: "inherit",
		text: "rgb(27, 37, 79)",
		background: "#fff",
		link: "rgb(27, 37, 79)",
		primary: "rgb(49, 60, 108)",
		muted: "rgb(107, 127, 168)",
		secondary: "rgb(27, 187, 254)",
		accent: "#e64958",
		add: "#2d7b43",
		remove: "#e64958",
	},
	text: {
		heading: {
			m: 0,
			mb: 4,
			fontSize: "xl",
		},
	},
	styles: {
		root: {
			fontFeatureSettings: `'kern', 'pnum', common-ligatures contextual historical-ligatures`,
			WebkitFontKerning: "normal",
			fontKerning: "normal",
			fontVariantNumeric: "proportional-nums",
			fontVariantLigatures: "common-ligatures contextual historical-ligatures",
			code: {
				fontFamily: "monospace",
			},
		},
		Slide: {
			justifyContent: "start",
			py: 5,
			px: 4,
		},
		h1: {
			variant: "text.heading",
			fontSize: "xl",
		},
		h2: {
			variant: "text.heading",
			fontSize: "l",
		},
		h3: {
			variant: "text.heading",
			fontSize: "m",
		},
		pre: {
			color: "secondary",
			fontFamily: "monospace",
		},
		inlineCode: {
			color: "secondary",
			fontFamily: "monospace",
		},
		code: {
			color: "secondary",
			fontFamily: "monospace",
		},
	},
};
