// https://www.codechef.com/problems/ALG06

/* 
All submissions for this problem are available.
Jimmy has a huge quantity of various steel rods of different lengths that he wants to sell. 
After a long search he was able to find a buyer. But the buyer has kept a condition that all 
the pieces of rods must be of same length. The buyer will pay as per the market price per unit 
length for the rods. Now, for making all rods of same length, Jimmy has to cut the rods which 
will incur him some cost. The pieces of rods that are left over are thrown away. Help Jimmy 
to make the cuts such that he can maximize the amount of money he earns.

Input
1st line will contain number of test cases

1st line of each test case will contain three integers N, M, C 
where N=Number of rods initially, M= Market price of rods per unit length, 
C = cost incurred for each cut

2nd line of each test case will contain N integers separated by spaces, 
which are the lengths of each rod.

Output
Output the maximum amount of money Jimmy can make

Example
Input:
2
5 1 2
100 200 100 300 100 199
5 2 1000
100 200 50 100 100


Output:
794
600
*/

const cuttingRods = (n, m, c, rods) => {
    const maxPipeSize = Math.max(...rods);

    const potentialProfits = new Set()

    for ( let i = maxPipeSize; i > 0; i-- ) {
        let maxProfit = 0;
        for (let j = 0; j < rods.length; j++) {
            const pipe = rods[j];
            const keep = pipe === i ? (pipe * m) : 0;
            const toss = 0
            let cut = 0;
            if (pipe > i) {
                if (pipe % i === 0) {
                    cut = (pipe * m) - ((Math.floor(pipe/i) - 1)  * c)
                } else {
                    cut = (pipe * m) - (Math.floor(pipe/i)  * c) - ((pipe % i) * m)
                }
            }
            maxProfit = maxProfit + Math.max(...[keep, toss, cut]) 
        }

        potentialProfits.add(maxProfit)
    }
    return Math.max(...potentialProfits)
}

// console.log(cuttingRods(5, 1, 2, [100, 200, 100, 300, 100]))
console.log(cuttingRods(5, 2, 1000, [100, 200, 50, 100, 100]))

