"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Civility;
(function (Civility) {
    Civility["Unknown"] = "(Mr or Ms)";
    Civility["Mr"] = "Mr";
    Civility["Ms"] = "Ms";
})(Civility || (Civility = {}));
exports.Civility = Civility;
;
var Person = (function () {
    function Person(civility, lastName, firstName) {
        if (civility === void 0) { civility = Civility.Unknown; }
        var otherFirstNames = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            otherFirstNames[_i - 3] = arguments[_i];
        }
        this._civility = civility;
        this._lastName = lastName;
        this._firstName = firstName;
        this._otherFirstNames = otherFirstNames;
        Person._persons.push(this);
    }
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (newLastName) {
            if (newLastName) {
                this._lastName = newLastName;
            }
            else {
                console.log('The new last name should not be empty');
            }
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.fullName = function () {
        var fullName = this._civility + ' ' + this._lastName;
        if (this._firstName) {
            fullName += ' ' + this._firstName + ' ' + this._otherFirstNames.join(' ');
        }
        return fullName;
    };
    Person.findAll = function () {
        return Person._persons;
    };
    Person._persons = [];
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map