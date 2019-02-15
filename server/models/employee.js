const mongoose = require ('mongoose');
const {Schema} = mongoose;

const EmployeeSchema = new Schema({
    idEmployee: {type: Number, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    nif: {type: String, required: true},
    social: {type: String, required: true},
    department: {type: String, required: true},
    position: {type: String, required: true},
});

module.exports = mongoose.model('Employee', EmployeeSchema);