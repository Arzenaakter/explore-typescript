{
  // generic with interface

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      display: string;
    };
    smartWatch: T;
  }
  const poorDeveloper: Developer<{ name: string }> = {
    name: "abc",
    computer: {
      brand: "absd",
      model: "ferge",
      display: "aferf",
    },
    smartWatch: {
      name: "wfrf",
    },
  };

  const richDeveloper: Developer<{ name: string; model: string }> = {
    name: "abc",
    computer: {
      brand: "absd",
      model: "ferge",
      display: "aferf",
    },
    smartWatch: {
      name: "wfrf",
      model: "sferf",
    },
  };
}
