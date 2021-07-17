import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ExploreIcon from '../Icons/ExploreIcon';
import NotificationIcon from '../Icons/NotificationIcon';
import MessageIcon from '../Icons/MessageIcon';
import MoreIcon from '../Icons/MoreIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import HomeIcon from '../Icons/HomeIcon';
import TwitterLogo from '../twitterLogo/TwitterLogo';
const CustomListItem = styled(ListItem, { name: 'custom-list-item' })(({ theme }) => ({
	padding: '11px 8px',
	width: 'fit-content',
	color: '#000',
	'&.Mui-selected': {
		color: 'rgba(29,161,242,1.00)',
		backgroundColor: 'transparent',
		'& .MuiListItemIcon-root': { color: 'rgba(29,161,242,1.00)' }
	},
	'&:focus': {
		color: 'rgba(29,161,242,1.00)',
		backgroundColor: 'rgba(29, 161, 242, 0.2)',
		borderRadius: '9999px'
	},
	'&:focus  .MuiListItemIcon-root': {
		color: 'rgba(29,161,242,1.00)'
	},

	'& .MuiListItemText-root': {
		margin: '0 16px 0 20px',
		'& .MuiTypography-root': {
			fontWeight: 700,
			fontSize: '20px',
			lineHeight: '24px'
		}
	}
}));
const CustomListItemIcon = styled(ListItemIcon, { name: 'custom-list-item-icon' })(({ theme }) => ({
	minWidth: '28px',
	color: 'rgb(15, 20, 25)',
	'& .MuiSvgIcon-root': {
		width: '1.75rem',
		height: '1.75rem'
	}
}));
const Leftbar = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};
	return (
		<Box className='side-navbar-laptop' sx={{ width: '275px', height: '100%', top: 0, position: 'fixed' }}>
			<Box
				className='sidebar-inner'
				sx={{
					p: '0 12px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
				<Box
					className='sidebar-innner-container'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'center',
						width: '100%'
					}}>
					<Box
						className='twitter-logo-wrapper'
						component='a'
						sx={{
							width: '100%',
							height: '48px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start'
						}}>
						<TwitterLogo htmlColor='rgba(29,161,242,1.00)' sx={{ width: '46px', height: '30px' }} />
					</Box>
					<Box
						className='nav-link-container'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'center',
							width: '100%'
						}}>
						<List component='nav' aria-label='Primary' sx={{ width: '100%' }}>
							{/*Home */}
							<CustomListItem button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
								<CustomListItemIcon>
									<HomeIcon />
								</CustomListItemIcon>
								<ListItemText primary='Home' />
							</CustomListItem>
							{/*Explore */}
							<CustomListItem button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
								<CustomListItemIcon>
									<ExploreIcon />
								</CustomListItemIcon>
								<ListItemText primary='explore' />
							</CustomListItem>
							{/*notification */}
							<CustomListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
								<CustomListItemIcon>
									<NotificationIcon />
								</CustomListItemIcon>
								<ListItemText primary='Notification' />
							</CustomListItem>
							{/*message */}
							<CustomListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
								<CustomListItemIcon>
									<MessageIcon />
								</CustomListItemIcon>
								<ListItemText
									primary='Message'
									selected={selectedIndex === 4}
									onClick={(event) => handleListItemClick(event, 4)}
								/>
							</CustomListItem>
							{/*profile */}
							<CustomListItem button selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
								<CustomListItemIcon>
									<ProfileIcon />
								</CustomListItemIcon>
								<ListItemText
									primary='Profile'
									selected={selectedIndex === 6}
									onClick={(event) => handleListItemClick(event, 6)}
								/>
							</CustomListItem>
							{/*more */}
							<CustomListItem button>
								<CustomListItemIcon>
									<MoreIcon />
								</CustomListItemIcon>
								<ListItemText
									primary='More'
									selected={selectedIndex === 7}
									onClick={(event) => handleListItemClick(event, 7)}
								/>
							</CustomListItem>
						</List>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Leftbar;
