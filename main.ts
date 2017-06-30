let someValue: any = 'Hello World';

const strLength1: number = (<string>someValue).length;
const strLength2: number = (someValue as string).length;

console.log('strLength1: ', strLength1);
console.log('strLength2: ', strLength2);