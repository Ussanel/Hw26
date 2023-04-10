// // Завдання 1 :)
// let car = {
//     type: 'electric',
//     wheels: 4
// }
// let sportCar ={
//     doors: 2
// }
// // 1.1
// Object.setPrototypeOf(sportCar, car)
// console.log(sportCar)

// // 1.2
// let passengerCar = {
//     doors:4
// }
// Object.setPrototypeOf(passengerCar,car)
// console.log(passengerCar)

// // 1.3
// let toyCar = {
//     type: 'toy'
// }
// Object.setPrototypeOf(toyCar, sportCar)
// console.log(toyCar)


// //  АБО 1.3 
// let toyCar = Object.create(sportCar)
// toyCar.type = 'toy'
// console.log(toyCar)


// Завдання 2

// let employees = {
//     wallet: {},
//     pay(munth, sum) {
//         this.wallet[munth] = sum;
//     }
// }
// let frontendDeveloper = {
//     name: 'Mike',
// }
// Object.setPrototypeOf(frontendDeveloper, employees);
// frontendDeveloper.wallet = {}

// let backendDeveloper = {
//     name: 'Bob',
// }
// Object.setPrototypeOf(backendDeveloper, employees);
// backendDeveloper.pay('june', 1500);

// console.log(backendDeveloper.wallet.june);
// console.log(frontendDeveloper.wallet.june);


// // Завдання 3 :)

// function User(name, age){
//     this.name =name,
//     this.age = age
// }
// let user_1= new User('Mike', 18)
// let user_2 = Object.create(user_1)
// user_2.name = 'Bob'
// user_2.age = 25
// console.log(
//     user_2
// )

//  Завдання 4


// function UserType(name) {
//     for (let i = 0; i < name.length; ++i) {
//         this[i] = name[i];
//         if (i + 1 == name.length) {
//             Object.defineProperty(this, 'length',{
//                 writable: false ,
//                 enumarable: true,
//                 configurable: true,
//                 value: i+1
//             })
//         }
//     }

// }

// let admins = new UserType(['Mike', 'Bob', 'Nicola'])
// admins.join = Array.prototype.join;
// console.log(admins.join(';'))