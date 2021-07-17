import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
const SearchIcon = (props) => {
	return (
		<SvgIcon {...props}>
			<path d='M 21.53 20.47 l -3.66 -3.66 C 19.195 15.24 20 13.214 20 11 c 0 -4.97 -4.03 -9 -9 -9 s -9 4.03 -9 9 s 4.03 9 9 9 c 2.215 0 4.24 -0.804 5.808 -2.13 l 3.66 3.66 c 0.147 0.146 0.34 0.22 0.53 0.22 s 0.385 -0.073 0.53 -0.22 c 0.295 -0.293 0.295 -0.767 0.002 -1.06 Z M 3.5 11 c 0 -4.135 3.365 -7.5 7.5 -7.5 s 7.5 3.365 7.5 7.5 s -3.365 7.5 -7.5 7.5 s -7.5 -3.365 -7.5 -7.5 Z' />
		</SvgIcon>
	);
};

export default SearchIcon;
