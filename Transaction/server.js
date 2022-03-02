const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const res = require('express/lib/response');

dotenv.config({path: './config/config.env'});

const transactions = require('./routes/transactions')

const app = express();
app.use('/api/v1/transactions',transactions)

const PORT = process.env.PORT || 4000;

app.listen(PORT,console.log('Server running in development mode on port 4000'.yellow));
