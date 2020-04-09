// import * as React from 'react';
// import {useSteps} from 'gatsby-theme-mdx-deck';
//
// export const Steps = props => {
// 	console.log(props);
// 	const arr = React.Children.toArray(props.children);
// 	const step = useSteps(arr.length);
// 	const children = arr.map((child, i) =>
// 		React.cloneElement(child, {
// 			style: {
// 				...child.props.style,
// 				transition: 'opacity 1s ease-out',
// 				opacity: i < step ? 1 : 0,
// 			},
// 		})
// 	);
//
// 	return <>{children}</>;
// };
//
// export default Steps;
