
module.exports = function towelSort (matrix) { 
  if (!matrix || matrix.length == 0) {
    return [];
  } 
  if (matrix.length > 1) {

    for (let i=1; i<matrix.length; i+=2) {
      matrix[i].sort((a,b)=>b-a)
    }
    return matrix.flat();
  }
}
