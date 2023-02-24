
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