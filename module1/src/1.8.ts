{
  // destructuring

  const user = {
    name: {
      firstName: "arzena",
      lastName: "akter",
    },
    contactNo: "012324",
    address: "Bogra",
  };
  const {
    contactNo,
    name: { firstName },
  } = user;

  // arrau destructring

  const myFrds = ["moika", "chandler", "ross", "fibi"];

  const [, , bestfrd, ...rest] = myFrds;
}
