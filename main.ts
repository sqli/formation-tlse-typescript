import { Civility } from './person';
import { CrudRepository } from './crud-repository';
import Employee from './employee';

const employeeRepo = new CrudRepository<Employee>();
const employee01 = new Employee('Technical Lead', 'SQLI', Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');
const employee02 = new Employee('Technical Lead', 'SQLI', Civility.Mr, ['Coma', 'Delperier'], 'Robin', 'Franck', 'Florent');

console.log(employee01.getPitch());
console.log(employee02.getPitch());