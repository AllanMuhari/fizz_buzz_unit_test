//write a function that will that in a number
//if the number is divisible by 3 return fizz
//if the number is divisible by 5 return buzz
//if the number is divisible by 3 and 5 return fizzbuzz
//otherwise if the number is not divisible by 3 or 5 , then return the number itself

const { fizzbuzz } = require("./fizzbuzz");
describe("fizzbuzz", () => {
  it("number divisible by 3 returns fizz", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
  });
  it("number divisible by 5 returns buzz", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });
  it("number divisible by 3 and 5 returns fizzbuzz", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  it("number divisible is not divisible by 3 or 5", () => {
    expect(fizzbuzz(11)).toBe(11);
    expect(fizzbuzz(13)).toBe(13);
  });
});
