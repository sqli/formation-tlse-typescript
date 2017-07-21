import { Person, Civility } from './person';

class Employee extends Person {

    _jobTitle: string;
    _companyName: string;

    constructor(jobTitle: string, companyName: string, civility: Civility = Civility.Unknown, lastName: string, firstName?: string, ...otherFirstNames: string[]) {
        super(civility, lastName, firstName, ...otherFirstNames);
        this._jobTitle = jobTitle;
        this._companyName = companyName;
    }

    getPitch(): string {
        return `Hello, my name is ${this.fullName()} and I'm ${this._jobTitle} for ${this._companyName}`;
    }

}

export default Employee;