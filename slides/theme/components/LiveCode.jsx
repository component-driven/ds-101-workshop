/** @jsx jsx */
import * as React from "react";
import { jsx, Box, Grid, Flex } from "theme-ui";
import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";
import codeTheme from "../codeTheme";

export default ({ code, scope, language }) => {
	return (
		<LiveProvider code={code} scope={scope} language={language} theme={codeTheme}>
			<Grid gap={0} columns={2} sx={{ height: "100vh", width: "100vw" }}>
				<Box sx={{ borderRight: "1px solid" }}>
					<LivePreview />
					<LiveError />
				</Box>
				<Flex
					sx={{
						p: 4,
						borderLeft: "1px solid",
						bg: "#eff3ff",
						width: "100%",
					}}
				>
					<LiveEditor
						sx={(theme) => ({
							fontFamily: `${theme.fonts.monospace}!important`,
							fontSize: `${theme.fontSizes.s}!important`,
							width: "100%",
							"textarea:focus": { outline: "none" },
						})}
					/>
				</Flex>
			</Grid>
		</LiveProvider>
	);
};
