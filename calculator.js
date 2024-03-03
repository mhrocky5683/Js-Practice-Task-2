// 22-7 Simple Calculator To Call Function Inside A Function

function add (num1, num2){
    return num1 +  num2;

}

function subtract (num1, num2){
    return num1 - num2;
}
function multy (num1, num2){
    return num1 * num2;
}
function sdivide (num1, num2){
    return num1 / num2;
}


function calculator (a,b,operation){

    if (operation ==='add'){
        const result = add(a,b);
        return result;
    }

    else if (operation === 'subtract'){
        const result = subtract( a, b)
        return result;
    }

    else if (operation === "multy"){
        return multy ( a,b);
    }
}

const result =calculator(5,6, 'multy' );
console.log(result);