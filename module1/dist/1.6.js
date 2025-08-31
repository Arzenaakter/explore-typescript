"use strict";
// Learning function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(10, 2);
const addArrow = (num1, num2) => num1 + num2;
// object- funtion- method
const myUser = {
    firstName: "arzena",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
const arr = [1, 2, 4];
const newArr = arr.map((element) => element * element);
console.log(newArr);
