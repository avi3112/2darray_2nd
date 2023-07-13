// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:

// Input: s = "IDID"
// Output: [0,4,1,3,2]
// Example 2:

// Input: s = "III"
// Output: [0,1,2,3]



var diStringMatch = function(s) {
    let inc = 0;
    let dec = s.length;
    let ans = [];
    let indx = 0;

    for(let i=0;i<s.length;i++){
        if(s[i]=='I'){
            ans.push(inc);
            inc+=1;
            indx++;
        }
        else if(s[i]=='D') {
            ans.push(dec);
             dec-=1;
             indx++;
        }
          
    }
  if(indx==s.length)ans.push(inc);
    return ans;
};