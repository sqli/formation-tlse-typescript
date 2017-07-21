"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(jobTitle, companyName, civility, lastName, firstName) {
        if (civility === void 0) { civility = person_1.Civility.Unknown; }
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
}(person_1.Person));
exports.default = Employee;
//# sourceMappingURL=employee.js.map