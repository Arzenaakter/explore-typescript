{
  // function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("abcd");
  const result2 = createArrayWithGeneric<string>("abcs");

  type User = { name: string; roll: number };

  const result3 = createArrayWithGeneric<User>({
    name: "arzena",
    roll: 12,
  });
}
