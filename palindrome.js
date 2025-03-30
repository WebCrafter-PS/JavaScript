/* Without converting it to string
1.loop through each element - NO -  it's a number
2.convert to array using Array.from()-  NO -  it's for string  

i need to get each digit - use % 10 - reminder will be the digits
123 %10 =3 reminder
123 % 10 = 2 reminder
123 % 10 = 1 reminder
*/

var Palindrome = function (x) {
  let original = x;
  let reverse = 0;
  while (num > 0) {
    let reminder = x % 10;
    reverse = reverse * 10 + reminder; //add the reminder to the left -30
    x = Math.floor(x / 10); //to remove last digit and decimal 
  }

  console.log(original === reverse);
};

Palindrome(1213);

// By converting to string
var isPalindrome = function (x) {
  let str = x.toString();

  if (str >= 0) {
    let array = str.split("").reverse().join("");
    return array == x;
  } else {
    let newstr = str.slice(0, 1);
    let array1 = newstr.split("").reverse().join("");
    return x == -array1;
  }
};
