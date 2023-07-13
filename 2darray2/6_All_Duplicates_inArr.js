// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

function allduplicate(nums) {
  let hash = {}
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (!hash[num]) {
      hash[num] = 1
    } else {
      result.push(num)
    }
  }

  return result
}

const res= allduplicate([4,3,2,7,8,2,3,1])
console.log(res)


