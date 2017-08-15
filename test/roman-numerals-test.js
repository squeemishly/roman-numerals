var assert = require('chai').assert;
var romanNumerals = require('..roman-numerals')

describe("it can return the roman numeral for arabic numbers", function() {
  it("when a number is given", function() {
    ©
    assert.equal(rns.convert(1), "I");
    assert.equal(rns.convert(5), "V");
    assert.equal(rns.convert(10), "X");
    assert.equal(rns.convert(50), "L");
    assert.equal(rns.convert(100), "C");
    assert.equal(rns.convert(500), "D");
    assert.equal(rns.convert(1000), "M");
  })

  it("gives an error when it's not a number", function() {
    var rns = new romanNumerals;
    assert.equal(rns.convert("I"), "Wrong.")
  })
})
