/** @jsx jsx */
import * as React from "react";
import {Flex, jsx} from "theme-ui";

export default ({ children, align = "center" }) => {
	const [heading, rest] = React.Children.toArray(children);
	return (
		<Flex
			sx={{
				flexDirection: "column",
				alignItems: align,
				justifyContent: "start",
				width: "100vw",
				height: "100vh",
			}}
		>
			{heading}
			<Flex sx={{ p: 4 }}>{rest}</Flex>
		</Flex>
	);
};
