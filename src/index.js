module.exports = function towelSort (matrix) {
  let newMatrix = [];

  if (towelSort.arguments.length) {
    matrix.forEach((element, index) => {

      if (index % 2 == 1) {
        element = element.sort((a, b) => b - a);
        newMatrix = newMatrix.concat(element);
  
      } else if (index % 2 == 0) { 
        newMatrix = newMatrix.concat(element) 
      };
    });  
  }
  
  return newMatrix;
}
