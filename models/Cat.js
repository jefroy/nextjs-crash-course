export class Cat {
    constructor(
        cat
    ) {
        // debugger
        this._id = cat.id
        this._image = cat.image
        this._gender = cat.gender
        this._name = cat.name
        this._favoured = cat.favoured
        this._phone = cat.phone
        this._desc = cat.desc
        this._email = cat.email
        this._color = cat.color
        this._favoured = cat.favoured
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get favoured() {
        return this._favoured;
    }

    set favoured(value) {
        this._favoured = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}
