const convert = (arr, key) => {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = obj;
    return acc;
  }, {});
};

// Example usage for Convert Array of Objects to Object
const inputArray = [{ id: 1, value: 'abc' }, { id: 2, value: 'xyz' }];
const convertedObjectResult = convert(inputArray, 'id');
console.log(convertedObjectResult);
document.getElementById('convertedObject').textContent = JSON.stringify(convertedObjectResult, null, 2);