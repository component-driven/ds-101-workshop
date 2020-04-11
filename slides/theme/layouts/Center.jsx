/** @jsx jsx */
import * as React from "react";
import { jsx, Flex } from "theme-ui";

export default ({ children }) => {
	return (
		<Flex
			sx={{
				width: "100vw",
				height: "100vh",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{children}
		</Flex>
	);
};

