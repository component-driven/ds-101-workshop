import { Head, Image, Notes } from "mdx-deck";

// export { Invert, Split, SplitRight, FullScreenCode } from 'mdx-deck/layouts';
// export { default as Center } from './layouts/Center';
// export { default as Cover } from './layouts/Cover';
// export { default as Primary } from './layouts/Primary';
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
// export { default as ThatGuy } from './components/ThatGuy';
// export { default as Text } from './components/Text';
// export { default as Heading } from './components/Heading';
// export { default as Video } from './components/Video';
// export {default as Steps} from './components/Steps'

import theme from "./theme";
import Code from "./components/Code";
import Figure from "./components/Figure";
// export { Image} from 'mdx-deck'

export const pre = (props) => props.children;

export default {
	...theme,
	components: {
		Head,
		Image,
		Notes,
		pre,
		code: Code,
		Figure,
	},
};
