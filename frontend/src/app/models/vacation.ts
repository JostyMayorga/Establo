export class Vacation {
    constructor(_id='', idEmployee='', start='', finish='', days=0){
        this._id = _id;
        this.idEmployee = idEmployee;
        this.start = start;
        this.finish = finish;
        this.days = days;

    }

    _id: String;
    idEmployee: String;
    start: String;
    finish: String;
    days: Number;
}
