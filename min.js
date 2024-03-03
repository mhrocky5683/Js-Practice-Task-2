const prices =[ 20000, 50000, 100000, 12000, 30000];

function getMin ( number){
    let min = number[0];
    for(const num of number){
        if(num < min){
            min = num;

        }
    }
    return min;
}
const cheap = getMin(prices);
console.log('cheap mobiale is:', cheap);

