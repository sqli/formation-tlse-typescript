var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(jobTitle, companyName, civility, lastName, firstName) {
        if (civility === void 0) { civility = Civility.Unknown; }
        var otherFirstNames = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            otherFirstNames[_i - 5] = arguments[_i];
        }
        var _this = _super.apply(this, [civility, lastName, firstName].concat(otherFirstNames)) || this;
        _this._jobTitle = jobTitle;
        _this._companyName = companyName;
        return _this;
    }
    Employee.prototype.getPitch = function () {
        return "Hello, my name is " + this.fullName() + " and I'm " + this._jobTitle + " for " + this._companyName;
    };
    return Employee;
}(Person));
var employee = new Employee('Technical Lead', 'SQLI', Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');
console.log(employee.getPitch());
//# sourceMappingURL=main.js.map