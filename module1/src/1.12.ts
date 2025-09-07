{
  // nullable, unknown , never

  const searchName = (value: string | null) => {
    if (value) {
      console.log(value);
    } else {
      console.log("There is no search result");
    }
  };

  searchName(null);

  //
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond("1000 ms^-1");

  // never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("rgetgrtgrtg");
}
