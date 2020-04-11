/* @jsx jsx */
import * as React from 'react';
import { jsx, Box, Image } from 'theme-ui';
import { Appear } from 'mdx-deck';

function ThatGuy(props) {
	return (
		<Appear>
			<Box
				sx={{
					position: 'absolute',
					top: "100%",
					right: 0,
					transform: 'translate(0%, -100%)',
				}}
				{...props}
			>
				<Image
					src={require('../../assets/that-guy.png')}
					alt="That guy"
				/>
			</Box>
		</Appear>
	);
}

export default ThatGuy;
