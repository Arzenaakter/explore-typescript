{
  // ternary ,optional chaining and nullish
  const age: number = 18;
  const isAdult = age >= 18 ? " Adult" : "Not Adult";
  console.log({ isAdult });

  // nullish

  const isAuthenticated = null;
  const authtenticated = isAuthenticated ?? "Guest";
  console.log(authtenticated);

  type User = {
    name: string;
    address: {
      presentAddress: string;
      parmanentAddress?: string;
    };
  };

  const user: User = {
    name: "abcs",
    address: {
      presentAddress: "svverv",
    },
  };

  const guest = user?.address?.parmanentAddress ?? "No addess found";
  console.log(guest);
}
