const Table = require('../models/table')

const tableCtrl = {};

tableCtrl.getTables = async (req, res) => {
    const tables = await Table.find();
    res.json(tables);
}

tableCtrl.createTable = async (req, res) => {
    const table = new Table({
        idTable: req.body.idTable,
        numberChair: req.body.numberChair,
        description: req.body.description,
        state: req.body.state
    })
    await table.save();
    res.json({
        'status':"Table saved"
    });

}
tableCtrl.getTable = async (req, res) => {
    const table = await Table.findById(req.params.id)
    res.json(table);
}
tableCtrl.editTable = async (req, res) => {
    const {id} = req.params;
    const table = {
        idTable: req.body.idTable,
        numberChair: req.body.numberChair,
        description: req.body.description,
        state: req.body.state
    }
    await Table.findByIdAndUpdate(id, {$set:table}, {new:true});
    res.json({status: 'Table Updated'})
}

tableCtrl.deleteTable = async (req, res) => {
    await Table.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Table Deleted'
    })
}
module.exports = tableCtrl;