// export { default as Cover } from './layouts/Cover';
// export { default as Secondary } from './layouts/Secondary';
// export { default as Boom } from './layouts/Boom';
// export { default as SplitWithHeading } from './layouts/SplitWithHeading';
// export { default as Appear } from './components/Appear';
// export { default as Box } from './components/Box';
// export { default as Flex } from './components/Flex';
// // export { default as Bar } from './components/Bar';
// export { default as Code } from './components/Code';
// export { default as Demo } from './components/Demo';
// export { default as Figure } from './components/Figure';
// export { default as LiveCode } from './components/LiveCode';
// // export { default as Delay } from './components/Delay';
// // export { default as Flex } from './components/Flex';
// // export { default as Heading } from './components/Heading';
// export { default as List } from './components/List';
// // export { default as Explosion } from './components/Explosion';
// export { default as Text } from './components/Text';
// export { default as Heading } from './components/Heading';
// export {default as Steps} from './components/Steps'

import { Head, Image, Notes, Split } from "mdx-deck";
import theme from "./theme";
import { Box, Flex, Grid } from "theme-ui";
import Center from "./layouts/Center";
import SplitTitle from "./layouts/SplitTitle";
import Primary from "./layouts/Primary";
import Secondary from "./layouts/Secondary";
import Boom from "./layouts/Boom";
import ThatGuy from "./components/ThatGuy";
import Code from "./components/Code";
import Figure from "./components/Figure";
import Video from "./components/Video";
import Cover from "./layouts/Cover";
import SplitWithHeading from "./layouts/SplitWithHeading";
import TweetEmbed from "react-tweet-embed";
import LiveCode from "./components/LiveCode";

export { Invert, Split, SplitRight, FullScreenCode } from "mdx-deck";
// export { Image} from 'mdx-deck'

export const pre = (props) => props.children;

export default {
	...theme,
	components: {
		Box,
		Flex,
		Grid,
		Head,
		Image,
		Notes,
		Split,
		Center,
		SplitTitle,
		Cover,
		Primary,
		Secondary,
		Boom,
		SplitWithHeading,
		Figure,
		ThatGuy,
		Video,
		TweetEmbed,
		LiveCode,
		Code,
		// Markdown overrides
		pre,
		code: Code,
		blockquote: Boom,
	},
};
