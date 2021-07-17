import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Leftbar from '../components/leftbar/Leftbar';
import PostFeed from '../components/postfeed/PostFeed';
import Rightbar from '../components/rightbar/Rightbar';
import { styled } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const Container = styled(Box, { name: 'container' })(({ theme }) => ({
	[theme.breakpoints.up('sx')]: {
		maxWidth: '100%',
		height: '100vh',
		overflow: 'hidden'
	},
	[theme.breakpoints.up('mobile')]: {
		maxWidth: '776px',
		padding: '0 10px',
		margin: '0 auto',
		height: '100vh',
		overflow: 'hidden'
	},
	[theme.breakpoints.up('tablet')]: {
		maxWidth: '776px',
		padding: '0 10px',
		margin: '0 auto',
		height: '100vh',
		overflow: 'hidden'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1280px',
		padding: '0 7.5px',
		margin: '0 auto',
		height: '100vh',
		overflow: 'hidden'
	}
}));
const Home = () => {
	const theme = useTheme();
	const below_500 = useMediaQuery(theme.breakpoints.down('mobile'));
	return (
		<React.Fragment>
			{below_500 ? null : (
				<Container>
					<Leftbar />
					<Grid
						container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: { laptop: '1265px', tablet: 'calc(100% - 64px)' },
							height: '100%',
							postion: 'relative',
							padding: { mobile: '0 0 0 64px', tablet: '0 0 0 64px', laptop: '0 0 0 275px' }
						}}>
						<PostFeed />
						<Rightbar />
					</Grid>
				</Container>
			)}
		</React.Fragment>
	);
};

export default Home;
