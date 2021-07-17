import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
const MoreIcon = (props) => {
	return (
		<SvgIcon {...props}>
			<circle cx='17' cy='12' r='1.5'></circle>
			<circle cx='12' cy='12' r='1.5'></circle>
			<circle cx='7' cy='12' r='1.5'></circle>
			<path d='M 12 22.75 C 6.072 22.75 1.25 17.928 1.25 12 S 6.072 1.25 12 1.25 S 22.75 6.072 22.75 12 S 17.928 22.75 12 22.75 Z m 0 -20 C 6.9 2.75 2.75 6.9 2.75 12 S 6.9 21.25 12 21.25 s 9.25 -4.15 9.25 -9.25 S 17.1 2.75 12 2.75 Z' />
		</SvgIcon>
	);
};

export default MoreIcon;
