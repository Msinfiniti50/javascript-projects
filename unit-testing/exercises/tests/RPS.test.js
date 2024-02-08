const whoWon = require('../RPS.js');
describe("RPS",  function(){
   test(" should player1 have rock and player2 has rock, it's a tie", function(){
            let output = whoWon('rock', 'rock');
            expect(output).toBe('Tie!');
        });  
        test ("should player1 have '' and player2 have'', invaid input: please enter rock, paper, or scissors", function(){
            let output = whoWon('', '');
            expect(output).toBe("invalid input: please enter rock, paper, or scissors");
        });            
});    
    