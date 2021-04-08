const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb+srv://admin:mushookie@cluster0.yigvn.mongodb.net/journal-entries?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

db.on('connected', function() {
    console.log(`Connected to MongoDb at ${db.host}:${db.port}`);
});