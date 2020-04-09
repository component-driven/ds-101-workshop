import React from "react";
import { Prism } from "react-syntax-highlighter";
import codeTheme from "../codeTheme";

export const getLanguage = (className) => {
	const match = /language-(\w*)/.exec(className || "language-javascript");
	let lang = "javascript";
	if (match && match.length > 1) {
		lang = match[1];
	}
	return lang;
};

export default (props) => {
	const language = getLanguage(props.className);
	return <Prism language={language} style={codeTheme.style} {...props} />;
};
