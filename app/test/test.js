const testHelper = require('../index');

var assert = require('chai').assert;

describe('add()', function() {
  it('should return 9 when you add 4 and 5', function(){
    assert.equal(9, testHelper.add(4,5));
  });
})

describe('multiple()', function() {
  it('should return 20 when you multiply 4 and 5', function(){
    assert.equal(20, testHelper.multiple(4,5));
  });
})


const numbers = [1, 2, 3, 4, 5];
describe('isArray()', function() {
  it('should return TRUE if "numbers" is an array', function(){
    assert.isArray(numbers, 'is array of numbers');
  });
})
describe('include()', function() {
  it('should return TRUE if "numbers" includes 2', function(){
    assert.include(numbers, 2, 'array contains 2');
  });
})
describe('lengthOf()', function() {
  it('should return TRUE if "numbers" contains 5 numbers', function(){
    assert.lengthOf(numbers, 5, 'array contains 5 numbers');
  });
})


