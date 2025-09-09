{
  // asynchronous typescript

  type User = {
    name: string;
  };

  const createPromise = (): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
      const data: User = { name: "ar" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const showData = async (): Promise<User> => {
    const data: User = await createPromise();
    console.log(data);
    return data;
  };
  showData();
}
