const log = console.log;

function myInfo() {
  console.log("Hi, my name is Kris and Im 26 years old.");
}
myInfo();

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


function test(name, age)(
    this.name = name;
    this.age = age;
)

log(test('jason', 20))