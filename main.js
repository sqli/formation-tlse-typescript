define(["require", "exports", "./person", "./crud-repository", "./employee"], function (require, exports, person_1, crud_repository_1, employee_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var employeeRepo = new crud_repository_1.CrudRepository();
    var employee = new employee_1.default('Technical Lead', 'SQLI', person_1.Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');
    employeeRepo.create(employee);
    var employees = employeeRepo.findAll();
    console.log(employees);
});
//# sourceMappingURL=main.js.map