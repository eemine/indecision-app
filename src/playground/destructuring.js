// const person = {
// name: 'Amina',
// age: 27,
// location: {
//     city: 'Riga',
//     temp: 5
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self Publisher' } = book.publisher;

// console.log(publisherName);


// const adress = ['1299 H.Z.Taghijev', 'Baku', 'Masasir', '12147'];

// const [, city, state] = adress;

// console.log(`You are in ${city} ${state}.`);

const item = ['Cofee(hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);