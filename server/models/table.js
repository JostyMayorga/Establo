const mongoose = require ('mongoose');
const {Schema} = mongoose;

const TableSchema = new Schema({
    idTable: {type: Number, required: true},
    numberChair: {type: Number, required: true},
    description: {type: String, required: true},
    state: {type: String, required: true},
});

module.exports = mongoose.model('Table', TableSchema);