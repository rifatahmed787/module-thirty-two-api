const user = { id: 2, name: 'rifat', job: 'nai' };
const stringified = JSON.stringify(user);
console.log(stringified);


const shop = {
    owner: 'alia',
    address: {
        street: 'kochukhet, voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['Laptop', 'monitor', 'phone', 'mic'],
    revenue: 45000,
    isOpen: true,
    inNew: false
};
console.log(shop);
const shopString = JSON.stringify(shop);
console.log(shopString);

const shopObj = JSON.parse(shopString);
console.log(shopObj);

