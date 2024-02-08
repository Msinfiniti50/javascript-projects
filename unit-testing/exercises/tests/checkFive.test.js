const checkFive = require('../checkFive.js');
describe("checkFive",  function(){
test("should be 2 or grearer but less than 5", function(){
    let output = checkFive(2);
    expect(output).toBe("2 is less than 5.");
}); 
test("should be 5", function(){
    let output = checkFive(5);
    expect(output).toBe("5 is equal to 5.");
});
test("should be 6 or greater", function(){
    let output = checkFive(6);
    expect(output).toBe("6 is greater than 5.");
});
});