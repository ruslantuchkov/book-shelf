const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

const { User } = require('./models/user');
const { Book } = require('./models/book');

app.use(require('body-parser').json());
app.use(require('cookie-parser')());

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is running on port: ${port}!`));
