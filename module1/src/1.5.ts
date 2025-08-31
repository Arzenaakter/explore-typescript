// reference type -- object
let user: {
  //   studentOf: "Programming Hero"; // literal type
  readonly studentOf: string; // readonly type
  firstName: string;
  middleName: string;
  lastName?: string; // optional type
  isMarried: boolean;
} = {
  studentOf: "Programming Hero",
  firstName: "Arzena",
  middleName: "Akter",
  isMarried: false,
};

// user.studentOf = "PH"; // error: Type '"PH"' is not assignable to type '"Programming Hero"'
