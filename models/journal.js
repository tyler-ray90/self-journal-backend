const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
    feelings: String,
    goals: String,
    grateful: String,
    journalEntry: String,
});

module.exports = mongoose.model('Journal', journalSchema);