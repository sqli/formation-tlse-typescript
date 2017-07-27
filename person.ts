enum Civility {
    Unknown = '(Mr or Ms)',
    Mr = 'Mr',
    Ms = 'Ms'
};

interface PersonInterface {
    readonly _civility: Civility;
    readonly _lastName: string | string[];
    readonly _firstName?: string;
    readonly _otherFirstNames?: string[];
    fullName(): string;
}

abstract class Person implements PersonInterface {

    private static _persons: Person[] = [];

    readonly _civility: Civility;
    _lastName: string | string[];
    readonly _firstName?: string;
    readonly _otherFirstNames?: string[];

    constructor(civility: Civility = Civility.Unknown, lastName: string | string[], firstName?: string, ...otherFirstNames: string[]) {
        this._civility = civility;
        this._lastName = lastName;
        this._firstName = firstName;
        this._otherFirstNames = otherFirstNames;
        
        Person._persons.push(this);
    }

    get lastName(): string | string[] {
        return this._lastName;
    }

    set lastName(newLastName: string | string[]) {
        if (newLastName) {
            this._lastName = newLastName;
        } else {
            console.log('The new last name should not be empty');
        }
    }

    fullName(): string {
        let lastName: string;
        if (this._lastName instanceof Array) {
            lastName = this._lastName.join(' ');
        } else {
            lastName = this._lastName.toString();
        }
        let fullName = this._civility + ' ' + lastName;
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