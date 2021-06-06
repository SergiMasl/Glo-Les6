"use script";

let car = {
  model: "Mazda",
  year: 2006,
};
let obj = new Object();

car.turbocharging = true;

obj.color = "black";

car.style = obj;

car.style.color = "red";
//or obj.color = 'red'
