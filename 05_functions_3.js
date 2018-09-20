class Listing {

  constructor() {
    this.available = true;

    setTimeout(() => {
      this.available = false;
      // this refers to 'Listing'
      console.log(this);
    }, 1000);
  }
}

let listing = new Listing();

setTimeout(function() {
 console.log(listing.available);
}, 1500);

