import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import LeftbarForDesktop from './LeftbarForDesktop';
import LeftbarBetweenLaptopAndMobile from './leftbarBetweenLaptopAndMobile';
const Leftbar = () => {
	const theme = useTheme();
	const above_1280 = useMediaQuery(theme.breakpoints.up('laptop'));

	return <React.Fragment>{above_1280 ? <LeftbarForDesktop /> : <LeftbarBetweenLaptopAndMobile />}</React.Fragment>;
};

export default Leftbar;
