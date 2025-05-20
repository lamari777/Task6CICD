const expect = chai.expect;

describe('integerToRoman', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 3 to "III"', function() {
    expect(integerToRoman(3)).to.equal('III');
  });

  it('should convert 4 to "IV"', function() {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('should convert 10 to "X"', function() {
    expect(integerToRoman(10)).to.equal('X');
  });

  it('should convert 15 to "XV"', function() {
    expect(integerToRoman(15)).to.equal('XV');
  });

  it('should convert 30 to "XXX"', function() {
    expect(integerToRoman(30)).to.equal('XXX');
  });

  it('should convert 40 to "XL"', function() {
    expect(integerToRoman(40)).to.equal('XL');
  });

  it('should convert 140 to "CXL"', function() {
    expect(integerToRoman(140)).to.equal('CXL');
  });

  it('should convert 2000 to "MM"', function() {
    expect(integerToRoman(2000)).to.equal('MM');
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  // Errors
  it('should throw error for input 0', function() {
    expect(() => integerToRoman(0)).to.throw('The number must be between 1 and 3999.');
  });

  it('should throw error for negative numbers', function() {
    expect(() => integerToRoman(-1)).to.throw('The number must be between 1 and 3999.');
  });

  it('should throw error for input over 3999', function() {
    expect(() => integerToRoman(4000)).to.throw('The number must be between 1 and 3999.');
  });
});


describe('romanToInteger', function() {
  it('should convert "I" to 1', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('should convert "II" to 2', function() {
    expect(romanToInteger('II')).to.equal(2);
  });

  it('should convert "III" to 3', function() {
    expect(romanToInteger('III')).to.equal(3);
  });

  it('should convert "IV" to 4', function() {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('should convert "IX" to 9', function() {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('should convert "X" to 10', function() {
    expect(romanToInteger('X')).to.equal(10);
  });

  it('should convert "XXX" to 30', function() {
    expect(romanToInteger('XXX')).to.equal(30);
  });

  it('should convert "MMM" to 3000', function() {
    expect(romanToInteger('MMM')).to.equal(3000);
  });

  it('should convert "MCM" to 1900', function() {
    expect(romanToInteger('MCM')).to.equal(1900);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  // Errors
  it('should throw error for invalid characters "ABC"', function() {
    expect(() => romanToInteger('ABC')).to.throw('The Roman numeral contains invalid characters.');
  });

  it('should throw error for empty string', function() {
    expect(() => romanToInteger('')).to.throw('Input must be a valid Roman numeral.');
  });

  it('should throw error for non-canonical form "IIII"', function() {
    expect(() => romanToInteger('IIII')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('should throw error for invalid repetition "VV"', function() {
    expect(() => romanToInteger('VV')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('should throw error for invalid repetition "XXXX"', function() {
    expect(() => romanToInteger('XXXX')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('should throw error for invalid format "CMM"', function() {
    expect(() => romanToInteger('CMM')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('should throw error for invalid prefix "IMM"', function() {
    expect(() => romanToInteger('IMM')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('should throw error for invalid repetition "DD"', function() {
    expect(() => romanToInteger('DD')).to.throw('The Roman numeral is not in canonical form.');
  });
});

