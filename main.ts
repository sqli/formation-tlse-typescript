import { Civility } from './person';
import { CrudRepository } from './crud-repository';
import Employee from './employee';

const employeeRepo = new CrudRepository<Employee>();
const employee = new Employee('Technical Lead', 'SQLI', Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');

employeeRepo.create(employee);
const employees = employeeRepo.findAll();

console.log(employees);