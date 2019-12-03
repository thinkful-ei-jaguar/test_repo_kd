// const log = console.log;

// function myInfo() {
//   console.log("Hi, my name is Kris and Im 26 years old.");
// }
// myInfo();

// const createGreeting = () => {
//   let greeting;
//   function greet() {
//     greeting = "Hello, My name is Jason";
//     return greeting;
//   };
// };

// // createGreeting();

// const greeted = greet();

// log(greet);
const log = console.log;

const makeGreeting = function() {
  let greet;
  return function(name, age) {
    greet = `My name is ${name} and I am ${age()}`;
    return greet;
  };
};
const greetings = makeGreeting();

// log(greetings("Jason", 40));
log(
  greetings("Jason", function() {
    return 40;
  })
);
