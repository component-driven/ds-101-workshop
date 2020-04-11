import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Heading } from "theme-ui";
import { Head, Invert } from "mdx-deck";

const Cover = ({ author, title }) => (
	<Invert>
		<Head>
			<title>{title}</title>
		</Head>
		<Heading as="h1">{title}</Heading>
		<Box mx="auto" fontSize="2.5vw">
			<Text as="p">by {author}</Text>
		</Box>
	</Invert>
);

Cover.propTypes = {
	/** Talk title */
	title: PropTypes.string.isRequired,

	/** Author name */
	author: PropTypes.string.isRequired,
};

export default Cover;
