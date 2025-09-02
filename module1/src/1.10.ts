{
  // union and intersection types
  type FrontendDeveloper = "FakibazDeveloper" | "FrontendDeveloper";

  const dev: FrontendDeveloper = "FrontendDeveloper";

  type FrontDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontDev & BackendDev;

  const fullstackDeveloper: FullStackDeveloper = {
    skills: ["react", "express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
