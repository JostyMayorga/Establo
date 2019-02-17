const mongoose = require ('mongoose');
const {Schema} = mongoose;

const ReservationSchema = new Schema({
    idReservation: {type: Number, required: true},
    idUser: {type: Number, required: true},
    numberTable: {type: Number, required: true},
    hourBegin: {type: Number, required: true},
});

module.exports = mongoose.model('Reservation', ReservationSchema);