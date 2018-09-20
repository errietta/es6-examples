function a_regular_function() {
  console.log("Hello, world");
}

const another_function = function() {
  console.log("I like cake");
}

a_regular_function();
another_function();

const print_answer = () => {
  console.log("the answer to life is 42");
}

const get_answer = () => 42;

const print_answer_2 = () => {
 console.log("the answer is " + get_answer());
}

print_answer();
print_answer_2();

const add = (a, b) => a+b;
const square = a => a*a;

console.log(add (2, 5));
console.log(square (2));
