{
  // spread operator
  // rest operator
  // destructuring

  const bros1: string[] = ["a", "b", "c"];

  const bros2: string[] = ["d", "e", "f"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: " abedin",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prizma: "Firoz",
    next: "Tanmoy",
    Cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // rest operator

  const greedingFrd = (...friends: string[]) => {
    friends.forEach((frd) => console.log(`Hi ${frd}`));
  };
  greedingFrd("abul", "babul", "kabul");
}
