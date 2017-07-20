var Civility;
(function (Civility) {
    Civility["Unknown"] = "(Mr or Ms)";
    Civility["Mr"] = "Mr";
    Civility["Ms"] = "Ms";
})(Civility || (Civility = {}));
;
function fullName(civility, lastName, firstName) {
    if (civility === void 0) { civility = Civility.Unknown; }
    var otherFirstNames = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        otherFirstNames[_i - 3] = arguments[_i];
    }
    var fullName = civility + ' ' + lastName;
    if (firstName) {
        fullName += ' ' + firstName + ' ' + otherFirstNames.join(' ');
    }
    return fullName;
}
var ex0 = fullName(undefined, 'Coma Delperier');
var ex1 = fullName(Civility.Mr, 'Coma Delperier');
var ex2 = fullName(Civility.Mr, 'Coma Delperier', 'Robin');
var ex3 = fullName(Civility.Mr, 'Coma Delperier', 'Robin', 'Franck', 'Florent');
console.log(ex0);
console.log(ex1);
console.log(ex2);
console.log(ex3);
//# sourceMappingURL=main.js.map