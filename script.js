
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
