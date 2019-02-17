export class User {
    constructor(_id='', idUser='', name='', lastName='', email='', password=''){
        this._id = _id;
        this.idUser = idUser;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    _id: string;
    idUser: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
}
