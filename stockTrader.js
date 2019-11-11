/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell 
one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

console.log(stockTrader([7,1,5,3,4,6,4,5]))

function stockTrader(stocks) {
    const collection = [stocks[0]]
    let profit = 0

    for (let i = 1; i < stocks.length; i++) {
        const currPrice = stocks[i]
        const prevPrice = stocks[i-1]
        if ( currPrice < prevPrice && collection.length > 0) { 
            const profitYield = calculatePrice([...collection])
            profit += profitYield
            collection.length = 0
        } 
        collection.push(currPrice)
    }
    const finalProfitYeild = calculatePrice([...collection])
    profit += finalProfitYeild

    return profit
}

function calculatePrice(priceList) {
    if (priceList.length < 2) {
        return 0
    }
    const cost = (priceList.slice(0,priceList.length - 1)).reduce((acc, el) => acc + el) * -1
    const numShares = (priceList.length - 1)
    const worth = (priceList[priceList.length - 1]) * numShares
    const profit =   worth + cost
    return profit
}