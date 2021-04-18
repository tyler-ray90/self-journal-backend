const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}); 

db.on('connected', function() {
    console.log(`Connected to MongoDb at ${db.host}:${db.port}`);
});