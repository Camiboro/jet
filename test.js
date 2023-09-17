const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.2 dollars", function(){
    expect(fromEuroToDollar(1)).toBe(1.2);
});

test("One dollar should be 127.9/1.2 yens", function(){
    const expected = 127.9/1.2;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});

test("One yen should be 0.8/127.9 pounds", function(){
    const expected = 0.8/127.9;
    expect(fromYenToPound(1)).toBeCloseTo(expected);
});
