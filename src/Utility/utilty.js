//ultility functions
function isNumeric(num){
    return !isNaN(num)
  }
  
  const getInterval = (str) => {
    var result;
    var newNumber = '';
    for (var i = 0; i < str.length;++i) {
      newNumber += str[i];
      if (!isNumeric(newNumber)) {
        return result;
      }
      result = newNumber;
    }
    return result;
  }
  
  function getIndex(str) {
    for (var i = 0; i < str.length;++i) {
      if(!isNumeric(str[i])) return i
    }
    return str.length - 1;
  }
  
  const getUnit = (str) => {
    return str.substr(getIndex(str), str.length);
  }
  //end of utility
  module.exports = {getInterval,getUnit}
