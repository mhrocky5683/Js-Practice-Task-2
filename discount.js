// 22-6 (Advanced) Multi-Layer Discount Price Calculation

function discountsPrice (quantity){

    if (quantity <= 100){
        const total = quantity * 100;
        return total;

    }
    else if ( quantity <= 200){
        const total = quantity * 90;
        return total
    }
    else {
        const total = quantity * 70;
        return total;
    }

}

const total = discountsPrice(200);
console.log(total);