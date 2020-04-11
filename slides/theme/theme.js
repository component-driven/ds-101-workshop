export default {
	aspectRatio: 9 / 16,
	googleFont:
		"https://fonts.googleapis.com/css?family=Fira+Mono:400,700|Work+Sans:400,700&amp;subset=latin-ext",
	fonts: {
		body: "Work Sans, sans-serif",
		monospace: 'MonoLisa, "Fira Code", monospace',
	},
	fontSizes: {
		s: "1em",
		m: "1.5em",
		l: "2.25em",
		xl: "4em",
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
			m: 5,
			fontSize: "xl",
			textAlign: "center",
		},
	},
	styles: {
		root: {
			fontSize: "1vmax",
			fontFeatureSettings: `'kern', 'pnum', common-ligatures contextual historical-ligatures`,
			WebkitFontKerning: "normal",
			fontKerning: "normal",
			fontVariantNumeric: "proportional-nums",
			fontVariantLigatures: "common-ligatures contextual historical-ligatures",
			"code, pre": {
				fontFamily: "monospace",
			},
		},
		Slide: {
			// justifyContent: "start",
		},
		Split: {
			px: 5,
			width: "100%",
			alignItems: "start",
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
		ul: {
			p: 0,
		},
		pre: {
			color: "secondary",
			fontFamily: "monospace",
		},
		inlineCode: {
			color: "secondary",
			fontFamily: "monospace",
			fontSize: "85%",
		},
		code: {
			color: "secondary",
			fontFamily: "monospace",
		},
		figcaption: {
			textAlign: "center",
			fontSize: "s",
		},
		blockquote: {
			textAlign: "center",
			fontSize: "l",
		},
	},
};
