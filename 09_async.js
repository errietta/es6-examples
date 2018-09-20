
const old_async_universe = (callback_function => {
  setTimeout(() => callback_function(42), 1000)
});

old_async_universe(answer => console.log('answer', answer));

