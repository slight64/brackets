
module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const existBracket = {};
    for(let i = 0; i < bracketsConfig.length; i += 1) {
        existBracket[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    stack.push(str.charAt(0));

    for(let i = 1; i < str.length; i += 1) {
        if(str.charAt(i) === existBracket[stack[stack.length - 1]]) {
            stack.pop();
        } else {
            stack.push(str.charAt(i));
        }
    }
    if (stack.length > 0) {return false;}
    return true;
};

function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.flat(Infinity);
    console.log(bracketsConfig)

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        itemIndex = bracketsConfig.indexOf(str[i])
        if(itemIndex % 2 === 0) {
            stack.push(str[i])
            console.log('stack: ' , stack);
        } else {
            if (bracketsConfig[itemIndex-1] === str[i] || bracketsConfig[itemIndex+1] === str[i]) {
                stack.pop()
                console.log('pop = ',stack.pop(), bracketsConfig[itemIndex-1])
                console.log('Else = ','Bracket Config = ',bracketsConfig[itemIndex-1],'Str = ' ,str[i]);
            } else {
                console.log('else false');
                return false
            }
        }
    }
    return stack.length === 0;
};

// console.log(check('([{}])',[['(', ')'], ['[', ']'], ['{', '}']]))
console.log(check('111115611111111222288888822225577877778775555666677777777776622222',[['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]))
