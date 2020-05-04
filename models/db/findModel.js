const mongoose = require('mongoose');

const findSchema = mongoose.Schema({
    fechaHora: Date
},
{ versionKey: false }
);


module.exports = mongoose.model('Find', findSchema);
