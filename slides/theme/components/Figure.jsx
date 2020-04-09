import React from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Image} from 'theme-ui'

function Figure({ src, alt, caption, gap = 4, ...props }) {
	return (
		<Grid as="figure" gap={gap} {...props}>
			<Image src={src} alt={alt} />
			{caption && <Box as="figcaption">{caption}</Box>}
		</Grid>
	);
}

Figure.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	caption: PropTypes.node,
	gap: PropTypes.number,
};

export default Figure;
