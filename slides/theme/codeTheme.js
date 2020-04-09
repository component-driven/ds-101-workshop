import theme from "./theme";

const { accent, add, primary, muted, remove, secondary, text } = theme.colors;

export default {
	styles: [
		{
			types: ["attr-name", "symbol", "entity", "keyword"],
			style: {
				color: text,
			},
		},
		{
			types: [
				"attr-value",
				"constant",
				"boolean",
				"string",
				"selector",
				"char",
				"variable",
				"class-name",
			],
			style: {
				color: accent,
			},
		},
		{
			types: ["property", "tag"],
			style: {
				color: secondary,
			},
		},
		{
			types: [
				"comment",
				"block-comment",
				"prolog",
				"doctype",
				"cdata",
				"number",
				"punctuation",
				"operator",
			],
			style: {
				color: muted,
			},
		},
		{
			types: ["function-name", "at-rule"],
			style: {
				color: primary,
			},
		},
		{
			types: ["inserted"],
			style: {
				color: add,
			},
		},
		{
			types: ["deleted"],
			style: {
				color: remove,
			},
		},
		{
			types: ["builtin"],
			style: {
				color: text,
			},
		},
		{
			types: ["function"],
			style: {
				color: text,
				fontWeight: "bold",
			},
		},
		{
			types: ["url"],
			style: {
				color: muted,
				textDecoration: "underline",
			},
		},
		{
			types: ["important"],
			style: {
				fontWeight: "400",
			},
		},
		{
			types: ["bold"],
			style: {
				fontWeight: "bold",
			},
		},
		{
			types: ["italic"],
			style: {
				fontStyle: "italic",
			},
		},
		{
			types: ["namespace"],
			style: {
				opacity: 0.7,
			},
		},
	],
	style: {
		'pre[class*="language-"]': {
			margin: 0,
			padding: 0,
			color: primary,
			fontFamily: theme.fonts.monospace,
			fontSize: theme.fontSizes.s,
			textAlign: "left",
			whiteSpace: "pre",
			wordSpacing: "normal",
			wordBreak: "normal",
			wordWrap: "normal",
			MozTabSize: "2",
			OTabSize: "2",
			tabSize: "2",
			WebkitHyphens: "none",
			MozHyphens: "none",
			msHyphens: "none",
			hyphens: "none",
		},
		':not(pre) > code[class*="language-"]': {
			whiteSpace: "normal",
		},
		comment: {
			color: muted,
		},
		"block-comment": {
			color: muted,
		},
		prolog: {
			color: muted,
		},
		doctype: {
			color: muted,
		},
		cdata: {
			color: muted,
		},
		punctuation: {
			color: muted,
		},
		tag: {
			color: secondary,
		},
		"attr-name": {
			color: text,
		},
		namespace: {
			color: secondary,
		},
		"function-name": {
			color: primary,
		},
		boolean: {
			color: accent,
		},
		number: {
			color: muted,
		},
		function: {
			color: text,
			fontWeight: "bold",
		},
		property: {
			color: secondary,
		},
		"class-name": {
			color: accent,
		},
		constant: {
			color: accent,
		},
		symbol: {
			color: text,
		},
		selector: {
			color: accent,
		},
		important: {
			color: primary,
			fontWeight: "bold",
		},
		atrule: {
			color: primary,
		},
		keyword: {
			color: text,
		},
		builtin: {
			color: text,
		},
		string: {
			color: accent,
		},
		char: {
			color: accent,
		},
		"attr-value": {
			color: accent,
		},
		regex: {
			color: accent,
		},
		variable: {
			color: accent,
		},
		operator: {
			color: muted,
		},
		entity: {
			color: text,
		},
		url: {
			color: muted,
			textDecoration: "underline",
		},
		bold: {
			fontWeight: "bold",
		},
		italic: {
			fontStyle: "italic",
		},
		inserted: {
			color: add,
		},
		deleted: {
			color: remove,
		},
	},
};
