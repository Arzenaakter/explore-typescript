// Learning function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(10, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object- funtion- method

const myUser = {
  firstName: "arzena",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const arr: number[] = [1, 2, 4];
const newArr: number[] = arr.map((element: number) => element * element);
console.log(newArr);
