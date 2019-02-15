const mongoose = require ('mongoose');
const {Schema} = mongoose;

const VacationSchema = new Schema({
    idEmployee: {type: Number, required: true},
    start: {type: String, required: true},
    finish: {type: String, required: true},
    days: {type: Number, required: true},
});

module.exports = mongoose.model('Vacation', VacationSchema);