const mongoose = require('mongoose');

const findSchema = mongoose.Schema({
    fechaHora: String
},
{ versionKey: false }
);


module.exports = mongoose.model('Find', findSchema);
