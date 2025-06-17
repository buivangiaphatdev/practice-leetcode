var isPalindrome = function (s) {
  let cleanedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (cleanedString.length === 0) {
    return true;
  }
  let left = 0;
  let right = cleanedString.length - 1;

  // Check if the characters at the two pointers are equal
  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }

  return true; // It's a palindrome
};
console.log(isPalindrome("race a car"));
