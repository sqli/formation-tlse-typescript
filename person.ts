enum Civility {
    Unknown = '(Mr or Ms)',
    Mr = 'Mr',
    Ms = 'Ms'
};

interface PersonInterface {
    readonly _civility: Civility;
    readonly _lastName: string;
    readonly _firstName?: string;
    readonly _otherFirstNames?: string[];
    fullName(): string;
}

abstract class Person implements PersonInterface {

    private static _persons: Person[] = [];

    readonly _civility: Civility;
    _lastName: string;
    readonly _firstName?: string;
    readonly _otherFirstNames?: string[];

    constructor(civility: Civility = Civility.Unknown, lastName: string, firstName?: string, ...otherFirstNames: string[]) {
        this._civility = civility;
        this._lastName = lastName;
        this._firstName = firstName;
        this._otherFirstNames = otherFirstNames;
        
        Person._persons.push(this);
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(newLastName: string) {
        if (newLastName) {
            this._lastName = newLastName;
        } else {
            console.log('The new last name should not be empty');
        }
    }

    fullName(): string {
        let fullName = this._civility + ' ' + this._lastName;
        if (this._firstName) {
            fullName += ' ' + this._firstName + ' ' + this._otherFirstNames.join(' ');
        }
        return fullName;
    }

    static findAll(): Person[] {
        return Person._persons;
    }
}

export { Civility as Civility };
export { Person as Person };