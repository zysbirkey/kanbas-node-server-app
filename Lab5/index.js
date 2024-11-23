import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithModule from "./WorkingWithModule.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithModule(app);
  WorkingWithArrays(app);
};

  