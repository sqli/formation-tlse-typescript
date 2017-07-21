enum Civility {
    Unknown = '(Mr or Ms)',
    Mr = 'Mr',
    Ms = 'Ms'
};

interface PersonInterface {
    readonly civility: Civility;
    readonly lastName: string;
    readonly firstName?: string;
    readonly otherFirstNames?: string[];
    fullName(): string;
}

class Person implements PersonInterface{

    civility: Civility;
    lastName: string;
    firstName?: string;
    otherFirstNames?: string[];

    constructor(civility: Civility = Civility.Unknown, lastName: string, firstName?: string, ...otherFirstNames: string[]) {
        this.civility = civility;
        this.lastName = lastName;
        this.firstName = firstName;
        this.otherFirstNames = otherFirstNames;
    }

    fullName(): string {
        let fullName = this.civility + ' ' + this.lastName;
        if (this.firstName) {
            fullName += ' ' + this.firstName + ' ' + this.otherFirstNames.join(' ');
        }
        return fullName;
    }
}

const person = new Person(Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent')

console.log(person.fullName());