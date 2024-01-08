const removeFromArray = function(arr, ...elementsToRemove) {
    // let removeIndex = arr.indexOf(params);

    elementsToRemove.forEach(element => {
        const index = arr.indexOf(element);
        if (index !== -1) {
          arr.splice(index, 1);
        }
      });
    
      // Alternatively, you can use the filter method:
      // arr = arr.filter(item => !elementsToRemove.includes(item));
    
      return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
