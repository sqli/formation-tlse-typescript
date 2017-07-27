import { Length } from './length.decorator';
import { Person, Civility } from './person';
import { LastName } from './lastname.alias';

class Employee extends Person {

    @Length(3, 20)
    _jobTitle: string;
    
    @Length(3, 20)
    _companyName: string;

    constructor(jobTitle: string, companyName: string, civility: Civility = Civility.Unknown, lastName: LastName, firstName?: string, ...otherFirstNames: string[]) {
        super(civility, lastName, firstName, ...otherFirstNames);
        this._jobTitle = jobTitle;
        this._companyName = companyName;
    }

    getPitch(): string {
        return `Hello, my name is ${this.fullName()} and I'm ${this._jobTitle} for ${this._companyName}`;
    }

}

export default Employee;