const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const app = express();
app.use(require('body-parser').json());
app.use(require('cookie-parser')());

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is running on port: ${port}!`));
