import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontSize: '17px',
					lineHeight: 1.47059,
					fontWeight: 400,
					letterSpacing: '-.022em',
					fontFamily: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',
					backgroundColor: '#fff',
					color: '#1d1d1f',
					fontStyle: 'normal',
					margin: 0,
					padding: 0
				}
			}
		}
	},
	breakpoints: {
		values: {
			sx: 0,
			mobile: 500,
			tablet: 960,
			laptop: 1280,
			desktop: 1440
		}
	},
	palette: {
		common: {
			button_background: '#0071e3',
			button_background_hover: '#0077ED',
			link: '#06c'
		}
	},
	spacing: 5
});

export default theme;
