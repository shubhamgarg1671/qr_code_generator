const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./route/userRoute.js');
const qrRouter = require('./route/qrRoute.js');

// const { User } = require('./model/user');

require('dotenv/config');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api/user', userRouter);
app.use('/api/qr', qrRouter);

//env var
const URL = process.env.DB_URL;
const PORT = process.env.PORT || '5000';

mongoose
	.connect(URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		// we need .then becausew
		//it returns a promise
		console.log('Database is connected...');
	})
	.catch((error) => {
		console.log('Error:', error.message);
	});


app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});