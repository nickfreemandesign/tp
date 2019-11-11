/* 
    Given a number of rounds to play, write a function that outputs all possible permutations
    that could be played for one player. For example, all possible permutations for a 2 round game
    would output:

    [ [ ‘rock’, ‘rock’ ], [ ‘rock’, ‘paper’ ], [ ‘rock’, ‘scissors’ ],
    [ ‘paper’, ‘rock’ ], [ ‘paper’, ‘paper’ ], [ ‘paper’, ‘scissors’ ],
    [ ‘scissors’, ‘rock’ ], [ ‘scissors’, ‘paper’ ], [ ‘scissors’, ‘scissors’ ] ]
 */

const rockPaperScissors = function( numOfRounds ) {
    // all possible selections
    const choices = ['rock', 'paper', 'scissors'];
    const allPossibilities = []

    const roundChoice  = function(round, roundNumber) {
        // iterate possibilities
        for(var i = 0; i < choices.length; i++){
            // add choice
            round.push(choices[i]);
            if(roundNumber === numOfRounds){
              allPossibilities.push(round.slice());
            } else {
              roundChoice(round, roundNumber + 1);
            }
            round.pop();
        }
    }

    roundChoice([], 1);
    return allPossibilities
}

console.log(rockPaperScissors(3))
