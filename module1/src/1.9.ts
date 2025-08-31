{
  // type alias

  type Student = {
    name: string;
    address?: string;
    age: number;
  };

  const std1: Student = {
    name: "arzena",
    age: 25,
  };
  const std2: Student = {
    name: "Mahmud",
    address: "Bogra",
    age: 25,
  };

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
