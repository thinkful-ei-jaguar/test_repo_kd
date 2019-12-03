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
  let greet; //<= variable intitialization
  return function(name, age) {
    // variable assignment below
    greet = `My name is ${name} and I am ${age()}`; //<= execution of function passed into the main    // return asigned variable                        function invokation
    return greet;
  };
};

// variable declartion assigned to main function
const greetings = makeGreeting();

// log(greetings("Jason", 40));
log(
  // main function execution through variable
  greetings("Jason", function() {
    //<= function argument as example from mentor session
    return 40; //<=asigned age to age parameter returning age through callback
  })
);
