enum Civility {
    Unknown = '(Mr or Ms)',
    Mr = 'Mr',
    Ms = 'Ms'
};

function fullName(civility: Civility = Civility.Unknown, lastName: string, firstName?: string, ...otherFirstNames: string[]): string{
    let fullName = civility + ' ' + lastName;
    if (firstName) {
        fullName += ' ' + firstName + ' ' + otherFirstNames.join(' ');
    }
    return fullName;
}

const ex0 = fullName(undefined, 'Coma Delperier');
const ex1 = fullName(Civility.Mr, 'Coma Delperier');
const ex2 = fullName(Civility.Mr, 'Coma Delperier', 'Robin');
const ex3 = fullName(Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');

console.log(ex0);
console.log(ex1);
console.log(ex2);
console.log(ex3);