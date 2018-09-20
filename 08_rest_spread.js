// Rest
let sum = (...args) => (
  args.reduce((previous, current) => previous + current)
);

console.log(sum(1,2,3,4));

let multiply = (a,b) => a * b;
console.log(multiply(...[1,2]));


let users = ['Henry J. Waternoose', 'James P. Sullivan', 'Mike Wazowzki'];
let users2 = [ ... users];
users2[0] = 'Roz';

console.log(users2, users);
