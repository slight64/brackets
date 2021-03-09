module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.flat(Infinity);
  let stack = [];
  for (let i of str) {
    let itemIndex = bracketsConfig.indexOf(i);
    if(itemIndex % 2 === 0) {
      stack.push(itemIndex + 1)
    } else {
      if (stack.pop() !== itemIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
