module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.flat(Infinity);
    str = str.split('');
    let stack = [];
    for (let i = 0; i < str.length; i++) {


        if (bracketsConfig.indexOf(str[i]) % 2 === 0) {
            stack.push(str[i]);
            console.log('push', stack);
        } else if (stack.pop() === bracketsConfig[bracketsConfig.indexOf(str[i - 1])]) {
            stack.pop();
            console.log(stack);
        }
        return stack.length === 0;
    }
};
