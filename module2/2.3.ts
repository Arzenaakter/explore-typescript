{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 2, 3];
  const rollNumbers: GenericArray<number> = [1, 2, 3];

  //   const names: string[] = ["a", "b"];
  const names: GenericArray<string> = ["a", "b"];

  //   const BoolArr: boolean[] = [true, false, true];
  const BoolArr: GenericArray<boolean> = [true, false, true];

  type User = { name: string; age: number };

  const user: GenericArray<User> = [
    {
      name: "abc",
      age: 22,
    },
  ];

  type GenericTouple<X, Y> = [X, Y];

  const rolls: GenericTouple<number, number> = [1, 2];
}
