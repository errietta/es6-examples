class Listing {

  constructor() {
    this.available = true;

    setTimeout(function() {
      this.available = false;
      // this refers to the function
      console.log(this);
    }, 1000);
  }
}

let listing = new Listing();

setTimeout(function() {
 console.log(listing.available);
}, 1500);

