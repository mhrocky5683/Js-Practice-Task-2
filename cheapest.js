// 22-5 Calculate The Total Cost Of The Products In A Shopping Cart

const phones =[
    { name: 'samsung', price: 20000, camera: '12mp0', color: 'black'},
    { name: 'xaomi', price: 18000, camera: '12mp0', color: 'black'},
    { name: 'nokia', price: 35000, camera: '12mp0', color: 'black'},
    { name: 'iphone', price: 120000, camera: '12mp0', color: 'black'},
    { name: 'samphoy', price: 20000, camera: '12mp0', color: 'black'},
    { name: 'realme', price: 12000, camera: '12mp0', color: 'black'},
]

function getCheapestPhone (phones){
 let min = phones[0];

    for (const phone of phones){
        if ( phone.price > min.price){
            min = phone;
        }
    }
return min;
}

const cheap = getCheapestPhone (phones);
console.log('cheapest phone is:', cheap);
