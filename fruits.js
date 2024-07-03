const fruitList = [
    { name: 'banana', color: 'yellow', pricePerKg: 50 },
    { name: 'apple', color: 'red', pricePerKg: 100 },
    { name: 'orange', color: 'orange', pricePerKg: 120 }
  ];
  
  const getDetails = (fname) => {
    try {
      const fruit = fruitList.find(fruit => fruit.name === fname);
      return `Fruit color: ${fruit.color}\nFruit price: ${fruit.pricePerKg}`;
    } catch {
      return null;
    }
  };
  
  // Example usage for Fruit List
  const fruitName = 'apple';
  const fruitDetailsResult = getDetails(fruitName);
  console.log(fruitDetailsResult);
  document.getElementById('fruitDetails').textContent = fruitDetailsResult;