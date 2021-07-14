const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const app = express();
dotenv.config();

//connnect to mongo
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => console.log('DB Connection Successfull'))
	.catch((err) => {
		console.error(err);
	});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
//listen
app.listen(8800, () => {
	console.log('backend server is ready ');
});
