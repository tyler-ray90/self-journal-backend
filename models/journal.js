const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    feeling: String,
    goal: String,
    grateful: String,
    journalEntry: String,
});

module.exports = mongoose.model('Journal', journalSchema);