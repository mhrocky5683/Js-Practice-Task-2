// 22-8 Handle Unexpected Function Input Parameter Error

function multiply (num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !=='number'){
        return 'please provide of number'
    }
    const multi = num1 * num2;
    return multi;

}

const result = multiply ('5','seven');
console.log(result);
