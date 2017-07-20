var Civility;
(function (Civility) {
    Civility["Unknown"] = "(Mr or Ms)";
    Civility["Mr"] = "Mr";
    Civility["Ms"] = "Ms";
})(Civility || (Civility = {}));
;
var Person = (function () {
    function Person(civility, lastName, firstName) {
        if (civility === void 0) { civility = Civility.Unknown; }
        var otherFirstNames = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            otherFirstNames[_i - 3] = arguments[_i];
        }
        this.civility = civility;
        this.lastName = lastName;
        this.firstName = firstName;
        this.otherFirstNames = otherFirstNames;
    }
    Person.prototype.fullName = function () {
        var fullName = this.civility + ' ' + this.lastName;
        if (this.firstName) {
            fullName += ' ' + this.firstName + ' ' + this.otherFirstNames.join(' ');
        }
        return fullName;
    };
    return Person;
}());
var person = new Person(Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');
console.log(person.fullName());
//# sourceMappingURL=main.js.map