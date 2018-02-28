module.exports = function getZerosCount(number) {
  var number = number;
  var count = 0;
  var multiple = 5;
  var num = 5;
  while ( num <= number ){
  	count += Math.floor(number/num);
  	num *= multiple;
  }
  return count;
}
