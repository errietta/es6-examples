const universe = () => {
   console.log("function called");

   return new Promise((resolve,reject) => {
       setTimeout(() => resolve(42), 1000);
   })
};

universe().then(answer => console.log('answer', answer));

console.log('the end');
