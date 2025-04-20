//=========================Java========================

// class Solution {
//     public int removeDuplicates(int[] nums) {
//      int n =nums.length;
//      if( n==0||n==1)
//      return n;

//      int i=1, j=1;
//      while(j<n){
//         if(nums[j]!=nums[j-1]){
//             nums[i]=nums[j];
//             i++;
//         }
//         j++;
//      }   
//      return i;
//     }

//=========================End-Java====================

var removeDuplicates = function(nums) {
    const n=nums.length;

    if (n===0 ||n===1) return n;

    let i=1; j=1;
    while(j<n){
        if(nums[j]!==nums[j-1]){
            nums[i]===nums[j];
            i++;
        }
        j++;
    }
    return i;
}

console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4])) // 5