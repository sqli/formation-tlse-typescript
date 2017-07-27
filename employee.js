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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./length.decorator", "./person"], function (require, exports, length_decorator_1, person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        __decorate([
            length_decorator_1.Length(3, 20)
        ], Employee.prototype, "_jobTitle", void 0);
        __decorate([
            length_decorator_1.Length(3, 20)
        ], Employee.prototype, "_companyName", void 0);
        return Employee;
    }(person_1.Person));
    exports.default = Employee;
});
//# sourceMappingURL=employee.js.map