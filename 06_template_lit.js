const listing = {
  description: 'Closet for rent in central London',
  price: 1800,
  frequency: 'per_month',
};

console.log(`Listing information:
${listing.description}
${listing.price} ${listing.frequency === 'per_month' ? 'PCM': 'Per week'}
`);
