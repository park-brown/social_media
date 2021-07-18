import React from 'react';
import {
	Box,
	Typography,
	IconButton,
	Button,
	Avatar,
	InputBase,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	MenuItem,
	Menu
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PhotoIcon from '../Icons/PhotoIcon';
import GifIcon from '../Icons/GifIcon';
import PollIcon from '../Icons/PollIcon';
import EmojiIcon from '../Icons/EmojiIcon';
import CalenderIcon from '../Icons/CalenderIcon';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '../Icons/StarIcons';
import EarthIcon from '../Icons/EarthIcon';
import FollowingIcon from '../Icons/FollowingIcon';
import AtIcon from '../Icons/AtIcon';
const Header = styled(Box, { name: 'post-feed-header' })(({ theme }) => ({
	position: 'sticky',
	top: 0,
	left: 0,
	right: 0,
	height: '54px',
	borderBottom: '1px solid rgba(239, 243, 244)',
	backgroundColor: 'rgba(255,255,255,1.00)',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 16px'
}));
const TweetContainer = styled(Box, { name: 'tweet-field' })(({ theme }) => ({
	height: '150px',
	width: '100%',
	padding: '0 16px',
	display: 'flex',
	alignItems: 'center'
}));
const TweetInputBase = styled(InputBase, { name: 'tweet-input-base' })(({ theme }) => ({
	flexGrow: 1,
	maxHeight: '56px',
	width: '100%'
}));
const AvatarWrapper = styled(Box, { name: 'avatar-wrapper' })(({ theme }) => ({
	width: '48px',
	height: '110%',
	padding: '10px 0 0 0',
	margin: '0 12px 0 0',
	display: 'flex',
	alignItems: 'flex-start'
}));
const ReplyOptionsList = styled(List, { name: 'reply-options-list' })(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	width: '200px',

	padding: '0 0 16px 0',
	'& .MuiListItem-root': {
		padding: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		'& .MuiListItemIcon-root': {
			color: 'rgba(29,161,242,1.00)',
			minWidth: '16px',
			marginRight: '7.5px',
			'& .MuiSvgIcon-root': {
				width: '14px',
				height: '14px'
			}
		},
		'& .MuiListItemText-root': {
			whiteSpace: 'nowrap',
			'& .MuiTypography-root': {
				fontSize: '14px',
				color: 'rgba(29,161,242,1.00)',
				lineHeight: '16px',
				fontWeight: 600
			}
		}
	}
}));
const ReplyOptionsMenu = styled(Menu, { name: 'reply-options-menu' })(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: '16px',
		top: '140px !important',
		width: '320px',
		height: '284px'
	},
	'& .MuiMenu-list': {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		'& .MuiMenuItem-root': {
			'& .MuiListItemIcon-root': {
				width: '40px',
				height: '40px',
				color: 'rgba(29,161,242,1.00)',
				margin: '0 12px 0 0',
				'& .MuiSvgIcon-root': {
					width: '52px',
					height: '40px',
					padding: '6px'
				}
			}
		}
	}
}));
const options = [
	{ icon: <EarthIcon />, text: 'everyone can reply' },
	{ icon: <FollowingIcon />, text: 'people you follow' },
	{ icon: <AtIcon />, text: 'only people you mention' }
];
const TweetActionArea = styled(Box, { name: 'tweet-action-area' })(() => ({
	width: '100%',
	height: '52px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
}));
const TweetButton = styled(Button, { name: 'submit-button' })(({ theme }) => ({
	[theme.breakpoints.up('sx')]: {
		width: '80px',
		height: '38px',
		borderRadius: '9999px',
		backgroundColor: 'rgb(29, 161, 242)',
		color: '#fff',
		fontSize: '15px',
		textTransform: 'capitalize',
		fontWeight: 600,
		'&:hover,&:active': {
			backgroundColor: 'rgb(29, 161, 242)',
			color: '#fff'
		},
		'&.Mui-disabled': {
			color: '#fff',
			opacity: 0.5
		}
	}
}));
const PostFeed = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const open = Boolean(anchorEl);
	const handleClickListItem = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box
			className='post-feed-container'
			sx={{
				width: '600px',
				height: '100%',
				borderLeft: '1px solid  rgb(239, 243, 244)',
				borderRight: '1px solid  rgb(239, 243, 244)',
				position: 'relative'
			}}>
			<Header>
				<Typography variant='h6' sx={{ fontWeight: 700 }} component='h2'>
					Home
				</Typography>
				<IconButton>
					<StarIcon htmlColor='rgba(29,161,242,1.00)' />
				</IconButton>
			</Header>
			<TweetContainer>
				<AvatarWrapper>
					<Avatar>
						<PersonIcon />
					</Avatar>
				</AvatarWrapper>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1,
						height: '100%',
						justifyContent: 'flex-start',
						alignItems: 'flex-start'
					}}>
					<TweetInputBase multiline maxRows={4} maxlength='140' placeholder='what do you think?'></TweetInputBase>
					<ReplyOptionsList component='nav' aria-label='reply option settings'>
						<ListItem
							button
							id='lock-button'
							aria-haspopup='listbox'
							aria-controls='lock-menu'
							aria-label='when device is locked'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClickListItem}>
							<ListItemIcon>{options[selectedIndex].icon}</ListItemIcon>
							<ListItemText primary={options[selectedIndex].text} />
						</ListItem>

						<ReplyOptionsMenu
							id='lock-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							disablePortal={true} // let children stay within it's parent DOM hierarchy.
							anchorReference='anchorPosition'
							anchorPosition={{ top: 140, left: 650 }} // top property cap to 128 , use css important to override
							MenuListProps={{
								'aria-labelledby': 'lock-button',
								role: 'listbox'
							}}>
							<Box
								sx={{
									width: '100%',
									flexGrow: 1,
									padding: '16px 16px 12px 16px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-around'
								}}>
								<Typography variant='body1' sx={{ fontWeight: 600 }}>
									who can reply ?
								</Typography>
								<Typography variant='body1' sx={{ color: 'grey.500' }}>
									Choose who can reply to this Tweet. Anyone mentioned can always reply.
								</Typography>
							</Box>
							{options.map((option, index) => (
								<MenuItem
									key={option}
									selected={index === selectedIndex}
									onClick={(event) => handleMenuItemClick(event, index)}>
									<ListItemIcon>{option.icon}</ListItemIcon>
									<ListItemText primary={option.text} />
								</MenuItem>
							))}
						</ReplyOptionsMenu>
					</ReplyOptionsList>
					<TweetActionArea>
						<Box className='button-group' sx={{ display: 'flex', alignItems: 'center', margin: '12px 0 0 0' }}>
							<IconButton sx={{ padding: '0 1px', width: '40px', height: '40px', color: 'rgba(29,161,242,1.00)' }}>
								<PhotoIcon />
							</IconButton>
							<IconButton sx={{ padding: '0 1px', width: '40px', height: '40px', color: 'rgba(29,161,242,1.00)' }}>
								<GifIcon />
							</IconButton>
							<IconButton sx={{ padding: '0 1px', width: '40px', height: '40px', color: 'rgba(29,161,242,1.00)' }}>
								<PollIcon />
							</IconButton>
							<IconButton sx={{ padding: '0 1px', width: '40px', height: '40px', color: 'rgba(29,161,242,1.00)' }}>
								<EmojiIcon />
							</IconButton>
							<IconButton sx={{ padding: '0 1px', width: '40px', height: '40px', color: 'rgba(29,161,242,1.00)' }}>
								<CalenderIcon />
							</IconButton>
						</Box>
						<TweetButton disabled={true}>Tweet</TweetButton>
					</TweetActionArea>
				</Box>
			</TweetContainer>
		</Box>
	);
};

export default PostFeed;
