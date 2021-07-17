import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Leftbar from '../components/leftbar/Leftbar';
import PostFeed from '../components/postfeed/PostFeed';
import Rightbar from '../components/rightbar/Rightbar';
const Home = () => {
	return (
		<Container maxWidth='laptop' sx={{ p: '0 7.5px', height: '100vh', display: 'flex', justifyContent: 'flex-start' }}>
			<Leftbar />
			<Grid
				container
				sx={{ display: 'flex', justifyContent: 'space-between', width: '990px', position: 'relative', left: '275px' }}>
				<PostFeed />
				<Rightbar />
			</Grid>
		</Container>
	);
};

export default Home;
