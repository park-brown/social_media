import React from 'react';
import { Box } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const Rightbar = () => {
	const theme = useTheme();
	const below_1280 = useMediaQuery(theme.breakpoints.down('laptop'));
	return (
		<Box
			className='right-bar'
			sx={{
				width: '350px',
				height: '100%',
				backgroundColor: 'green',
				display: () => (below_1280 ? 'none' : 'flex')
			}}></Box>
	);
};

export default Rightbar;
