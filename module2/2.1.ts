{
  // type assertion ,type narrowing

  let anything: any;
  anything = " affererger";
  anything = 3445;

  anything as string;
  anything as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      return parseFloat(value) * 100;
    } else if (typeof value === "number") {
      return value * 100;
    }
  };
  const result1 = kgToGm("10") as string;
  const result2 = kgToGm(10) as number;
}
