{
  // type vs interface

  type RollNumber = number;

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user: UserWithRole2 = {
    name: "ferfer",
    age: 22,
    role: "awfr",
  };

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNum: Roll2 = [1, 2, 3];
}
