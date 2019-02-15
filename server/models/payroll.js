const mongoose = require ('mongoose');
const {Schema} = mongoose;

const PayrollSchema = new Schema({
    idEmployee: {type: Number, required: true},
    mes: {type: Number, required: true},
    importe: {type: Number, required: true},
    irpf: {type: Number, required: true},
});

module.exports = mongoose.model('Payroll', PayrollSchema);