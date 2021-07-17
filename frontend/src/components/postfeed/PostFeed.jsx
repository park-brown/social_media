import React from 'react';
import { Box } from '@material-ui/core';
const PostFeed = () => {
	return (
		<Box
			className='post-feed-container'
			sx={{
				width: '600px',
				height: '100%',
				overflow: 'scroll',
				borderLeft: '1px solid  rgb(239, 243, 244)',
				borderRight: '1px solid  rgb(239, 243, 244)',
				backgroundColor: 'red'
			}}></Box>
	);
};

export default PostFeed;
