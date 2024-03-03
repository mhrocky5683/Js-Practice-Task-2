// 22-5 Calculate The Total Cost Of The Products In A Shopping Cart


const Products = [
    {name: 'shampo', price: 200},
    {name: 'chiruni', price: 100},
    {name: 'shart', price: 600},
    {name: 'pant', price: 700},
]

function getShoppingTotal ( Products){

    let total =0;

    for (const Product of Products){
        total = total + Product.price;

    }
return total;

}
const Total = getShoppingTotal(Products);
console.log('total price is:', Total);