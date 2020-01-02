export const checkIfLuckyNumber = (number, originalNumber = number) => {
    const digitsArr = number
      .toString()
      .split("")
      .map(num => parseInt(num, 10));
  
    const sumOfDigits = digitsArr.reduce((cummulativeValue, currentValue) => {
      return cummulativeValue + currentValue;
    }, 0);
  
    let numOfDigits = sumOfDigits.toString().length;
    if (sumOfDigits === 7) {
      console.log(originalNumber);
      return originalNumber;
    } else if (numOfDigits > 1) {
      return checkIfLuckyNumber(sumOfDigits, originalNumber);
    }
  };
  
  const lucky = (number1, number2) => {
    let luckyNumbers = [];
    for (let i = number1; i <= number2; i++) {
      const isLucky = checkIfLuckyNumber(i);
      if (isLucky) {
        luckyNumbers = luckyNumbers.concat(i);
      }
    }
    // console.log(luckyNumbers)
    return luckyNumbers;
  };
  
  // lucky(0, 100);
  lucky(100, 200);
  // lucky(62400, 62500);
  // lucky(999999999900, 1000000000000);
  
  export default lucky;
  