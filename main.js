"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var crud_repository_1 = require("./crud-repository");
var employee_1 = require("./employee");
var employeeRepo = new crud_repository_1.CrudRepository();
var employee = new employee_1.default('Technical Lead', 'SQLI', person_1.Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');
employeeRepo.create(employee);
var employees = employeeRepo.findAll();
console.log(employees);
//# sourceMappingURL=main.js.map