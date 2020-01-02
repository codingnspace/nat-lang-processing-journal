import lucky, {checkIfLuckyNumber} from "./lucky";

const toOneHundred = [7, 16, 25, 34, 43, 52, 61, 70, 79, 88, 97]
const toTwoHundred = [106, 115, 124, 133, 142, 151, 160, 169, 178, 187, 196];
const toSixtyTwoFiveHundred = [62404, 62413, 62422, 62431, 62440, 62449, 62458,
  62467, 62476, 62485, 62494];
const toOneMillion = [999999999907, 999999999916, 999999999925, 
  999999999934, 999999999943, 999999999952, 999999999961, 
  999999999970, 999999999979, 999999999988, 999999999997];

describe('lucky(num1, num2)', () => {
  test("returns array of lucky numbers found within the given numerical range", () => {
    expect(lucky(0, 100)).toEqual(toOneHundred);
    expect(lucky(100, 200)).toEqual(toTwoHundred);
    expect(lucky(62400, 62500)).toEqual(toSixtyTwoFiveHundred);
    expect(lucky(999999999900, 1000000000000)).toEqual(toOneMillion);
  });
  
  test("returns empty array when no lucky numbers found", () => {
    expect(lucky(0, 6)).toEqual([]);
  });
})


describe('checkIfLuckyNumber(num)', () => {
  test("returns the number if it's lucky", () => {
    expect(checkIfLuckyNumber(7)).toEqual(7);
    expect(checkIfLuckyNumber(106)).toEqual(106);
  });

  test("returns undefined if the number isn't lucky", () => {
    expect(checkIfLuckyNumber(60)).toEqual(undefined);
    expect(checkIfLuckyNumber(4100)).toEqual(undefined);
  });
})