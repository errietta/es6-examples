function showcase_var() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); 			//2
  }

  console.log(x);				//2
 }

function showcase_let() {
 let x = 1;

 if (true) {
   let x = 2;
   console.log(x);		//2
 }

 console.log(x);			//1
}

showcase_var();
//showcase_let();
