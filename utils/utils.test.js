const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);
    if(res !== 44) {
        throw new Error(`returned ${res} instead of 44`);
    }
    console.log(res);
});

it('should square a number', () => {
    let res = utils.square(5);
    if(res !== 25) {
        throw new Error(`Expected 25 but got ${res}`);
    }
    console.log(res);
})