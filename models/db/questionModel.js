const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    category: String,
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answers: Array,
    id_find: String
},
{ versionKey: false }
);


module.exports = mongoose.model('Question', questionSchema);
