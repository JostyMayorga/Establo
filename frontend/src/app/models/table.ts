export class Table {
    constructor(_id='', idTable='', description='', state=''){
        this._id = _id;
        this.idTable = idTable;
        this.description = description;
        this.state = state;

    }

    _id: String;
    idTable: String;
    description: String;
    state: String;
}
