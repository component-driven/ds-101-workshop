/** @jsx jsx */
import * as React from "react";
import PropTypes from "prop-types";
import { jsx, Text, Flex, Grid, Image } from "theme-ui";

function Figure({ src, alt, caption, ...props }) {
	return (
		<Flex
			as="figure"
			gap={4}
			{...props}
			sx={{
				p: 5,
				flexDirection: "column",
				justifyItems: "center",
				maxHeight: "100%",
			}}
		>
			<Image
				src={src}
				alt={alt}
				sx={{
					display: "block",
					flexShrink: 1,
					maxHeight: "100%",
				}}
			/>
			{caption && (
				<Text
					as="figcaption"
					variant="styles.figcaption"
					sx={{ flexShrink: 0, my: 4 }}
				>
					{caption}
				</Text>
			)}
		</Flex>
	);
}

Figure.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	caption: PropTypes.node,
};

export default Figure;
