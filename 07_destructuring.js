const args = [ 1,  'mango', 'cider' ];
const [, flavour, drink ] = args;

console.log(flavour, drink);

const listing = {
  description: 'Closet for rent in central London',
  price: 1800,
  frequency: 'per_month',
};

const { description, price, frequency } = listing;

console.log(description, price, frequency);
