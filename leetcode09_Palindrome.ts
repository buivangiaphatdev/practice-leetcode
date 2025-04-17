//=========================JAVA========================
// public class leetcode09 {
//     public static boolean isPalindrome(int x){
//         String str = String.valueOf(x);
 
//         int left = 0;
//         int right = str.length()-1;
 
//         while (left<right){
//             if(str.charAt(left) != str.charAt(right)){
//                 return false;
//             }
//             left++;
//             right--;
//         }
//         return true;
//     }
 
//      public static void main(String[] args){
//      boolean res = isPalindrome(-121);
//      System.out.println(res);
//      }
 
//  }
//==========================END JAVA======================== 

function isPalindrome(x: number): boolean {
  // Convert the number to a string
  const str = x.toString();

  // Initialize two pointers
  let left = 0;
  let right = str.length - 1;

  // Check if the characters at the two pointers are equal
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }

  return true; // It's a palindrome
}

console.log(isPalindrome(121)); // true
