function memoize(defaultValue) {
  let memoizedData = defaultValue;

  function getMemData() {
    return memoizedData;
  }

  function setMemData(value) {
    memoizedData = value;
  }

  return [getMemData, setMemData];
}


const memData = memoize([1, 2, 3]);
const getMemData = memData[0];
const setMemData = memData[1];

console.log(getMemData()); // поверне [1, 2, 3]
setMemData('test');
console.log(getMemData()); // поверне 'test'
