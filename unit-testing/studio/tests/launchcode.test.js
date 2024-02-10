// launchcode.test.js code:
const launchcode = require('../index.js');
describe("Testing launchcode", function(){

describe("Testing launchcode", function(){
  test("launchcode: organization", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("launchcode: executiveDirector", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("launchcode: percentageCoolEmployees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("launchcode: programsOffered", function(){
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
});
  describe("Testing launchOutput", function(){
  test("launchOutput: Launch",  function(){
    expect(launchcode.launchOutput(2)).toBe("Launch!");
    });
  });
  describe("Testing launchOutput", function(){
    test("launchOutput: Code!",  function(){
      expect(launchcode.launchOutput(3)).toBe("Code!");
      });
    });
    describe("Testing launchOutput", function(){
      test("launchOutput: Rocks!",  function(){
        expect(launchcode.launchOutput(5)).toBe("Rocks!");
        });
      });
      describe("Testing launchOutput", function(){
        test("launchOutput: LaunchCode!",  function(){
          expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
          });
        });
        
          describe("Testing launchOutput", function(){
            test("launchOutput: Launch Rocks! (CRASH!!!)",  function(){
              expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!)");
              });
            });
          });







 








  // Write your unit tests here!//
