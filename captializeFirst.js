export const capitaliseAllWords = (input) => {
    // Write your code here
    //split into array
    //if its alphabets - replace - 1st letter of each element
    //use slice to add + all other letters from 1st
  
    if (input === '') return '';
    const arr = input.split(' ');
    const newarr = arr.map((ele) => ele[0].toUpperCase() + ele.slice(1));
  
    const str = newarr.join(' ');
    return str;
  };
  