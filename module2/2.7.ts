{
  // generic constraints with keyof operator

  const getValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "arzena",
    age: 25,
  };
  const result1 = getValue(user, "age");
  const result2 = getValue(user, "amni"); // can't send any type of key because its extends with the object's key,we can only use that objects key
}
