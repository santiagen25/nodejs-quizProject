const mongoose = require('mongoose');

const findSchema = mongoose.Schema({
    fechaHora: String
});

module.exports = mongoose.model('Find', findSchema);
