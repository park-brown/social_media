import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Fab, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import HomeIcon from '../components/Icons/HomeIcon';
import SearchIcon from '../components/Icons/SearchIcon';
import NotificationIcon from '../components/Icons/NotificationIcon';
import MessageIcon from '../components/Icons/MessageIcon';
import FeatherIcon from '../components/Icons/FeatherIcon';
const Container = styled(Box, { name: 'container-mobile' })(({ theme }) => ({
	[theme.breakpoints.up('sx')]: {
		width: '100%',
		maxWidth: '100%',
		height: '100vh',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	}
}));
const Header = styled(Box, { name: 'header-mobile' })(({ theme }) => ({
	height: '53.5px',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'fixed',
	top: 0,
	left: 0,
	backgroundColor: 'red'
}));
const PostFeed = styled(Box, { name: 'post-feed' })(({ theme }) => ({
	flexGrow: 1,
	overflow: 'scroll',
	padding: '53.5px 0 0 0'
}));

const BottomRightFab = styled(Fab, { name: 'tweet-floating-action-button' })(() => ({
	backgroundColor: 'rgba(29,161,242,1.00)',
	color: '#fff',
	width: '64px',
	height: '64px',
	position: 'absolute',
	bottom: '60px',
	right: '20px',
	'&:hover,&:active': {
		backgroundColor: '#1976d2'
	}
}));
const HomeForMobile = () => {
	const [value, setValue] = React.useState(0);
	return (
		<Container>
			<Header component='header'></Header>
			<PostFeed></PostFeed>
			<BottomRightFab>
				<FeatherIcon />
			</BottomRightFab>

			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				sx={{ height: '53.5px', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
				<BottomNavigationAction icon={<HomeIcon />} />
				<BottomNavigationAction icon={<SearchIcon />} />
				<BottomNavigationAction icon={<NotificationIcon />} />
				<BottomNavigationAction icon={<MessageIcon />} />
			</BottomNavigation>
		</Container>
	);
};

export default HomeForMobile;
