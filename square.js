//   exporting one property at a time
  exports.area = function (width) {
    return width * width;
  };
  exports.perimeter = function (width) {
    return 4 * width;
  };
  

//   exporting a complete object in one assignment 
module.exports = {  
    area(width) {
      return width * width;
    },
  
    perimeter(width) {
      return 4 * width;
    },
  };
