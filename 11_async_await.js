const universe = () => {
  console.log("function called");

  return new Promise((resolve,reject) => {
      setTimeout(() => resolve(42), 1000);
  })
};

const getAnswer = async () => {
  const answer = await universe();
  console.log('answer', answer);

  console.log('the end');
};

getAnswer();

