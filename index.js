console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

const Login = SUPER_SECRET_PASSWORD === receivedPassword;
console.log(Login);

// Part 2: Even / Odd
const number = 6;
const EvenOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(EvenOdd);

// Part 3: Hotdogs
const numberOfHotdogs = 42;

const payment = (() => {
  if (numberOfHotdogs < 5) {
    return numberOfHotdogs * 5;
  } else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    return numberOfHotdogs * 1.5;
  } else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
    return numberOfHotdogs * 1;
  } else if (numberOfHotdogs >= 1000000) {
    return numberOfHotdogs * 0.1;
  }
})();

console.log(payment);

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn ..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + (name === "Jessica" ? "Coach" : name) + "!";

console.log(greeting);
