
// task 1

let car = {
   type: 'electric',
   wheels: 4,

}

let sportCar = {
   doors: 2
}
Object.setPrototypeOf(sportCar, car);
console.log(sportCar);
let passengerCar = {
   doors: 4,
}
Object.setPrototypeOf(passengerCar, car);
console.log(passengerCar);
let toyCar = {
   type: 'toy',
}
Object.setPrototypeOf(toyCar, sportCar);
console.log(toyCar);

// task 2

let employees = {
   wallet: {},
   pay(month, sum){
      this.wallet[month] = sum;
   }
}
let frontendDeveloper = Object.create (employees, employees.pay);
   frontendDeveloper.name = 'Mike';
   frontendDeveloper.wallet = {};

let backendDeveloper = Object.create (employees, employees.pay);
   backendDeveloper.name = 'Bob';
   backendDeveloper.wallet = {};

   backendDeveloper.pay('june', 1500);
console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);

// task 3

function User(name, age){
   this.name = name;
   this.age = age
}
let user_1 = new User('Mike', 18);
let user_2 = Object.create(user_1);
user_2.name = 'Bob';
user_2.age = 25;
console.log(user_2);

// task 4

function UserType(name){
   for(let i = 0; i < name.length; ++i){
      this[i] = name[i];
      if(i + 1 == name.length){
         Object.defineProperty(this, 'length', {
            enumerable: true,
            writable: false,
            configurable: true,
            value: i + 1
         });
      }
   }
}
let admins = new UserType(['Mike', 'Bob', 'Nikola']);
admins.join = Array.prototype.join;
console.log(admins.join('; '));