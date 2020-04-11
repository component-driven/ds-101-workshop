/** @jsx jsx */
import * as React from "react";
import { jsx, Box } from "theme-ui";

export default (props) => (
	<Box
		as="video"
		sx={{
			width: "100%",
			height: "100%",
			objectFit: "contain",
		}}
		{...props}
	/>
);
