// Require our modules
const express = require('express');
const logger = require('morgan');
const cors = require('cors');


// Initialize the express App
const app = express();


// Configure settings app.set()
// require('dotenv').config();
require('./config/database');

// Mount middleware with app.use()
app.use(logger('dev'));
app.use(express.json()); // converts incoming Json into req.body
app.use(cors());

// Mount our routes with app.use()
app.use('/api/journal', require('./routes/api/journal'));

// Tell app to listen to port 3001

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});