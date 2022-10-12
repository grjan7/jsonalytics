const ignoreOrInclude = (obj) => {
  let sumValue = 0;
  let keysLength = 0;

  for (let key in obj) {
    sumValue += obj[key];
    keysLength += 1;
  }

  if (sumValue == keysLength) {
    return 1;
  } else if (sumValue == 0) {
    return 0;
  } else {
    throw new Error("Use either 0 to ignore the field or 1 to include the field. Don't use them in combo.")
  }
}

const project = (objArray, projectKeys) => {

  const isIgnoreOrInclude = ignoreOrInclude(projectKeys);

  const projectArray = objArray.map((obj) => {
    let projectedObj = {};
    if (isIgnoreOrInclude == 1) {
      for (let key in projectKeys) {
        projectedObj[key] = obj[key];
      }
    }
    if (isIgnoreOrInclude == 0) {
      projectedObj = obj;
      for (let key in projectKeys) {
        delete projectedObj[key];
      }
    }
    return projectedObj;
  });

  return projectArray;

}



const objArray = [{
  name: "arun",
  age: 30,
  role: "Engineer",
  address: "124 main Street0",
  salary: "5 cr"
}, {
  name: "Asrun",
  age: 32,
  role: "Engineer",
  address: "140 main street",
  salary: "10 cr"
}];

project(objArray, {
  name: 1,
  salary:1
})