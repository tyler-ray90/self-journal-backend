// Require our modules
const express = require('express');
const logger = require('morgan');

// Initialize the express App
const app = express();


// Configure settings app.set()
app.use(logger('dev'));

// Converts incoming Json into req.body
app.use(express.json());

// Mount our routes with app.use()
app.use('/api/skills', require('./routes/api/journal'));

//Mount middleware with app.use()



const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});