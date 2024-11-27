let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Dermal Veen',
        image: '1.jpg',
        price: 900.00
    },
    {
        id: 2,
        name: 'Arthri-Flex',
        image: '2.jpg',
        price: 750.00
    },
    {
        id: 3,
        name: 'Anchor Milk Powder',
        image: '3.jpg',
        price: 1100
    },
    {
        id: 4,
        name: 'Joint Ease',
        image: '4.jpg',
        price: 800
    },
    {
        id: 5,
        name: 'Simexol',
        image: '5.jpg',
        price: 500
    },
    {
        id: 6,
        name: 'Cod Liver Oil',
        image: '6.jpg',
        price: 500

    },
    {
        id: 7,
        name: 'Cetaphil',
        image: '7.jpg',
        price: 600
        
    }, 
    {
        id: 8,
        name: 'fish Oil',
        image: '8.jpg',
        price: 400
        
    },
    {
        id: 9,
        name: 'Infrared Thermometer',
        image: '9.jpg',
        price: 4900
        
    },
    {
        id: 10,
        name: 'Fish Oil',
        image: '10.jpg',
        price: 700
        
    },
    {
        id: 11,
        name: 'Pressure monitor',
        image: '11.jpg',
        price: 10500
        
    },
    {
        id: 12,
        name: 'Lancets',
        image: '12.jpg',
        price: 900
        
    },
    {
        id: 13,
        name: 'Omron Kit',
        image: '13.jpg',
        price: 1999
        
    },
    {
        id: 13,
        name: 'Primrose Oil',
        image: '14.jpg',
        price: 800
        
    },
    {
        id: 14,
        name: 'Liver Detox',
        image: '15.jpg',
        price: 500
        
    },
    {
        id: 15,
        name: 'Digestive probiotic',
        image: '16.jpg',
        price: 300
        
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}