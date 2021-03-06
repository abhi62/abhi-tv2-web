const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const mongoose = require('mongoose');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})
.then(() => {console.log('DB Connection Established')});


const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
})


