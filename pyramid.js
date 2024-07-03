const buildPyramid = (num) => {
    let pyramid = '';
    for (let i = 1; i <= num; i++) {
      pyramid += ' '.repeat(num - i) + '* '.repeat(i).trim() + '\n';
    }
    return pyramid;
  };
  
  // Example usage for Pyramid of Stars
  const pyramidHeight = 6;
  const pyramidResult = buildPyramid(pyramidHeight);
  console.log(pyramidResult);
  document.getElementById('pyramid').textContent = pyramidResult;