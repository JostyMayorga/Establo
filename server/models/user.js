const mongoose = require ('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    idUser: {type: Number, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: Number, required: true},
});

module.exports = mongoose.model('User', UserSchema);