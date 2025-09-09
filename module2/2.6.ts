{
  // constraints in typescript
  // user can't send any data within the params they  if its contrains that means some fix data should be send

  const addToStudent = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "next level development";
    return { ...student, course };
  };

  type User = {
    id: number;
    name: string;
    email: string;
    hashWatch?: string;
    devType?: string;
  };

  const student = addToStudent({
    // here can't send  age because this function extends some fix fields which is contraints,we should send also the extends fields here
    age: 23,
  });
  const student1: User = addToStudent({
    id: 1,
    name: "arzena",
    email: "a@gmail.com",
    devType: "frontnend",
  });
  const student2: User = addToStudent({
    id: 1,
    name: "arzena",
    email: "a@gmail.com",
    hashWatch: "Apple",
  });
}
