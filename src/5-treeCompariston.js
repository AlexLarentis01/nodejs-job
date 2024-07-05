function isObject(value) {
    return typeof value === 'object' && value !== null;
  }
  
  function getKeys(obj) {
    return Object.keys(obj);
  }
  
  function appendPath(path, key) {
    return path ? `${path}.${key}` : key;
  }
  
  function createObjectDifferenceList(objOld, objNew) {
    let diffList = [];
    // TODO: Implement the function
    
    return diffList;
  }
  
  // Export the function for testing
  module.exports = { createObjectDifferenceList };