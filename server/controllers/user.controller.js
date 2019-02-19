const User = require('../models/user')

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const user = new User({
        idUser: req.body.idUser,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    })
    await user.save();
    res.json({
        'status':"User saved"
    });

}
userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user);
}
userCtrl.editUser = async (req, res) => {
    const {id} = req.params;
    const user = {
        idUser: req.body.idUser,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    }
    await User.findByIdAndUpdate(id, {$set:user}, {new:true});
    res.json({status: 'User Updated'})
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User Deleted'
    })
}
module.exports = userCtrl;