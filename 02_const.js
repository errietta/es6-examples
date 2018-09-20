function showcase_const() {
  const PI = "Approximately 3.14";

  //TypeError: Assignment to constant variable.
  PI = 3; // close enough
  console.log(PI);
 }
