export class Table {
    constructor(_id='', idTable=0, numberChair=0, description='', state=''){
        this._id = _id;
        this.idTable = idTable;
        this.numberChair = numberChair;
        this.description = description;
        this.state = state;

    }

    _id: String;
    idTable: Number;
    numberChair: Number;
    description: String;
    state: String;
}
