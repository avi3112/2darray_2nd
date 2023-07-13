// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

function coinarrange(n) {
    let stair = 1
    let num = n
    while (num>=stair) {
        num-=stair
        stair++
    } return stair-1
};


const result= coinarrange(5)
console.log(result)
