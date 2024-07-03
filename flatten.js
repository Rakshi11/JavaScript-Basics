const flatten = (ar) => {
    try {
      return ar.flat(Infinity);
    } catch {
      return null;
    }
  };
  
  // Example usage for Flatten n-Dimensional Array
  const nestedArray = [1, [2, 3], [[4], [5]]];
  const flattenedArrayResult = flatten(nestedArray);
  console.log(flattenedArrayResult);
  document.getElementById('flattenedArray').textContent = JSON.stringify(flattenedArrayResult);